"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>New Title</h1>
        <p>Practicing react</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn mone</Link>
      </div>
    );
  }
});

module.exports = Home;
