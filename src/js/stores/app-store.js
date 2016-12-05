var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign  = require('react/lib/Object.assign');

var CHANGE_EVENT = "change";
var _pager = 5;

var _articles = [];

for(var i=1; i<30; i++){
  _articles.push({
    'id': i,
    'title': 'Article title ' +i,
    'img': 'http://placehold.it/300x250&text=image ' + i
  });
}

_articlesUpdated = [];

function _increaseArticles(){
    _pager += 5;
   _articlesUpdated = _articles.slice(0, _pager);
}

function _decreaseArticles(){
   _pager -= 5;
  _articlesUpdated = _articles.slice(0, _pager);
}


console.log(new EventEmitter());

var AppStore = assign(new EventEmitter(), {
	emitChange:function(){
		this.emit(CHANGE_EVENT)
	},
	addChangeListener:function(callback){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener:function(callback){
	   this.removeListener(CHANGE_EVENT, callback)
	},
	
	getInitialArticles:function(){
		return _articles.slice(0,5);
	},
	
    getArticlesUpdated:function(){
		return _articlesUpdated;
	},
	
	getPager:function(){
		return _pager;
	},
	
	dispatcherIndex:AppDispatcher.register(function(payload){

	console.log('STORE REGISTERING CALLBACK WITH DISPATCHER:', payload);
	
    var action = payload.action; // this is our action from handleViewAction
	
    switch(action.actionType){
      case AppConstants.INCREASE_ARTICLES:
        _increaseArticles(payload.action.index);
        break;
	  case AppConstants.DECREASE_ARTICLES:
        _decreaseArticles(payload.action.index);
        break;
    }
    AppStore.emitChange();

    return true;
  })


})

console.log('APP->', AppStore);
module.exports = AppStore;

