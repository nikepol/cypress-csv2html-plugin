<h2 align=center> cypress-csv2html-plugin </h2>
<p align="center">

A simple plugin to wrap a CSV file into HTML, this plugin also generates a **data-test**

## Installation

```
npm i -D cypress-csv2html-plugin
# or
yarn add -D cypress-csv2html-plugin
# or
pnpm add cypress-csv2html-plugin
# or
bun add -D cypress-csv2html-plugin
```

## How To Use
Import into e2e.js
```js
import { csv2html } from "cypress-csv2html-plugin";
csv2html();
```

Then use the custom command `cy.csv2html`

```js
cy.csv2html('cypress/fixtures/example.csv')
```
You can use **data-test** for your tests
```
cy.get('[data-test="csv-table-container"]') // Check the table values
cy.get('[data-test="csv-table-header"]').contains('First Name') // Check the header values
cy.get('[data-test="csv-table-cell"]').contains('Linda') // Check the cell value
```

## Types

To get IntelliSense working with the default custom command `cy.csv2html` include in your specs

```js
/// <reference types="cypress-csv2html-plugin" />
```

## Small print

Author: Nikita Polyakov

License: MIT

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/nikepol/cypress-csv2html-plugin/issues) on Github
