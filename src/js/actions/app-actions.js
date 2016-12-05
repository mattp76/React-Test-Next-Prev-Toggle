var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
	decreaseArticles:function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.DECREASE_ARTICLES,
			index: index
		});
	},
	increaseArticles:function(index){
	    
		
		console.log('INCREASING:', index);
	
	
		AppDispatcher.handleViewAction({
			actionType: AppConstants.INCREASE_ARTICLES,
			index: index
		});
	},

}


module.exports = AppActions;