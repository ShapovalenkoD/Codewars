// My solution
let React = require('react')

var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>; 

var CodewarsLink = React.createClass({
  render() {
    const userName = "http://www.codewars.com/users/" + this.props.user
    return (
      <a href={userName}>{this.props.user}</a>
    )
  }
});

var Leaderboard = React.createClass({
  render() {
    return (
      <div>
        {this.props.leaders.map((people, index) => {
          const hrefName = `http://www.codewars.com/users/${people}`
          return <a key={index} href={hrefName}>{people}</a>
        })}
      </div>
    )
  }
});

// Top solution
let React = require('react')
//No Oxford comma? Shame on you. http://www.verbicidemagazine.com/wp-content/uploads/2014/01/rhinoceri-washington-lincoln-oxford-serial-comma.jpg
var myHeader = <h1>My three favorite codewarriors are Azuaron, Azuaron, and Azuaron</h1>;
var CodewarsLink = React.createClass({
  render: function() {
    return <a href={"http://www.codewars.com/users/" + this.props.user}>{this.props.user}</a>;
  }
});
var Leaderboard = React.createClass({
  render: function() {
    return (<div>{this.props.leaders.map(function(l, i) {return <CodewarsLink user={l} key={i}/>;})}</div>);
  }
});