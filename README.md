<h2 align=center> cypress-csv2html-plugin [![ci status][ci image]][ci url] [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-13.11.0-brightgreen)</h2>
<p align="center">

A simple plugin to wrap a CSV file into HTML

## install

```
npm i -D cypress-csv2html-plugin
# or
yarn add -D cypress-csv2html-plugin
```

## use

### Simple

Include from your Cypress support file or individual spec

```js
import 'cypress-csv2html-plugin/commands'
```

Then use the custom command `cy.getByLabel`

```js
cy.csv2html('/fixtures/example.csv')
```

## types

To get IntelliSense working with the default custom command `cy.csv2html` include in your specs

```js
/// <reference types="cypress-csv2html-plugin" />
```

For example in VSCode you will see

![IntelliSense](images/intellisense.png)

[ci image]: https://github.com/bahmutov/cypress-get-by-label/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/bahmutov/cypress-get-by-label/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

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
