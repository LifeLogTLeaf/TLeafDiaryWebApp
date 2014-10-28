/**
 * Created by yoonsKim on 2014. 10. 16..
 */
jQuery(document).ready(function () {
//    var currentTimeMillis = new Date().getDate();
//
//    console.log("mills"+currentTimeMillis);
//    var month = currentTimeMillis.getMonth()+1;
//    console.log(month);


    $(window).scroll(function () {
        console.log($(document).height() + ", " + $(window).height() + " = " + $(window).scrollTop());
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {

                    console.log("catch");
            loadArticle(link,1,1);
        }
    });

    function loadArticle(link,startNum,endNum) {
        $('#container').show('fast');//로딩화면 on
        var urlLink = '';
        $.ajax({

            type:"GET",
            url:urlLink,
            contentType:"application/json",
//            data:"userid=jin",
            async:true,
            success:function(list){

//                        $("#cards").append(json);
//                        $("#cards").append(contentStr);
            }
        })
//

    }

});/**
 * Created by yoonsKim on 2014. 8. 18..
 */


