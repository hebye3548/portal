(function(){
	angular.module('App').controller('LoginCtrl',['$scope','$state','HttpService',function($scope,$state,HttpService){
		$scope.login = function(credentials){console.info(credentials)
			/*$state.go('container.index')
			HttpService.post('/login',credentials).then(function(response){
				console.log(response)
			},function(response){
				console.error(response)
			});*/
		}
	}])
})()