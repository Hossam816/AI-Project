$(function(){
    "use strict"
    $(".menu-btn").on("click", function(){
        $(".menu-container ul").toggleClass("show")
    })
    $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();

        if(scrollTop>=900){
            $(".btn-up").fadeIn(1000)
        }else{
            $(".btn-up").fadeOut(500)
        }

    })
    $(".btn-up").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
    $(".lang-im").on("click", function(e){
        e.preventDefault();
        $(".ol-lang::after").slideToggle("fast")
        $(".ol-lang").slideToggle("fast")
    })

})

var allLinks = document.querySelectorAll(".menu-container ul li");

function scrolling(links){
    links.forEach(link => {
        link.addEventListener("click", (e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.scroll).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
scrolling(allLinks)