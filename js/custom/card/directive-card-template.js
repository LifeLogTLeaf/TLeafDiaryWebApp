/**
 * Created by yoonsKim on 14. 10. 28..
 */
'use strict';

app.directive('ngCard', function($http) {
    return {
        restrict: 'E',
        templateUrl: 'js/custom/card/card-templates.html',
                    link: function(scope, element, attrs) {
//            $http.get('').success(function(data) {
//                scope.data = data;
//            });
//            var info = scope.diaryList[attrs.post];
//            console.log(scope.diaryList.length);

        }
    };
});

