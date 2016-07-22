//icheck
(function() {
    //checkbox && radio
    angular.module('App').directive('portalIcheck', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            replace:true,
            link: function($scope, $element, $attrs, $ngModel) {
                if(!$ngModel){
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
    })
    //sidebar tree
    .directive('portalTreeview',function(){
        return{
            restrict:'A',
            link:function($scope,$element,$attrs,$require){
                var element = $($element);
                if(!element.hasClass('active')){
                    element.find('.treeview-menu').css('display','none');
                }
                element.on('click',function(event){
                    var _self = $(this);
                    //如果是展开状态
                    if(_self.hasClass('active')){
                        _self.removeClass('active');_self.find(".treeview-menu").css('display','block').slideUp();
                    }else{
                        //如果是关闭状态
                        _self.addClass('active');_self.find(".treeview-menu").slideDown();
                    }
                });
            }
        };
    })
    .directive('portalChart',function(){
        return{
            restrict:'A',
            scope:{
                chartOption:'='
            },
            link:function($scope,$element,$attrs){
                if(!window.echarts){
                    $.ajax({
                        url:'js/echarts.js',
                        dataType:'script',
                    })
                }
            }
        }
    });
})();
