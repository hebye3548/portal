(function(){
	angular.module('App').controller('LoginCtrl',['$scope','$state','HttpService',function($scope,$state,HttpService){
		$scope.login = function(credentials){
			console.info(credentials)
			return;
			$state.go('index.damService')
			HttpService.post('/login',credentials).then(function(response){
				console.log(response)
			},function(response){
				console.error(response)
			});
		}
	}])
})()