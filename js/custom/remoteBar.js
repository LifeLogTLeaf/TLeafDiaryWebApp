/**
 * Created by yoonsKim on 14. 11. 1..
 */
var app = angular.module('remoteBar', []);
app.directive('remoteBar', function () {
    return {
        restrict: 'A',
        templateUrl: 'pages/templates/ctrller-bar.html'
//        link: function(scope, elem, attrs, ctrl) {
//        }
    };
});
