(function(){
	angular.module('App').controller('SidebarCtrl',['$scope','$location',function($scope,$location){
			console.info($location);
		$scope.isActive=function(path){
			return {'active':true}
		}
	}])
})();