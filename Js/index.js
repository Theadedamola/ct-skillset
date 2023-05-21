var accBtn = document.querySelectorAll(".accordion");
var arrow = document.querySelectorAll(".icon");
var answer = document.getElementsByClassName("tab-details");

for (let i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener("click", () => {
        closeAll(i);
        openQuest(i);
    });
}

function openQuest(i) {
    arrow[i].style.transform = "rotateX(180deg)";
    answer[i].style.display = "block";

}

function closeAll(i){
    for (let i = 0; i < accBtn.length; i++) {
        arrow[i].style.transform = "rotateX(0deg)";
        answer[i].style.display = "none";
    }
}

var tabBtn = document.querySelectorAll(".tab");
var details = document.getElementsByClassName("tab-details");

for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener("click", () => {
        closeAll(i);
        openQuest(i);
    });
}

function openQuest(i) {
    tabBtn[i].className = tabBtn[i].className.replace("tab-2", "tab-4")
    details[i].style.display = "block";
}

function closeAll(i){
    for (let i = 0; i < accBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace("tab-1", "tab-2")
        tabBtn[i].className = tabBtn[i].className.replace("tab-4", "tab-2")
        answer[i].style.display = "none";
    }
}

const carouselDiv = document.querySelector(".carousel-div"),
    carousel = document.querySelector(".carousel-img")
    images = document.querySelectorAll(".image"),
    circle = document.querySelectorAll(".circle");

let imageIndex = 1,
    intervalId;

    const  autoSlide = () => {
        intervalId = setInterval(() => slideImage(++imageIndex), 2000);
    };
    autoSlide();
    const slideImage = () => {
        imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
        carousel.style.transform = `translate(-${imageIndex * 20}%)`;
    }
    



