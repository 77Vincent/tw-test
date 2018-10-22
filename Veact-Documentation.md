# Veact
Pure functional, simplified React-like Javascript library with built-in state management system for building reactive UIs.

## Table of content
[]()

## Quick Start 
```js
import Veact from 'Veact'

const model = {
  title: 'Hello World'
}

const App = app => <div>{app.model.title}</div>

Veact.createApp(document.getElementById('root'), model).mount(App)
```
The above "Hello World" example is a glance of the usage of the library, here are some notes:
- The example uses JSX syntax because Veact implements the same "creatElement" function as React does. Although JSX is not mandatory but it's like a syntax sugar that can boost the productivity. JSX is not natively supported by any Javascript runtime, to use it you need to enable a babel plugin called "@babel/plugin-transform-react-jsx" and to configure the .babelrc as follows:

```json
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", {
      "pragma": "Veact.createElement"
    }],
  ]
}
```

 