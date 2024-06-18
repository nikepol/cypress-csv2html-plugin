// cypress/support/commands.ts

import { csvToHtmlTable } from "../src/csv2html";

Cypress.Commands.add("convertCsvToHtmlTable", (csvFilePath) => {
  cy.readFile(csvFilePath, { encoding: "utf8" }).then((csvData) => {
    const htmlTable = csvToHtmlTable(csvData);

    cy.document().then((doc) => {
      const container = doc.createElement("div");
      container.id = "csv-table-container";
      container.setAttribute("data-test", "csv-table-container");
      container.innerHTML = htmlTable;
      container.style.cssText =
        "position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; background-color: white; z-index: 9999; padding: 20px;";

      // Add data-test attribute to the table itself
      const table = container.querySelector("table");
      if (table) {
        table.setAttribute("data-test", "csv-table");
      }

      doc.body.appendChild(container);
    });
  });
});
