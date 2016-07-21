(function(){
	angular.module("App").service('HttpService',['$http','$q','Event',function($http,$q,Event){
		var request = function(url,method,params){
			var deferred = $q.defer();
			$http({
				method:method,
				url:url,
				params:params
			}).success(function(response){
				console.info(response);
				deferred.resolve(response);
			}).error(function(response , code){
				if(code == '404'){
					deferred.reject({code:code,message:'服务器失联！'});
				}else if(code == '500'){
					deferred.reject({code:code,message:'服务器内部错误！'});
				}else{
					deferred.reject({code:code,message:'服务器错误，请重试！'});
				}
			});
			return deferred.promise;
		};
		this.post=function(url,params){
			return request(url,'POST',params);
		};
	}]);
})();