const { csvToHtmlTable } = require("./src/csv2html");

Cypress.Commands.add("csv2html", csvToHtmlTable);
