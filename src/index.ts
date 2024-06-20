/// <reference types="cypress" />
/// <reference path="./index.d.ts" />

/**
 * Converts a CSV string to an HTML table.
 * @param csvData - The CSV data as a string.
 * @returns An HTML table string.
 */
export const csvToHtmlTable = (csvData: string): string => {
  const convertCsvToHtmlTable = (csvData: string): string => {
    const rows = csvData.trim().split('\n')
    const tableRows = rows.map((row) =>
      row.split(',').map((cell) => cell.trim()),
    )

    let htmlTable =
      '<table border="1" style="border-collapse: collapse; width: 100%;">'

    tableRows.forEach((row, rowIndex) => {
      htmlTable += '<tr>'
      row.forEach((cell) => {
        if (rowIndex === 0) {
          htmlTable += `<th style="padding: 8px; text-align: left;">${cell}</th>`
        } else {
          htmlTable += `<td style="padding: 8px; text-align: left;">${cell}</td>`
        }
      })
      htmlTable += '</tr>'
    })

    htmlTable += '</table>'

    return htmlTable
  }

  return convertCsvToHtmlTable(csvData)
}

/**
 * Custom Cypress command to convert a CSV file to an HTML table and insert it into the document.
 * @param name - The name of the custom command (default is 'csv2html').
 */
const csv2html = (name: string = 'csv2html'): void => {
  Cypress.Commands.add(
    name as keyof Cypress.Chainable, //@ts-ignore
    (csvFilePath: string) => {
      const log = Cypress.log({
        name: 'csv2html',
        message: csvFilePath,
      })

      return cy
        .readFile(csvFilePath, 'utf8', { log: false })
        .then((csvData: string) => {
          const htmlTable = csvToHtmlTable(csvData)

          return cy.document({ log: false }).then((doc: Document) => {
            const container = doc.createElement('div')
            container.id = 'csv-table-container'
            container.setAttribute('data-cy', 'csv-table-container')
            container.innerHTML = htmlTable
            container.style.cssText =
              'position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; background-color: white; z-index: 9999; padding: 20px;'

            // Add data-cy attribute to every cell in the table
            const table = container.querySelector('table')
            if (table) {
              // Handle the first row (header)
              const firstRow = table.querySelector('tr')
              if (firstRow) {
                const headerCells =
                  firstRow.querySelectorAll('th, td')
                headerCells.forEach((cell) => {
                  cell.setAttribute('data-cy', `csv-table-header`)
                })
              }

              // Handle the remaining rows
              const rows = table.querySelectorAll('tr')
              rows.forEach((row, rowIndex) => {
                if (rowIndex !== 0) {
                  const cells = row.querySelectorAll('td, th')
                  cells.forEach((cell) => {
                    cell.setAttribute('data-cy', `csv-table-cell`)
                  })
                }
              })
            }

            doc.body.appendChild(container)
          })
        })
    },
  )
}

export { csv2html }
