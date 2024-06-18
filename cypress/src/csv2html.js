// cypress/utils/csvToHtmlTable.ts

export const csvToHtmlTable = (csv) => {
    const rows = csv.trim().split('\n');
    const tableRows = rows.map(row => row.split(',').map(cell => cell.trim()));

    let htmlTable = '<table border="1" style="border-collapse: collapse; width: 100%;">';

    tableRows.forEach((row, rowIndex) => {
        htmlTable += '<tr>';
        row.forEach(cell => {
            if (rowIndex === 0) {
                htmlTable += `<th style="padding: 8px; text-align: left;">${cell}</th>`;
            } else {
                htmlTable += `<td style="padding: 8px; text-align: left;">${cell}</td>`;
            }
        });
        htmlTable += '</tr>';
    });

    htmlTable += '</table>';

    return htmlTable;
};