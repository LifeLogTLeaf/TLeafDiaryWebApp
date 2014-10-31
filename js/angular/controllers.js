/**
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

//index.html의 title태그값을 바꾸기 위해 브로드캐스트한다.
function setTitle($rootScope,msg) {
    $rootScope.$broadcast('title:change',msg);
}

function IndexCtrl($rootScope,$scope) {
    $rootScope.i=0;
    $scope.header='Calendar';

    $rootScope.$on('title:change', function (e,data) {
        console.log(data+'페이지 시작...');
        $scope.header=data;
    });

}


// optional controllers
function HeaderCtrl($rootScope, $scope/**, Facebook*/){
//    console.log('HeaderCtrl 부터...'+$rootScopdxe.loginStatus);

    $rootScope.diaryList=[];

    $('.search').focusin(function () {
        console.log('test');
        $(this).animate({
                width: '30%'
            },400, function () {

            }
        );
    });
    $('.search').focusout(function () {
        $(this).animate({
                width: '20%'
            },400, function () {

            }
        );
    });



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



function EditorsCtrl($rootScope, $scope, $http) {

    setTitle($rootScope,'Editor');
    CKEDITOR.replace('body');


    var date=$rootScope.date;
    $rootScope.date = '';

    //입력 버튼을 눌렀을 때
    $scope.insert = function () {

        var body = CKEDITOR.instances.body.getData();
        var writeData = {
            'diaryId':++$rootScope.i,
            'title': this.title,
            'body': body,
            'start': new Date(date.year,date.month-1,date.day),
            'backgroundColor': "#f56954",
            'borderColor': "#f56954"};

        $rootScope.diaryList.push(writeData);
        location.replace("#!");

        var data = JSON.stringify( { "serviceData":writeData} );
//        var data = JSON.stringify( { "serviceData":{"date":Date(),"purpose":"yoon test"}} );
        $http({method: 'POST',
            url: 'http://14.63.171.66:8081/tleafstructure/api/user/app/log',
            headers: {'Content-Type': 'application/json', 'X-Tleaf-User-Id':'344bc889c8bb44dd6e4bb845d40007b9', 'X-Tleaf-Application-Id': '6b22f647ef8f2f3278a1322d8b000f81', 'X-Tleaf-Access-Token':'6b22f647ef8f2f3278a1322d8b000210'},
            data: data


        }).success(function(data, status, headers, config) {
            console.log('성공');

            console.log(data);
//            location.reload();

            // this callback will be called asynchronously
            // when the response is available
        }).
            error(function(data, status, headers, config) {

                console.log('실패');
                console.log(data);

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });



        var url = 'http://14.63.171.66:8081/TestServer/api/test/post';
        $http({method: 'POST',
            url: url,
            headers: {'Content-Type': 'application/json'},
            data: '{"appData":"'+ $rootScope.diaryList+'"}'
//                     'email1='+user.email1+
//                     'email2=naver.com'+
//                     '&nickname='+user.nickname +
//                     '&pw='+user.pw +
//                     '&age='+user.age

        }).success(function(data, status, headers, config) {
            console.log('회원가입 성공 succenss');

            //쿠키에 유저 id저장
            console.log(data);
            setCookie('userId',data.userId,5);
//            location.reload();

            // this callback will be called asynchronously
            // when the response is available
        }).
            error(function(data, status, headers, config) {

                console.log('회원가입 실패 fail');
                console.log(data);
                if(data.error == 'Email Already Exists'){
                    $('.row').append('<p class="text-red">이메일이 중복되었습니다</p>');
                }

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        function unescapeHTML(escapedHTML) {
            console.log(escapedHTML.replace(/&lt;/g,'a').replace(/&gt;/g,'b').replace(/&amp;/g,'&'));
            body = escapedHTML.replace(/&lt;/g,'a').replace(/&gt;/g,'b').replace(/&amp;/g,'&');
        }
    }

//.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;")

}


function AboutCtrl($scope, $http, $timeout) {}

function AdvancedCtrl($scope, $http, $timeout) {}

function GeneralElementCtrl($scope, $http, $timeout) {}

function DataTableCtrl($scope, $http, $timeout) {}

function TableCtrl($scope, $http, $timeout) {}

function ButtonCtrl($scope, $http, $timeout) {}

function TyphographyCtrl($scope, $http, $timeout) {}


function CalendarCtrl($rootScope,$scope, $http, $timeout) {
    setTitle($rootScope,'Calendar');
    $scope.createDiary = function (year,month,day) {
        console.log(year+','+ month+','+day);
        //에디터 컨트롤러에 보낼 목적으로 브로드캐스트 한다.
        $rootScope.date = {'year':year,'month':month, 'day':day};
        location.href="#!/editors";

    }
    $scope.readDiary = function (diaryId) {

        location.href='#!/diary-detail?diaryId='+diaryId;
    }


//    console.log('CalendarCtrl 로부터 : '+$rootScope.diaryList);
}


function InvoiceCtrl($scope, $http, $timeout) {}


function MapCtrl($scope, $http, $timeout) {}

function ErrorCtrl($scope, $http, $timeout) {}

function TimeLineCtrl($rootScope, $scope, $http, $timeout, $window) {

}

function BlankCtrl($scope, $http, $timeout) {}

function BlogListCtrl($rootScope,$scope, $http, $timeout) {

    getData();

    $rootScope.loadMore = function () {
        $rootScope.diaryList.push({'diaryId':$rootScope.i+=1,'title': 'push', 'start': '2014-10-12', 'grade': '★★★☆☆', 'body': '또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .', 'imgUrl': 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'});
    }

    $scope.readDiary = function (diaryId) {

        location.href='#!/diary-detail?diaryId='+diaryId;
    }





    function getData() {

        $rootScope.diaryList=[
            {
                diaryId:1,
                title:'학교종이 땡땡땡',
                body:'난 오늘 11시에 태평역에서 가산디지털단지역으로 지하철을 타고 갔다. 도착하고 나서 짜장범벅을 먹었고 일하고 일하고 일하고 일하고 전화하고 하다가 오후 10시 37분인데 일하고 서류 만들고 이러고 있다.\n 배가 고파서 뭘 먹을까 배달의 민족을 10분전에 찾아보다가 별로 땡기는게 없어서 편의점에 갈까 고민중이다.\n',
                start:'2014-10-15 11:25',
                imgUrl:'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c',
                tags:[
                    '학교','강아지'
                ]
            },{
                diaryId:2,
                title:'학교종이 땡땡땡2',
                body:'난 오늘 11시에 태평역에서 가산디지털단지역으로 지하철을 타고 갔다. 도착하고 나서 짜장범벅을 먹었고 일하고 일하고 일하고 일하고 전화하고 하다가 오후 10시 37분인데 일하고 서류 만들고 이러고 있다.\n 배가 고파서 뭘 먹을까 배달의 민족을 10분전에 찾아보다가 별로 땡기는게 없어서 편의점에 갈까 고민중이다.\n',
                start:'2014-10-15 11:25',
                imgUrl:'https://scontent-b.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10300780_675260182581903_4055719240195517689_n.jpg?oh=075ca9f996a6728355a9c245e0fc6b7d&oe=54AE2D25',
                tags:[
                    '외로움','가로등','여행가고싶다'
                ]
            },{
                diaryId:3,
                title:'학교종이 땡땡땡2',
                body:'난 오늘 11시에 태평역에서 가산디지털단지역으로 지하철을 타고 갔다. 도착하고 나서 짜장범벅을 먹었고 일하고 일하고 일하고 일하고 전화하고 하다가 오후 10시 37분인데 일하고 서류 만들고 이러고 있다.\n 배가 고파서 뭘 먹을까 배달의 민족을 10분전에 찾아보다가 별로 땡기는게 없어서 편의점에 갈까 고민중이다.\n',
                start:'2014-10-15 11:25',
                tags:[
                    'keyword','tag','travel'
                ]
            },{
                diaryId:4,
                title:'학교종이 땡땡땡3',
                body:'난 오늘 11시에 태평역에서 가산디지털단지역으로 지하철을 타고 갔다. 도착하고 나서 짜장범벅을 먹었고 일하고 일하고 일하고 일하고 전화하고 하다가 오후 10시 37분인데 일하고 서류 만들고 이러고 있다.\n 배가 고파서 뭘 먹을까 배달의 민족을 10분전에 찾아보다가 별로 땡기는게 없어서 편의점에 갈까 고민중이다.\n',
                start:'2014-10-15 11:25',
                imgUrl:'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10374521_1583010508586532_3427623053075932858_n.jpg?oh=aa233af62bd3c94dc6297e48a425c4fb&oe=54EF89F7&__gda__=1424818376_416f75d550dabb1167b906e0340d6439',
                tags:[
                    'keyword','tag','travel'
                ]
            }
        ]


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
    }

}

function DiaryDetailCtrl($rootScope ,$scope, $http, $timeout, $routeParams) {
    setTitle($rootScope,'Read');
    console.log('DiaryDetailCtrl start..');
    console.log($rootScope.diaryList);
    getData();



    var diaryId=$routeParams.diaryId;
    var ob=getDiaryObject(diaryId);
    $scope.title = ob.title;
//    $scope.body = ob.body;

    //body의 내용은 태그의 꺽세의 특성때문에 jquery의 append를 사용하기로 함
    $('.body').append(ob.body);



    /**id를 이용해 일기 오프젝트를 반환.*/
    function getDiaryObject(id) {
        var ob=[];
        $.each($rootScope.diaryList, function(i, v) {
            if (Number(v.diaryId) == id) {
                console.log(true);
                console.log(v);
                ob=v;
            }

        });
        return ob;
    }

    function getData() {
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
    }
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




