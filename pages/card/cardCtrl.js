/**
 * Created by yoonsKim on 14. 10. 28..
 */

function cardCtrl($rootScope,$scope, $http, $timeout) {
    setTitle($rootScope,'card');
    //스크롤이 아래에 닿는다면..
    $(window).scroll(function () {
//        console.log($(document).height() + ", " + $(window).height() + " = " + $(window).scrollTop());
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {

            $scope.loadMore();
        }
    });
        $('.card').mouseover(function () {
            console.log('test');
            $('li').fadeout(2000);
        });

    var year=2014;
    //스크롤이 아래에 닿았을때 하는 행위
    $scope.loadMore = function () {

//        console.log($scope.diaryList.length);
        $rootScope.diaryList.push({'diaryId':$rootScope.i+=1,'title': 'push', 'start': --year+'-10-12', 'grade': '★★★☆☆', 'body': '또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .', 'imgUrl': 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'});
        $rootScope.diaryList.push({'diaryId':$rootScope.i+=1,'title': 'push', 'start': --year+'-10-12', 'grade': '★★★☆☆', 'body': '또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .', 'imgUrl': 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'});
        $rootScope.diaryList.push({'diaryId':$rootScope.i+=1,'title': 'push', 'start': --year+'-10-12', 'grade': '★★★☆☆', 'body': '또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .', 'imgUrl': 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'});
        $rootScope.diaryList.push({'diaryId':$rootScope.i+=1,'title': 'push', 'start': --year+'-10-12', 'grade': '★★★☆☆', 'body': '또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .', 'imgUrl': 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'});
        console.log($rootScope.diaryList);
        sortArticle(jQuery);

//        $('.card').css('width','none');
        //    $('#card').load(function () {
////        console.log('test');
//        $(this).fadein("slow");
//
//    })


    }



//    $scope.diaryList=[
//        {'diaryId':'1', title:'오늘의 일기', 'date':'2014-10-11','grade':'★★★☆☆','body':'캐논 700d&650d 그리고 소니 rx100 mark3 중에서 고민중입니다 데세랄만의 느낌.' ,'imgUrl':'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10425021_742025312533245_5069793033883709477_n.jpg?oh=a2b38b5ee31b861a426e8ea5801dfbd3&oe=54EABC72&__gda__=1424851707_e53afef7d1a654a0eae525a3c4740b2e'},
//        {'diaryId':'1','title':'웨딩촬영', 'date':'2014-10-13','grade':'★★★★★','body':'처음으로 커플 스냅을 찍어봤습니다 !\n꼭 필요한 준비물로는 항암제가 있어요..' ,'imgUrl':'https://scontent-b.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/63948_646290362150314_3540169048134466327_n.jpg?oh=0d86193e8565a5f1487dad07c73f643e&oe=54E34CB1'},
//        {'diaryId':'1','title':'학교에서', 'date':'2014-10-12','grade':'★★★☆☆','body':'또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .' ,'imgUrl':'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'},
//        {'diaryId':'1','title':'오늘의 일기', 'date':'2014-10-11','grade':'★★★☆☆','body':'캐논 700d&650d 그리고 소니 rx100 mark3 중에서 고민중입니다 데세랄만의 느낌.' ,'imgUrl':'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10425021_742025312533245_5069793033883709477_n.jpg?oh=a2b38b5ee31b861a426e8ea5801dfbd3&oe=54EABC72&__gda__=1424851707_e53afef7d1a654a0eae525a3c4740b2e'},
//        {'diaryId':'1','title':'웨딩촬영', 'date':'2014-10-13','grade':'★★★★☆','body':'처음으로 커플 스냅을 찍어봤습니다 !\n꼭 필요한 준비물로는 항암제가 있어요..' ,'imgUrl':'https://scontent-b.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/63948_646290362150314_3540169048134466327_n.jpg?oh=0d86193e8565a5f1487dad07c73f643e&oe=54E34CB1'},
//        {'diaryId':'1','title':'학교에서', 'date':'2014-11-12','grade':'★★★★★','body':'또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .' ,'imgUrl':'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'},
//        {'diaryId':'1','title':'오늘의 일기', 'date':'2014-10-11','grade':'★★★☆☆','body':'캐논 700d&650d 그리고 소니 rx100 mark3 중에서 고민중입니다 데세랄만의 느낌.' ,'imgUrl':'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10425021_742025312533245_5069793033883709477_n.jpg?oh=a2b38b5ee31b861a426e8ea5801dfbd3&oe=54EABC72&__gda__=1424851707_e53afef7d1a654a0eae525a3c4740b2e'},
//        {'diaryId':'1','title':'웨딩촬영', 'date':'2014-10-13','grade':'★★★★☆','body':'처음으로 커플 스냅을 찍어봤습니다 !\n꼭 필요한 준비물로는 항암제가 있어요..' ,'imgUrl':'https://scontent-b.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/63948_646290362150314_3540169048134466327_n.jpg?oh=0d86193e8565a5f1487dad07c73f643e&oe=54E34CB1'},
//        {'diaryId':'1','title':'학교에서', 'date':'2014-10-12','grade':'★★★☆☆','body':'또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .' ,'imgUrl':'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'},
//        {'diaryId':'1','title':'오늘의 일기', 'date':'2014-10-11','grade':'★★★☆☆','body':'캐논 700d&650d 그리고 소니 rx100 mark3 중에서 고민중입니다 데세랄만의 느낌.' ,'imgUrl':'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10425021_742025312533245_5069793033883709477_n.jpg?oh=a2b38b5ee31b861a426e8ea5801dfbd3&oe=54EABC72&__gda__=1424851707_e53afef7d1a654a0eae525a3c4740b2e'},
//        {'diaryId':'1','title':'웨딩촬영', 'date':'2014-10-13','grade':'★★★★☆','body':'처음으로 커플 스냅을 찍어봤습니다 !\n꼭 필요한 준비물로는 항암제가 있어요..' ,'imgUrl':'https://scontent-b.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/63948_646290362150314_3540169048134466327_n.jpg?oh=0d86193e8565a5f1487dad07c73f643e&oe=54E34CB1'},
//        {'diaryId':'1','title':'학교에서', 'date':'2014-10-12','grade':'★★★☆☆','body':'또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .' ,'imgUrl':'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'},
//        {'diaryId':'1','title':'오늘의 일기', 'date':'2014-10-11','grade':'★★★☆☆','body':'캐논 700d&650d 그리고 소니 rx100 mark3 중에서 고민중입니다 데세랄만의 느낌.' ,'imgUrl':'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10425021_742025312533245_5069793033883709477_n.jpg?oh=a2b38b5ee31b861a426e8ea5801dfbd3&oe=54EABC72&__gda__=1424851707_e53afef7d1a654a0eae525a3c4740b2e'},
//        {'diaryId':'1','title':'웨딩촬영', 'date':'2014-10-13','grade':'★★★★☆','body':'처음으로 커플 스냅을 찍어봤습니다 !\n꼭 필요한 준비물로는 항암제가 있어요..' ,'imgUrl':'https://scontent-b.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/63948_646290362150314_3540169048134466327_n.jpg?oh=0d86193e8565a5f1487dad07c73f643e&oe=54E34CB1'},
//        {'diaryId':'1','title':'학교에서', 'date':'2014-10-12','grade':'★☆☆☆☆','body':'또 찾아온 고양이 성애자입니다 공강시간에 점심밥먹고 오다가 만났네요 그래도 카메라 봐주네요 시크냥 .' ,'imgUrl':'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10372582_295142517363534_6776545901792196524_n.jpg?oh=9fa32ff68eccfae1e60a0b8915e8b89d&oe=54ADD6D0&__gda__=1420530521_9bd2cf59face7852e8784c15c84cd64b'}
//    ];




    $scope.readDiary = function (diaryId) {

        location.href='#!/diary-detail?diaryId='+diaryId;
    }




}

//카드의 줄정렬을 담당하는 함수
function sortArticle($) {
    console.log('called load()');
    $('#tiles').imagesLoaded(function() {

        function comparatorTitle(a, b) {
            return $(a).data('title') < $(b).data('title') ? -1 : 1;
        }


        function comparatorDate(a, b) {
            return $(a).data('date') > $(b).data('date') ? -1 : 1;
        }

        function comparatorGrade(a, b) {
            return $(a).data('grade') < $(b).data('grade') ? -1 : 1;
        }

        var options = {
            autoResize: false, // 윈도우 화면에 따라 리사이즈 한다
            container: $('#main'), // css 스타일링한다
            offset: 3, // 그리드 아이템간의 거리
            itemWidth: 210, // 아이템의 두께
            comparator: comparatorDate
        };

        // Get a reference to your grid items.
        var $handler = $('#tiles li'),
            $sortbys = $('#sortbys li');

        // Call the layout function.
        $handler.wookmark(options);

        /**
         * When a filter is clicked, toggle it's active state and refresh.
         */
        var onClickSortBy = function(e) {
            e.preventDefault();
            var $currentSortby;
            $currentSortby = $(this);

            switch ($currentSortby.data('sortby')) {
                case 'grade':
                    options.comparator = comparatorGrade;
                    break;
                case 'date':
                    options.comparator = comparatorDate;
                    break;
                case 'title':
                default:
                    options.comparator = comparatorTitle;
                    break;
            }

            $sortbys.removeClass('active');
            $currentSortby.addClass('active');

            $handler.wookmark(options);
        };

        // Capture filter click events.
        $sortbys.click(onClickSortBy);


    });
};