/** @jsx React.DOM */
var React = require('react');
var Articles = require('../components/app-articles');
var App = React.createClass({ 
	render: function(){
		return (
			<div>
			<h1>My article list</h1>
			<Articles />
			</div>
		)
	}
});

module.exports = App;
	