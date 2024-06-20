export const csvToHtmlTable = (csv) => {
  // Function to convert CSV data to HTML table
  const convertCsvToHtmlTable = (csvData) => {
    const rows = csvData.trim().split("\n");
    const tableRows = rows.map((row) =>
      row.split(",").map((cell) => cell.trim())
    );

    let htmlTable =
      '<table border="1" style="border-collapse: collapse; width: 100%;">';

    tableRows.forEach((row, rowIndex) => {
      htmlTable += "<tr>";
      row.forEach((cell) => {
        if (rowIndex === 0) {
          htmlTable += `<th style="padding: 8px; text-align: left;">${cell}</th>`;
        } else {
          htmlTable += `<td style="padding: 8px; text-align: left;">${cell}</td>`;
        }
      });
      htmlTable += "</tr>";
    });

    htmlTable += "</table>";

    return htmlTable;
  };

  return convertCsvToHtmlTable(csv);
};
