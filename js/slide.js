//slider for header//

// select all img for headr
var headerImg = Array.from(document.querySelectorAll(".img-slide"))


//haeder count
var headerCount = headerImg.length;

console.log(headerCount)

var currentSlide = 1;




//create ul & li 

var headerNewUl = document.createElement("ul")
headerNewUl.setAttribute("id", "headerUl")

for(let i = 1;i <= headerCount; i++){
    var headerNewLi = document.createElement("li");
    headerNewLi.setAttribute("data-slide", i)

    //set li countent
    headerNewUl.appendChild(headerNewLi)
}
document.querySelector(".dash-container").appendChild(headerNewUl)

var headerIdUl = document.getElementById("headerUl")

// get ul li arrays

var headerliArray = Array.from(document.querySelectorAll("#headerUl li"));

for(let i = 0;i < headerliArray.length; i++){
    headerliArray[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-slide"))
        checkslide()
    }
}


checkslide()

function checkslide() {

    removeheaderActive()
    headerImg[currentSlide - 1].classList.add("active")

    headerIdUl.children[currentSlide - 1].classList.add('active')

}

function removeheaderActive(){
    headerImg.forEach((img)=>{
        img.classList.remove("active")
    })

    headerliArray.forEach((li)=>{
        li.classList.remove('active')
    })
}