require("../src");

describe("template spec", () => {
  it("passes", () => {
    cy.csv2html("cypress/fixtures/customers-100.csv");

    cy.get("#csv-table-container") // Check the table values
      .should("contain", "Index")
      .should("contain", "First Name")
      .should("contain", "Company")
      .should("contain", "City")
      .should("contain", "Country");
  });
});
