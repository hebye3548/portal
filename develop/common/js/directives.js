//icheck
(function() {
    angular.module('App').directive('portalIcheck', function() {
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
                }).on('ifClicked', function(event) {
                    if ($attrs.type == "checkbox") {
                        //checkbox, $ViewValue = true/false/undefined
                        $scope.$apply(function() {
                            $ngModel.$setViewValue(!($ngModel.$modelValue == undefined ? false : $ngModel.$modelValue));
                        });
                    } else {
                        // radio, $ViewValue = $attrs.value
                        $scope.$apply(function() {
                            $ngModel.$setViewValue($attrs.value);
                        });
                    }

                });
            }
        };
    }).directive('portalTreeview',function(){
        return{
            restrict:'A',
            link:function($scope,$element,$attrs,$require){
                $($element).on('click',function(event){
                    var _self = $(this);
                    _self.toggleClass('active').find(".treeview-menu").slideToggle().toggleClass('menu-open');
                });
            }
        };
    });
})();
