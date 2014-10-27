/**
 * Created by yoonsKim on 14. 10. 28..
 */
'use strict';

app.directive('ngCard', function($http) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
//            $http.get('').success(function(data) {
//                scope.data = data;
//            });
            var info = scope.diaryList[attrs.post];
            console.log(scope.diaryList.length);
            element.html(
                '<li data-date="'+info.date+'" data-grade="'+info.grade+'" data-title="'+info.title+'">' +
                    '<p><b>'+info.title+'</b></p>' +
                    '<img src="'+info.imgUrl+'" width="200px" style="max-width: 200px; max-height:600px; ">' +
                    '<!--body는 꼭! 약 20자 정도만 받아오도록 한다-->' +
                    '<p>'+info.body+'</p>' +
                    '<p>'+info.date+' / '+info.grade+'</p>' +
                '</li>'
            );
        }
    };
});

