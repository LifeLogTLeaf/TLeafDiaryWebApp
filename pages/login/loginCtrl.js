/**
 * Created by yoonsKim on 14. 10. 25..
 */
function loginCtrl($scope,$http) {
    $scope.modeLogin = 'join';
    
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
    
    $scope.submitJoin = function () {

        $http.post('http://14.63.171.66:8081/tleafstructure/user/signup',{
                 email1:$scope.email1
                ,nickname:$scope.nickname
                ,pw:$scope.pw
                ,age:$scope.age
                }).
            success(function(data) {
                // this callback will be called asynchronously
                // when the response is available
                console.log('data..'+data);
            });
    }

}