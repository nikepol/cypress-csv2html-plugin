<h2 align=center> cypress-csv2html-plugin </h2>
<p align="center">

A simple plugin to wrap a CSV file into HTML, this plugin also generates a **data-test**

## install

```
npm i -D cypress-csv2html-plugin
# or
yarn add -D cypress-csv2html-plugin
# or
pnpm add cypress-csv2html-plugin
# or
bun add -D cypress-csv2html-plugin
```

## use
Include from your Cypress support file or individual spec

```js
import 'cypress-csv2html-plugin/commands'
```

Then use the custom command `cy.csv2html`

```js
cy.csv2html('/fixtures/example.csv')
```
You can use **data-cy** for your tests
```
cy.get('[data-cy="csv-table-container"]') // Check the table values
cy.get('[data-cy="csv-table-header"]').contains('First Name') // Check the header values
cy.get('[data-cy="csv-table-cell"]').contains('Linda') // Check the cell value
```

## types

To get IntelliSense working with the default custom command `cy.csv2html` include in your specs

```js
/// <reference types="cypress-csv2html-plugin" />
```

## Small print

Author: Nikita Polyakov

License: MIT

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/nikepol/cypress-csv2html-plugin) on Github

## MIT License

Copyright (c) 2024 Nikita Polyakov &lt;nikepol@me.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
