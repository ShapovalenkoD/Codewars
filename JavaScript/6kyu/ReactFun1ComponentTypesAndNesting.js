// My solution
const React = require("react");

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

class World extends React.Component {
  render() {
    return <h2>World!</h2>;
  }
}

class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}

// Top solution
const React = require('react');
const Hello = () => <h1>Hello</h1>; 
const World = () => <h2>World!</h2>;
class Greet extends React.Component{
  render() {
    return <div><Hello/><World/></div>;  
  }
}