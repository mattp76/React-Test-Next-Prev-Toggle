var React = require('react');
var AppActions = require('../actions/app-actions');
var Decrease = 
  React.createClass({ 
    handleClick: function(){
		AppActions.decreaseArticles(this.props.id);
	},
	render: function(){
		return <button style={{display: this.props.hide ? "none" : "inline-block"}} onClick={this.handleClick}>Prev 5</button>
	}
});

module.exports = Decrease;
	