/**
 * Created by yoonsKim on 14. 10. 25..
 */



function loginCtrl($scope,$http) {
    $scope.modeLogin = 'login';

    //로그인과 회원가입의 폼을 바꾸며 보여준다
    $scope.changeLoginMode = function(event) {
        if ($(event.target).hasClass('btn-success')) {
            // 현재 모드를 각인시켜서 폼을 변경시킨다
//            console.log($(event.target).attr('value'));
            $scope.modeLogin = $(event.target).attr('value');

            $('.bg-white').removeClass('bg-white').addClass(
                'btn-success');
            $(event.target).removeClass('btn-success')
                .addClass('bg-white');
        }

    }


    $scope.isSamePw = true;
    $scope.submitJoin = function (info) {
    console.log(info);
//        var data = {
//            email1:'email'
//            ,nickname:'nick'
//            ,pw:'pw'
//            ,age:'123'
//        };
        $http({method: 'POST',
              url: 'http://14.63.171.66:8081/tleafstructure/user/signup',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                 data:
                     'email1='+info.email1+
                     'email2=naver.com'+
                     '&nickname='+info.nickname +
                     '&pw='+info.pw +
                     '&age='+info.age

        }).then(function(result){
            $scope.modeLogin='login';
            console.log(result);
        }) ;

        location.href('./');
//        $http('http://14.63.171.66:8081/tleafstructure-0600/user/signup',{
//                 email1:'email'
//                ,nickname:'nick'
//                ,pw:'pw'
//                ,age:'123'
//                }).
//            success(function(data) {
//                // this callback will be called asynchronously
//                // when the response is available
//                console.log(data);
//            });
    };

//    $scope.samePw = function () {
//        console.log($scope.pw+', '+$scope.pw2);
//        if($scope.pw == $scope.pw2){
//            $scope.isSamePw= true;
//        }else{
//        $scope.isSamePw=  false;
//        }
//    }


}
