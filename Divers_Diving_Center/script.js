"use strict";

const topSlider = document.querySelector('.top-slider .t-slider');
const topItem = document.querySelectorAll('.top-slider .t-slider .top-item');
const sliderInfo = document.querySelector('.top-slider .t-slider .top-item .slider-info.a');
const sliderInfo1 = document.querySelector('.top-slider .t-slider .top-item .slider-info.b');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const topImage = ['images/slide-1.jpg', 'images/slide-2.jpg'];
let current = 0;

for(let i = 0; i < topImage.length; i++) {
    topItem[i].style.backgroundImage = `url(${topImage[i]})`;
}

let leng = topImage.length;

next.addEventListener("click", () => {
    current -= 100;
    current === -leng * 100 ? current = 0 : '';
    topSlider.style.left = current + '%';

    setTimeout(() => {
        sliderInfo1.style.marginLeft = 175 + 'px';
        sliderInfo1.style.opacity = 1;
        sliderInfo.style.marginLeft = 175 + 'px';
        sliderInfo.style.opacity = 1;
    },1000)
});

prev.addEventListener("click", () => {
    current += 100;
    current > 0 ? current = -leng * 100 + 100: '';
    topSlider.style.left = current + '%';
    
    setTimeout(() => {
        sliderInfo1.style.marginLeft = 175 + 'px';
        sliderInfo1.style.opacity = 1;
        sliderInfo.style.marginLeft = 175 + 'px';
        sliderInfo.style.opacity = 1;
    },1000)
});

const searchButton = document.querySelector('.head .lang_search .header-search');
const searchBtnClose = document.querySelector('.head .lang_search .search_btn .search_btn-close i');
const searchBtnOpen = document.querySelector('.head .lang_search .search_btn .search_btn-open');

searchBtn.addEventListener("click", () => {
    searchButton.style.opacity = 1;
    searchButton.style.visibility = 'visible';
    searchBtnClose.style.opacity = 0;
    searchBtnClose.style.visibility = 'hidden';
    searchBtnOpen.style.opacity = 1;
    searchBtnOpen.style.visibility = 'visible';
});
searchOpen.addEventListener("click", () => {
    searchButton.style.opacity = 0;
    searchButton.style.visibility = 'hidden';
    searchBtnClose.style.opacity = 1;
    searchBtnClose.style.visibility = 'visible';
    searchBtnOpen.style.opacity = 0;
    searchBtnOpen.style.visibility = 'hidden';
});



const leftItem = document.querySelector('.left_item');
const sliderItem = document.querySelector('.left_item .img');
const dots = document.querySelectorAll('.left_item .dots input');
const image = ['images/dr/dr1.png','images/dr/dr2.png','images/dr/dr3.png'];

for (let i = 0; i < dots.length; i++) {
    dots[i].onchange = () => {
        if (dots[i].checked == true) {
            sliderItem.style.backgroundImage = `url(${image[i]})`;
        }
    };
}



const arrowIcon = document.querySelectorAll("#choose-divers .row .right_item .right_item_info .card-title .card-arrow .icon");
const careText = document.querySelectorAll('#choose-divers .row .right_item .right_item_info .careText');
let bool = true;

arrowIcon.forEach((item, i) => {
    item.addEventListener("click", () => {
        if (bool) {
            careText[i].style.display = 'block';
            bool = false;
        } else {
            careText[i].style.display = 'none';
            bool = true;
        }
    });
});


let a = 'I had a fantastic weekend at Stoney Cove with your team. Great people who made my wife (Lisa) and I feel very welcome. Thanks for all your help and support with the diving!';

let b = 'It was a great first time dive, the team was very friendly and attentive I will have no hesitation going again and recommending you to all my friends and colleagues';

let c = 'What a fantastic weekend spent with the amazingly friendly team at Divers! You made us feel very welcome and you all were amazing. Thank you!';

const sliderInf = document.querySelectorAll('#testimonial .carousel .slider .slider-info');
const item = document.querySelector('#testimonial .carousel .slider .slider-info .slider-text');
const info = [a,b,c];
let curent = 0;

const box = document.querySelectorAll('#testimonial .slider-item .slide-item');
const slide = document.querySelector('#testimonial .carousel .slider-info');

setInterval(() => {
    curent == 3 ? curent = 0 : '';
    slide.style.left = -curent * 100 + '%';
    box.forEach(item => item.style.opacity = 0.6);
    box[curent].style.opacity = 1;
    curent++;
}, 4000);











