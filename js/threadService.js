angular.module('rtfmApp')
.service('threadService', function(firebaseUrl) {

	this.getThreads = function() {
		return new Firebase(firebaseUrl + '/threads');
	};


	this.getThread = function(threadId) {
		return new Firebase(firebaseUrl.url+'/threads/'+threadId);
	};


});