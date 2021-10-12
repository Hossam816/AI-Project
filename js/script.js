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

        if(scrollTop >= 400){
            $(".img-container").css({
                transform: "translateX(0%)"
            })
            $(".about-text").css({
                "-webkit-transform": "translateY(0%)"
            })
        }

        if(scrollTop>=600){
            $(".project-info:first-child").css({
                transition: "all 1.2s ease",
                "-webkit-transform": "translateX(0%)",
                opacity: "1"
            })
            $(".project-info:nth-child(2)").css({
                transition: "all 1.2s ease",
                "-webkit-transform": "translateX(0%)",
                opacity: "1"
            })
            $(".project-info:nth-child(3)").css({
                transition: "all 1.2s ease",
                "-webkit-transform": "translateX(0%)",
                opacity: "1"
            })
            $(".project-info:nth-child(4)").css({
                transition: "all 1.2s ease",
                "-webkit-transform": "translateX(0%)",
                opacity: "1"
            })
        }
    })
    $(".img-slide .slide-text").animate({
        opacity: "1",
    },500, function(){
        $(".slide-text h1").animate({
            opacity: "1"
        },700,function(){
            $(".slide-text p").css({
                opacity: "1",
                transform: `translateX(0%)`,
                transition: "all 1.25s ease",
            })
                $(".slide-text button").css({
                    "-web-transform": "scale(1)",
                    "transform": "scale(1)"
                })
        })
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



//select all img for project
var sldierImg = Array.from(document.querySelectorAll(".img-container img"))

//sliderImg count
var sliderCount = sldierImg.length

console.log(sliderCount)

//select num 
var slideNum = document.querySelector(".slide-num")

//set current slide
var currentSlide = 1;

//btn
var prevBtn = document.querySelector(".project-left");
var nextBtn = document.querySelector(".project-right");
console.log(nextBtn)

//handle click function
nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)


//next slide
function nextSlide(){
    if(nextBtn.classList.contains("disabled")){
        return false
    }else{
        currentSlide++;
        checker()
    }
}

//prev slide
function prevSlide(){
    if(prevBtn.classList.contains("disabled")){
        return false
    }else{
        currentSlide--;
        checker()
    }}

//creat ul 
var newUl = document.createElement("ul")
newUl.setAttribute("id", "indeicator-ul")

//creat li 
for(let i = 1; i<=sliderCount; i++){
    var newLI = document.createElement("li")
    
    newLI.setAttribute("data-index", i)
    //set li content
    newLI.appendChild(document.createTextNode(i))

    //add li to ul
    newUl.appendChild(newLI)
}

//add ul to span 
document.querySelector(".dash-container").appendChild(newUl);

//choose ul 
var idUl = document.getElementById("indeicator-ul");

//get ul li in one array

var liArray = Array.from(document.querySelectorAll('#indeicator-ul li'))
console.log(liArray)
for(let i = 0; i < liArray.length; i++){
    liArray[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'))
        checker()
    }
}

checker()
//creat checker function 

function checker() {
    //set slide num
    slideNum.textContent = `${currentSlide}/ ${sliderCount}`

    //remove all active class
    removeClass()
    //set active class on current slide
    sldierImg[currentSlide - 1].classList.add("active");

    //set active class on li 
    idUl.children[currentSlide - 1].classList.add("active")

    //prev btn
    if(currentSlide == 1){
        prevBtn.classList.add("disabled")
    }else{
        prevBtn.classList.remove("disabled")
    }

    //next btn
    if(currentSlide == sliderCount){
        nextBtn.classList.add("disabled")
    }else{
        nextBtn.classList.remove("disabled")
    }
}

//remove all active class from ul and img

function removeClass(){
    sldierImg.forEach((img)=> {
        img.classList.remove('active')
    })

    liArray.forEach((li)=> {
        li.classList.remove('active')
    })
}






