export const csvToHtmlTable = (csv: string): string => {
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

    return cy
      .readFile(csvFilePath, 'utf8') // Pass 'utf8' as the second argument
      .then((csvData: string) => {
        const htmlTable = csvToHtmlTable(csvData)
        return cy.document({ log: false }).then((doc) => {
          const container = doc.createElement('div')
          container.id = 'csv-table-container'
          container.setAttribute('data-test', 'csv-table-container')
          container.innerHTML = htmlTable
          container.style.cssText =
            'position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; background-color: white; z-index: 9999; padding: 20px;'

          const table = container.querySelector('table')
          if (table) {
            // Handle the first row (header) and remaining rows with data-test attributes
            // (code remains unchanged)
          }

          doc.body.appendChild(container)
          return cy.wrap(container) // Return the container for further assertions
        })
      })
  })
}

export { csv2html }
