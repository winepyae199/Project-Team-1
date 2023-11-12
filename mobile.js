//mobile sidebar view//
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

//close sidebar//
mobileLink.addEventListener("click", function () {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth<=984 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
    
});

// back and ford menu button//
var step = 10;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".hightlight-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    })
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".hightlight-wrapper").animate ({
        scrollLeft: "+=" + stepFilter + "px"
    });
})