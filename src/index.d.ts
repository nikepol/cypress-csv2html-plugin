declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to convert CSV into HTML table with by data-cy attributes.
       * @example cy.csv2html('/cypress/fixtures/example.csv');
       */
      csv2html(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
