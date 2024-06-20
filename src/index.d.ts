declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to convert CSV to HTML table, use a path to your file as a parameter
     * @example cy.csv2html('cypress/fixtures/yourfile.csv');
     */
    csv2html(csvContent: string): Chainable<string>
  }
}
