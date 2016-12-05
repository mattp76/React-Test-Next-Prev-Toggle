/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store');
var Increase = require('../components/app-increase');
var Decrease = require('../components/app-decrease');

function getInitialArticles() {
	return AppStore.getInitialArticles();
}

function getArticlesUpdated() {
	return AppStore.getArticlesUpdated();
}

var Articles =
	React.createClass({
		getInitialState:function(){
			return  {
				items: getInitialArticles(),
				pager: AppStore.getPager()
			}
		},
		componentWillMount:function(){
		  AppStore.addChangeListener(this._onChange)
		},
		_onChange:function(){
		  this.setState({
			items: getArticlesUpdated(),
			pager: AppStore.getPager()
		  });
		},
		render:function(){
			var items = this.state.items.map(function (item){
					return <tr><td>{item.id}</td><td>{item.title}</td><td><img src={item.img} className="catalog-img"/></td></tr>
			})
			return (
			   <div>
				<table className="table table-hover">
				  <tBody>
					{items}
				  </tBody>
				</table>
				<Increase />
				<Decrease hide={!this.state.pager} />
				</div>
			)
		}
});


module.exports = Articles;