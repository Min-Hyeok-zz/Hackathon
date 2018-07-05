
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

function pay () {
    $(".pay").fadeIn(0)
    setTimeout(function(){
        $(".before").css({animation:"hide 2s"}).fadeOut()
        $(".after").fadeIn().css({animation: "show 2s"})
    },2000)
    setTimeout(function(){
        $(".pay").css({opacity: "0"})
    },5000)
}

$(document)
.on("click",".menu-toggle",menuToggle)
.on("click","#gnb",menuToggle)
.on("click",".chat-pay",pay)

//메인페이지 애니메이션