# @composi/render-to-string

A function to convert a @composi/core functional component into a string of HTML markup for use on the server. Using this instead of the @composi/core `render` function allows you to render components into an html page on the server.

## Install

```sh
npm i -D @composi/render-to-string
```

## Import into Project
This is a CommonJS module for use with Node, so import it like any Node module:

```javascript
const renderToString = require('@composi/render-to-string')
```

## Usage

To use `renderToString` you need to things, state and a functional component. You need to capture the result in a variable so that you can concatenate or inject it into the markup for the page the server will generate.

```javascript
// A component to render:
function Title({greeting, title}) {
  return (
    <nav class={title}>
      <h1 class="header--main">Hello, {greeting}!</h1>
    </nav>
  )
}

// Convert component into html string:
const renderedTitle = renderToString(<Title greeting='World' />)
```
It's assumed that you would be using this to get a faster page load. But after loading, you would enliven said content with @composi/core components. 

### Gotcha
When defining values for props, particular inline events, be aware that any values that you use should be quoted using double quotes. That's because all prop values, including events, get enclosed in single quotes.
