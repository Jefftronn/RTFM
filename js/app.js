angular.module('rtfmApp', ['ui.router', 'firebase'])

	.constant('firebaseUrl', 
  		 'https://rtfm-jeff.firebaseio.com/')
	
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider

			.state('threads', {
				url: '/threads',
				controller: 'threadsCtrl',
				templateUrl: 'js/views/threads.html',
				resolve: {
					threadsRef: function(threadService) {
						return threadService.getThreads();
					}
				}
			})

			.state('thread', {
				url: '/threads/:threadId',
				controller: 'threadCtrl',
				templateUrl: 'js/views/thread.html'
			})

		$urlRouterProvider.otherwise('/threads');
	});