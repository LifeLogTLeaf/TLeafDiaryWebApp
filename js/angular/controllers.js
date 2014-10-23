﻿/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// optional controllers
function HeaderCtrl($rootScope, $scope/**, Facebook*/){
//    console.log('HeaderCtrl 부터...'+$rootScope.loginStatus);

    $rootScope.diaryList=[];


    /**    $rootScope.$on('Facebook:statusChange', function(ev, data) {
        console.log('"HeaderCtrl 부터... " Facebook Status: ', JSON.stringify(data));
        console.log('"headerCtrl 부터... facebook status check : '+ data.status);
        $rootScope.loginStatus = data.status;
        if($rootScope.loginStatus != 'connected'){
            console.log('HeaderCtrl 부터...로그인이 안되어 있습니다');
//        location.replace("http://localhost/pages/login.html");
        }
    });*/

//    $rootScope.$on('GooglePlus:statusChange', function(ev, data) {
//        console.log('Google Status: ', data);
//        if (data.status == 'connected') {
//
//
//        } else if (data.status == 'loggin') {
//
//        }
//    });


    /*check facebook sdk load complete*/
//    $scope.$watch(function() {
//            return UserService.FacebookIsReady();
//        },
//        function(newVal) {
//            if (newVal)
//                $scope.facebookReady = true;
//        }
//    );
//
//    /*check googleplus sdk load complete*/
//    $scope.$watch(function() {
//            return UserService.GooglePlusIsReady();
//        },
//        function(newVal) {
//            if (newVal)
//                $scope.googleplusReady = true;
//        }
//    );
/**
    $scope.facebooklogin = function(){
//        1. facebook로그인을 진행한다

//        UserService.Logout('FACEBOOK');
//        Facebook.logout();
        Facebook.login(function(response) {
            Facebook.api('/me', function(response) {
                console.log('페이스북 데이터 목록 \n'+JSON.stringify(response));
            });
        });*/



//          1. 끝

//        2.구글 로그인을 진행한다
        //UserService.Logout('GOOGLE');

//        GooglePlus.logout();
//        GooglePlus.login().then(function (authResult) {
//            console.log(JSON.stringify(authResult));
//        }, function (err) {
//            console.log(err);
//        });
//        2.끝
//    }

/**
    $scope.$on('Logout', function(event) {
        event.stopPropagation();

        Logout();
    });

    $scope.facebookLogout = function () {
        Facebook.logout();

    }
*/

}
function HomeCtrl($scope, $http) {


}

function ProjectCtrl($scope, $http) {}

function MailCtrl($scope, $http, $timeout) {}

function GeneralCtrl($scope, $http, $timeout) {}

function IconsCtrl($scope, $http, $timeout) {}

function SliderCtrl($scope, $http, $timeout) {}

function MorrisCtrl($scope, $http) {}

function EditorsCtrl($rootScope,$scope, $http) {
    var data=$rootScope.date;
    $rootScope.date = '';
    $scope.insert = function () {
//        console.log('test');
        $rootScope.diaryList.push(
            {'diaryId':1,
             'title': this.title,
             'body': '공사중입니다.',
             'start': new Date(data.year,data.month-1,data.day),
             'backgroundColor': "#f56954",
             'borderColor': "#f56954"});
        console.log($rootScope.diaryList);
        location.replace("#!");
    }


}


function AboutCtrl($scope, $http, $timeout) {}

function AdvancedCtrl($scope, $http, $timeout) {}

function GeneralElementCtrl($scope, $http, $timeout) {}

function DataTableCtrl($scope, $http, $timeout) {}

function TableCtrl($scope, $http, $timeout) {}

function ButtonCtrl($scope, $http, $timeout) {}

function TyphographyCtrl($scope, $http, $timeout) {}


function CalendarCtrl($rootScope,$scope, $http, $timeout) {

    $scope.createDiary = function (year,month,day) {
        console.log(year+','+ month+','+day);
        //에디터 컨트롤러에 보낼 목적으로 브로드캐스트 한다.
        $rootScope.date = {'year':year,'month':month, 'day':day};
        location.replace("#!/editors");

    }
    $scope.readDiary = function (diaryId) {
        var ob;
        $.each($rootScope.diaryList, function(i, v) {
            console.log(v.diaryId ==diaryId);
            if (v.diaryId == diaryId) {
                ob=v;
            }

        });
        location.replace('#!/diary-detail?'+'id='+ ob.diaryId);
    }


//    console.log('CalendarCtrl 로부터 : '+$rootScope.diaryList);
}


function InvoiceCtrl($scope, $http, $timeout) {}

function MasonryCtrl($scope, $http, $timeout) {}

function MapCtrl($scope, $http, $timeout) {}

function ErrorCtrl($scope, $http, $timeout) {}

function TimeLineCtrl($rootScope, $scope, $http, $timeout, $window) {


    $scope.type='twitter';
    $scope.check=false;
    $scope.arrPost=[{'type': 'diary','name' : 'Jennifer Paijo', 'date' : '2014/6/25' , 'body': '안드로이드 소켓프로그래밍을 하고있는데요!같은 apk파일인데다른폰으로는 다 송수신되는데\n제 핸드폰은 송신만되고 수신이 안되요 ㅜ\n제가 의심해볼만한 사항은 뭔가요?? ㅠㅜ'},
                    {'type': 'twitter','name' : 'Agus Anak Baik', 'date' : '2014/6/23' , 'body':'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'},
        {'type': 'facebook','name' : 'Bruce Wyne', 'date' : '2014/6/25' , 'body':"'you're get a new friend!'"},
        {'type': 'diary','name' : 'Jennifer Paijo', 'date' : '2014/6/25' , 'body': 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...'},
        {'type': 'twitter','name' : 'Agus Anak Baik', 'date' : '2014/6/23' , 'body':'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'},
        {'type': 'facebook','name' : 'Bruce Wyne', 'date' : '2014/6/25' , 'body':"'you're get a new friend!'"}

    ];



    $scope.loadMore = function() {
        $scope.arrPost.push({'type': 'diary','name' : 'Jennifer Paijo', 'date' : '2014/6/25' , 'body': '안드로이드 소켓프로그래밍을 하고있는데요!같은 apk파일인데다른폰으로는 다 송수신되는데\n제 핸드폰은 송신만되고 수신이 안되요 ㅜ\n제가 의심해볼만한 사항은 뭔가요?? ㅠㅜ'},{'type': 'facebook','name':'메롱', 'date' : '2014/6/25' , 'body':'안돼 안돼 빨리 들어가야돼'});
    };

}

function BlankCtrl($scope, $http, $timeout) {}

function BlogListCtrl($scope, $http, $timeout) {}

function DiaryDetailCtrl($scope, $http, $timeout, $routeParams) {
    $scope.title='학교종이 땡땡땡';
    $scope.body = '난 오늘 11시에 태평역에서 가산디지털단지역으로 지하철을 타고 갔다. 도착하고 나서 짜장범벅을 먹었고 일하고 일하고 일하고 일하고 전화하고 하다가 오후 10시 37분인데 일하고 서류 만들고 이러고 있다.\n 배가 고파서 뭘 먹을까 배달의 민족을 10분전에 찾아보다가 별로 땡기는게 없어서 편의점에 갈까 고민중이다.\n';
    $scope.myTags=['keyword','tag','travel'];
    $scope.recents=[{'title':'간만에 휴식','ago':3,'imgUrl':'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c'},
        {'title':'학교에 간 날','ago':4,'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1921045_468032023334626_6466308735889850799_o.jpg'},
        {'title':'간만에 휴식','ago':3,'imgUrl':'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c'},
        {'title':'학교에 간 날','ago':4,'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1921045_468032023334626_6466308735889850799_o.jpg'}]

    $scope.tags = [{'name':'Admin','url':'#'},
        {'name':'Fleet','url':'#'},
        {'name':'Music','url':'#'},
        {'name':'Video','url':'#'},
        {'name':'Typhography','url':'#'},
        {'name':'Computer','url':'#'},
        {'name':'webDesign','url':'#'}];

    console.log($routeParams.diaryId);
}

function FloatCtrl($scope, $http, $timeout) {}

function ShopCtrl($scope, $http, $timeout) {}

function ShopDetailCtrl($scope, $http, $timeout) {}

function ShopListCtrl($scope, $http, $timeout) {}

function PetaCtrl($scope, $http, $timeout) {}

function SideBarCtrl($scope) {


    $scope.index=0;
    $scope.user=[{'name':'yoonsub Kim','img' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p320x320/10514709_602094559909057_545461442979457188_n.jpg?oh=2fa5ccf656478e20f37f08f8d56c78aa&oe=54F728FD&__gda__=1425365052_5d932c680b0f0e771d7a7f667aedbc16'},
        {'name': 'youngjin chang', 'img' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/t31.0-1/c62.230.769.769/s320x320/901772_424374224309284_412640333_o.jpg'},
        {'name': 'seulgi choi', 'img' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.320.320/p320x320/10415620_719012588170326_459503906262402156_n.jpg?oh=73beb95a3ea261085f66a3cf26ff3c2a&oe=54F3B978&__gda__=1422157115_63d0b0e00833a4250af7b906676a76e3'},
        {'name': 'susu Choi', 'img' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c74.0.320.320/p320x320/10518680_403773109769752_6922407977535480476_n.jpg?oh=c7a9e5236d5ed569828cb8003ad6af4b&oe=54ACD96F&__gda__=1422001448_4228f090ad6c046cbe760a790c83ce77'}

    ];
    $scope.addIndex = function () {
        if($scope.index<$scope.user.length-1){
            $scope.index +=1;
        }else{
            $scope.index =0;
        }

    }

}


