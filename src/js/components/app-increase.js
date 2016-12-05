var React = require('react');
var AppActions = require('../actions/app-actions');
var Increase = 
  React.createClass({ 
    handleClick: function(){
		AppActions.increaseArticles(this.props.id);
	},
	render: function(){
		return <button onClick={this.handleClick}>Next 5</button>
	}
});

module.exports = Increase;
	