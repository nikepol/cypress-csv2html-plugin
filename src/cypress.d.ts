// cypress/support/cypress.d.ts

/// <reference types="cypress" />

// Extending the Cypress namespace to include the csv2html command
declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to read a CSV file and display it as an HTML table
     * @param csvFilePath - The path to the CSV file
     */
    csv2html(csvFilePath: string): Chainable<void>
  }
}
