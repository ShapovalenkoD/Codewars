// My solution
var React = require("react");

function createElement(content, tag = "div", props) {
  return React.createElement(tag, props, content);
}

function createUnorderedList(list) {
  return React.createElement(
    "ul",
    {},
    list.map((str, i) => React.createElement("li", { key: i }, str))
  );
}

// Top solution
let React = require('react'),
    createElement = (content, tag = 'div', opts) => React.createElement(tag, opts, content),
    createUnorderedList = arr => { 
      let children = arr.map((el,i) => createElement(el, 'li', { key: i }) )
      return createElement(children, 'ul')
    }