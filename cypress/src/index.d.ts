// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Converts csv into a table format, a path should be provided
     * @example
     *  cy.csv2html('/fixtures/example.csv');
     */
    csv2html(label: string): Chainable<JQuery<HTMLElement>>
  }
}
