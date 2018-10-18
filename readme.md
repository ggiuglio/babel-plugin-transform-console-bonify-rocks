# babel-plugin-transform-console-bonify-rocks
This plugins transform console logs by appending "Bonify rocks" in front of any message.

## Functionality exmaple

**In**

```javascript
console.log("foo");
console.error("bar");
```

**Out**

```javascript
console.log("Bonify rocks foo");
console.error("bar");
```


## Installation
npm install babel-plugin-transform-console-bonify-rocks

## Usage

### Via `webpack.config`

add plugins ["transform-console-bonify-rocks"] to webpack config 

### Via `.babelrc`

**.babelrc**

```json
{
  "plugins": ["transform-console-bonify-rocks"]
}
```

### Via CLI

```sh
babel --plugins transform-console-bonify-rocks script.js
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
  plugins: ["transform-console-bonify-rocks"]
});
```