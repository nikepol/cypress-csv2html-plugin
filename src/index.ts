export const csvToHtmlTable = (csv: string): string => {
  const convertCsvToHtmlTable = (csvData: string): string => {
    const rows = csvData.trim().split('\n')
    const tableRows = rows.map((row) =>
      row.split(',').map((cell) => cell.trim()),
    )
    let htmlTable =
      '<table style="border-collapse: collapse; width: 100%; margin: 25px 0; font-size: 0,rem; font-family: "IBM Plex Sans", sans-serif; min-width: 500px; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); border-radius: 4px; border: 1px solid #e0e0e0;">'
    tableRows.forEach((row, rowIndex) => {
      htmlTable += `<tr style="${rowIndex === 0 ? 'background-color:rgb(0, 0, 0); color: #ffffff;' : ''}">`
      row.forEach((cell) => {
        if (rowIndex === 0) {
          htmlTable += `<th style="padding: 12px 16px; text-align: left; font-weight: 400; border-bottom: 2px solid #d1d1d6; font-size: 0.9em; color: #ffffff;">${cell}</th>`
        } else {
          htmlTable += `<td style="padding: 12px 16px; text-align: left; border-bottom: 1px solid #d1d1d6; font-size: 1em; background-color: #f4f4f4; color: #333;">${cell}</td>`
        }
      })
      htmlTable += '</tr>'
    })
    htmlTable += '</table>'
    return htmlTable
  }
  return convertCsvToHtmlTable(csv)
}

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      csv2html(csvFilePath: string): Chainable<void>
    }
  }
}

function csv2html(name: string = 'csv2html'): void {
  //@ts-ignore
  Cypress.Commands.add('csv2html', (csvFilePath: string) => {
    const log = //@ts-ignore
      Cypress.log({
        name: 'csv2html',
        message: csvFilePath,
      })

    return (
      cy
        //@ts-ignore
        .readFile(csvFilePath, { encoding: 'utf8', log: false }) // Place 'utf8' and options within an object
        .then((csvData: string) => {
          const htmlTable = csvToHtmlTable(csvData)
          return cy.document({ log: false }).then((doc) => {
            const container = doc.createElement('div')
            container.id = 'csv-table-container'
            container.setAttribute('data-test', 'csv-table-container')
            container.innerHTML = htmlTable
            container.style.cssText =
              'position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; background-color: white; z-index: 9999; padding: 20px;'

            // Add data-test attribute to every cell in the table
            const table = container.querySelector('table')
            if (table) {
              // Handle the first row (header)
              const firstRow = table.querySelector('tr')
              if (firstRow) {
                const headerCells =
                  firstRow.querySelectorAll('th, td')
                headerCells.forEach((cell) => {
                  cell.setAttribute('data-test', `csv-table-header`)
                })
              }

              // Handle the remaining rows
              const rows = table.querySelectorAll('tr')
              rows.forEach((row, rowIndex) => {
                if (rowIndex !== 0) {
                  const cells = row.querySelectorAll('td, th')
                  cells.forEach((cell) => {
                    cell.setAttribute('data-test', `csv-table-cell`)
                  })
                }
              })
            }
            doc.body.appendChild(container)
            return cy.wrap(container, { log: false }) // Return the container for further assertions
          })
        })
    )
  })
}

export { csv2html }
