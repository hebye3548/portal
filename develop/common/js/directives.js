//icheck
(function() {
    angular.module('App').directive('ngIcheck', function($compile) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function($scope, $element, $attrs, $ngModel) {
			    if (!$ngModel) {
			      return;
			    }
                $($element).iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue',
                    increaseArea: '20%' // optional
                })
            }
        }
    })
})();
