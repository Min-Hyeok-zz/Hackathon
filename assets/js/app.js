
$(function(){
    var cnt = 0;
    var timer = 0;
    var start = "";
    $(".rank,.view-img").bind("touchstart", function(e){
        start = e.originalEvent.changedTouches[0].clientX
    })
    $(".rank,.view-img").bind("touchmove", function(e){
        timer++
        console.log(timer)
        if (timer == 1) {
            var te = e.originalEvent.changedTouches[0].clientX
            if (te < start) {
                cnt++
                if (cnt > 2) cnt = 2
            } else{
                cnt--
                if (cnt < 0) cnt = 0
            }
            $(".rank,.view-img").css({transition:"1s",left:"-"+cnt+"00%"})
            setTimeout(function(){ timer = 0; }, 1000)
        }
    })
})

setTimeout(function(){
    $(".loadAnimation").fadeOut(1000)
    $(".list").addClass('active')
},1300)

function menuToggle(){
    $(".menu-toggle").toggleClass("active")
    $("#aside").toggleClass("active")
}

$(document)
.on("click",".menu-toggle",menuToggle)
.on("click","#gnb",menuToggle)

//메인페이지 애니메이션