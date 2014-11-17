'use strict';

//index.html의 title태그값을 바꾸기 위해 브로드캐스트한다.
function setTitle($rootScope,msg) {
    $rootScope.$broadcast('title:change',msg);
}

function IndexCtrl($rootScope,$scope) {
    $rootScope.diaryId=0;
    $scope.header='Diary';

    $rootScope.$on('title:change', function (e,data) {
        console.log(data+'페이지 시작...');
        $scope.header=data;
    });

    $scope.hideNavbar = function () {
        if($scope.header=='Login'){
            return true;
        }else{
            return false;
        }
    }



}


// optional controllers
function HeaderCtrl($rootScope,$http, $scope/**, Facebook*/){
//    console.log('HeaderCtrl 부터...'+$rootScopdxe.loginStatus);
    $rootScope.appId="6b22f647ef8f2f3278a1322d8b000f81";
    $rootScope.diaryList=[];
    $rootScope.folderList=['hobby','travel','school'];
//    dataLoad();
    $rootScope.abc = 'travel';

//    getData();
    function getData() {
        $rootScope.recents=[{'title':'간만에 휴식','ago':3,'imgUrl':'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c'},
            {'title':'학교에 간 날','ago':4,'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1921045_468032023334626_6466308735889850799_o.jpg'},
            {'title':'간만에 휴식','ago':3,'imgUrl':'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c'},
            {'title':'학교에 간 날','ago':4,'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1921045_468032023334626_6466308735889850799_o.jpg'}]
    }




    $rootScope.recents=[{'title':'간만에 휴식','ago':3,'imgUrl':'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c'},
        {'title':'학교에 간 날','ago':4,'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1921045_468032023334626_6466308735889850799_o.jpg'},
        {'title':'간만에 휴식','ago':3,'imgUrl':'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c'},
        {'title':'학교에 간 날','ago':4,'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1921045_468032023334626_6466308735889850799_o.jpg'}]

    //초기데이터를 위해 헤더가 로딩될때 데이터를 받아온다.
    function dataLoad() {
        $http({method: 'GET',
            url: 'http://14.63.171.66:8081/tleafstructure/api/user/date?date=2014&date=11&date=16',
            headers: {'Content-Type': 'application/json', 'X-Tleaf-User-Id':'344bc889c8bb44dd6e4bb845d40007b9', 'X-Tleaf-Application-Id': $rootScope.appId, 'X-Tleaf-Access-Token':'6b22f647ef8f2f3278a1322d8b000210'},


        }).success(function(data, status, headers, config) {
            console.log('데이터 불러오기 성공');
            console.log(data[0].data);
            var length = data.length;
//            일기의 총 갯수를 세어서 일기 id가 중첩되지 않도록 한다
//            $rootScope.diaryId=length;
            for(var i=0;i<length;i++){
                //nosql의 id와 rev값을 임의로 log하위에 넣는다.
//                data[i].data.id=data[i].id;
//                data[i].data.revision=data[i].revision;
                //시간 변환에 들어간다.
                data[i].data.start= new Date(data[i].data.start);

                var inputData =data[i].data;
                console.log(inputData);

                $rootScope.diaryList.push(inputData);
            }

        }).
            error(function(data, status, headers, config) {

                console.log('실패');
                console.log(data);

            });


    }
}


function writeCtrl($scope,$rootScope,$http) {



    //입력 버튼을 눌렀을 때
    $scope.insert = function () {

        var tags = this.tags.split(',');
        var body = CKEDITOR.instances.body.getData();
        var writeData = {
            'diaryId':++$rootScope.diaryId,
            'folder':this.folder,
            'title': this.title,
            'body': body,
            'start': new Date(),
            'backgroundColor': "#f56954",
            'borderColor': "#f56954",
            'tags':tags};



        var data = JSON.stringify( {"data" : writeData });
//      var data = JSON.stringify( { "serviceData":{"date":Date(),"purpose":"yoon test"}} );


        $http({
            method: 'POST',
            url: 'http://14.63.171.66:8081/tleafstructure/api/user/app/log',
            headers: {'Content-Type': 'application/json', 'X-Tleaf-User-Id':'344bc889c8bb44dd6e4bb845d40007b9', 'X-Tleaf-Application-Id': '6b22f647ef8f2f3278a1322d8b000f81', 'X-Tleaf-Access-Token':'6b22f647ef8f2f3278a1322d8b000210'},
            data: data
        }).success(function(data, status, headers, config) {
            console.log('작성 성공');
            $rootScope.diaryList.push(writeData);
            location.reload();
        }).
            error(function(data, status, headers, config) {

                console.log('작성 실패');
                console.log(data);
                location.href='#!/404';

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });


    }

}

function HomeCtrl($scope, $http) {


}

function ProjectCtrl($scope, $http) {}

function MailCtrl($scope, $http, $timeout) {}

function GeneralCtrl($scope, $http, $timeout) {}

function IconsCtrl($scope, $http, $timeout) {}

function SliderCtrl($scope, $http, $timeout) {}

function ChartCtrl($scope, $http) {}



function EditorsCtrl($rootScope, $scope, $http) {

//    setTitle($rootScope,'Editor');
    CKEDITOR.replace('body');

    //입력 버튼을 눌렀을 때
    $scope.insert = function () {

        var body = CKEDITOR.instances.body.getData();
        var writeData = {
            'diaryId':++$rootScope.diaryId,
            'title': this.title,
            'body': body,
            'start': new Date(),
            'backgroundColor': "#f56954",
            'borderColor': "#f56954"};



        var data = JSON.stringify( {"data" : writeData });
//        var data = JSON.stringify( { "serviceData":{"date":Date(),"purpose":"yoon test"}} );
        $http({method: 'POST',
            url: 'http://14.63.171.66:8081/tleafstructure/api/user/app/log',
            headers: {'Content-Type': 'application/json', 'X-Tleaf-User-Id':'344bc889c8bb44dd6e4bb845d40007b9', 'X-Tleaf-Application-Id': '6b22f647ef8f2f3278a1322d8b000f81', 'X-Tleaf-Access-Token':'6b22f647ef8f2f3278a1322d8b000210'},
            data: data


        }).success(function(data, status, headers, config) {
            console.log('성공');

            console.log(data);
            $rootScope.diaryList.push(writeData);
            location.replace("#!");
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
//    setTitle($rootScope,'Calendar');

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


function listCtrl($rootScope, $scope, $http, $aside, $timeout) {

//    getData();
    setTitle($rootScope,'Main');
    //타임라인에서 다음에 불러울 날짜값을 저장한다
    var nextDate = new Date();


    //이미지 썸네일을 바꾸기 위한 변수처리
    $scope.imgNum=0;
    $scope.changeImgNum = function (newNum) {
        $scope.imgNum=newNum;
    }
    //./이미지 썸네일을 바꾸기 위한 변수처리
    //페이지를 추가로 불러온다.
    $rootScope.loadMore = function () {
        dataLoad(nextDate);
        nextDate.setMonth(nextDate.getMonth()-1);

    }

    $scope.readDiary = function (diaryId) {
        location.href='#!/diary-detail?diaryId='+diaryId;
    }

    $rootScope.date = '';



    //초기데이터를 위해 헤더가 로딩될때 데이터를 받아온다.
    function dataLoad(date) {
        var url = 'http://14.63.171.66:8081/tleafstructure/api/user/date?date='+date.getFullYear()+'&date='+(date.getMonth()+1);
        $http({method: 'GET',
            url: url,
            headers: {'Content-Type': 'application/json', 'X-Tleaf-User-Id':'344bc889c8bb44dd6e4bb845d40007b9', 'X-Tleaf-Application-Id': $rootScope.appId, 'X-Tleaf-Access-Token':'6b22f647ef8f2f3278a1322d8b000210'},


        }).success(function(data, status, headers, config) {
            console.log('데이터 불러오기 성공');
            console.log(url);
            var length = data.length;
//            일기의 총 갯수를 세어서 일기 id가 중첩되지 않도록 한다
            for(var i=0;i<length;i++){
                //nosql의 id와 rev값을 임의로 log하위에 넣는다.
//                data[i].data.id=data[i].id;
//                data[i].data.revision=data[i].revision;
                //시간 변환에 들어간다.
                data[i].data.start= new Date(data[i].data.start);
                var inputData =data[i].data;
//                console.log(inputData);

                $rootScope.diaryList.push(inputData);
            }

        }).
            error(function(data, status, headers, config) {

                console.log('실패');
                console.log(data);

            });


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
    $scope.imgUrl = ob.imgUrl;
    $scope.body = ob.body;

    $scope.deleteDiary = function () {
//        var data = JSON.stringify( { "data":writeData} );
        var data = JSON.stringify({'id':ob.id,'revision':ob.revision});
        $http({method: 'DELETE',
            url: 'http://14.63.171.66:8081/tleafstructure/api/user/log',
            headers: {'Content-Type': 'application/json', 'X-Tleaf-User-Id':'344bc889c8bb44dd6e4bb845d40007b9', 'X-Tleaf-Application-Id': '6b22f647ef8f2f3278a1322d8b000f81', 'X-Tleaf-Access-Token':'6b22f647ef8f2f3278a1322d8b000210'},
            data: data

        }).success(function(data, status, headers, config) {
            console.log('데이터 삭제 성공');
            removeDiaryObject(diaryId);

            location.href='#!';
//            $rootScope.diaryList.remove(delObject);
//
            // this callback will be called asynchronously
            // when the response is available
        }).
            error(function(data, status, headers, config) {

                console.log('데이터 삭제 실패');
                console.log(data);

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }

    //body의 내용은 태그의 꺽세의 특성때문에 jquery의 append를 사용하기로 함






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

    /**id를 이용해 오브젝트 삭제.*/
    function removeDiaryObject(id) {
        $.each($rootScope.diaryList, function(i, v) {
            if (Number(v.diaryId) == id) {

                console.log($rootScope.diaryList);
                $rootScope.diaryList.splice(i-1,1);
                console.log($rootScope.diaryList);
            }

        });
    }

    function getData() {
        $scope.title='학교종이 땡땡땡';
        $scope.body = '난 오늘 11시에 태평역에서 가산디지털단지역으로 지하철을 타고 갔다. 도착하고 나서 짜장범벅을 먹었고 일하고 일하고 일하고 일하고 전화하고 하다가 오후 10시 37분인데 일하고 서류 만들고 이러고 있다.\n 배가 고파서 뭘 먹을까 배달의 민족을 10분전에 찾아보다가 별로 땡기는게 없어서 편의점에 갈까 고민중이다.\n';
        $scope.myTags=['keyword','tag','travel'];
        $rootScope.recents=[{'title':'간만에 휴식','ago':3,'imgUrl':'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c'},
            {'title':'학교에 간 날','ago':4,'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1921045_468032023334626_6466308735889850799_o.jpg'},
            {'title':'간만에 휴식','ago':3,'imgUrl':'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10553531_1494589260825919_7571164004568224289_n.jpg?oh=e150716e861d0a493fdeefe70a37c21d&oe=54AAC873&__gda__=1425070412_2bfe046f0909401324651c7cd0516f5c'},
            {'title':'학교에 간 날','ago':4,'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/1921045_468032023334626_6466308735889850799_o.jpg'}]

        $rootScope.tags = [{'name':'Admin','url':'#'},
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


function loginCtrl($rootScope,$scope,$http) {

    setTitle($rootScope,'Login');
    console.log(getCookie('userId'));

//    $scope.changeLoginMode = function() {
//        //커서가 로그인 쪽이라면 회원가입쪽으로 바꾼다
//        if ($scope.login === 'bg-white') {
//            $scope.modeLogin = 'login';
//
//            angular.element('#join').removeClass('bg-white').addClass('btn-success');
//            angular.element('#login').removeClass('btn-success').addClass('bg-white');
//        }else{
//            $scope.modeLogin = 'join';
//
//            angular.element('#login').removeClass('bg-white').addClass('btn-success');
//            angular.element('#join').removeClass('btn-success').addClass('bg-white');
//        }
//
//    }

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
    $scope.submitJoin = function (user) {
        var data = JSON.stringify(
            {
                email: user.email ,
                password:user.pw ,
                nickname:user.nickname ,
                gender: user.male ,
                age:user.age });
        var url = 'http://14.63.171.66:8081/tleafstructure/user/signup';
        $http({method: 'POST',
            url: url,
            headers: {'Content-Type': 'application/json'},
            data: data

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
                    $('.row').append('<p class="text-red">이메일이 중복되었습니다</p>')
                }

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

//        location.href('./');
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


    $scope.submitLogin = function (user) {
        var data = JSON.stringify({ email: user.email , password:user.pw});
        $http({method: 'POST',
            url: 'http://14.63.171.66:8081/tleafstructure/user/login',
            headers: {'Content-Type': 'application/json'},
            data: data
//                     'email1='+user.email1+
//                     'email2=naver.com'+
//                     '&nickname='+user.nickname +
//                     '&pw='+user.pw +
//                     '&age='+user.age

        }).success(function(data, status, headers, config) {
            console.log('로그인 성공');

            //쿠키에 유저 id저장
            console.log(data);
            setCookie('accessKey',data.accessKey,5);
//            location.reload();

            // this callback will be called asynchronously
            // when the response is available
        }).
            error(function(data, status, headers, config) {

                console.log('회원가입 실패 fail');
                console.log(data);
                if(data.error == 'There is No Such User with the Email'){
                    $('.row').append('<p class="text-red">이메일 또는 비밀번호를 확인하세요</p>')
                }

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }




//    $scope.samePw = function () {
//        console.log($scope.pw+', '+$scope.pw2);
//        if($scope.pw == $scope.pw2){
//            $scope.isSamePw= true;
//        }else{
//        $scope.isSamePw=  false;
//        }
//    }


}
//쿠키를 생성합니다, key, value, 보관일수 순서의 파라미터
function setCookie(cName, cValue, cDay){
    console.log('asdf');
    var expire = new Date();

    //시나 분 등으로 저장도 가능해보임
    expire.setDate(expire.getDate() + cDay);
    console.log('sdfds');
    var cookies;
    cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
//    console.log(cName + '=' + escape(cValue) + '; path=/ ');
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}


