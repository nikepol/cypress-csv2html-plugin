describe('template spec', () => {
  it('passes', () => {
    cy.csv2html('cypress/fixtures/customers-100.csv')

    cy.get('[data-test="csv-table-container"]') // Check the table values
      .should('contain', 'Index')
      .should('contain', 'First Name')
      .should('contain', 'Company')
      .should('contain', 'City')
      .should('contain', 'Country')
    cy.get('[data-test="csv-table-header"]').contains('First Name') // Check the header values
    cy.get('[data-test="csv-table-cell"]').contains('Linda')
  })
})
