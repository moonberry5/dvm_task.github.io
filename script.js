//variable

const box1 = document.querySelector('.grid-container2-1');
const box2 = document.querySelector('.grid-container2-2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', function () {
    box1.style.display = 'flex';
    box2.style.display = 'none';
    btn1.style.borderBottom = 'black solid 4px'; 
    btn2.style.borderBottom = 'none'; 
    btn3.style.borderBottom = 'none';
})

btn2.addEventListener('click', function () {
    box1.style.display = 'none';
    box2.style.display = 'flex';
    btn1.style.borderBottom = 'none'; 
    btn2.style.borderBottom = 'black solid 4px';
    btn3.style.borderBottom = 'none';

})

btn3.addEventListener('click', function () {
    box1.style.display = 'none';
    box2.style.display = 'none';
    btn1.style.borderBottom = 'none'; 
    btn2.style.borderBottom = 'none';
    btn3.style.borderBottom = 'black solid 4px';

})

const grid1 = document.querySelector('.grid-container4-1');
const grid2 = document.querySelector('.grid-container4-2');
const cbtn1 = document.getElementById('circle-button1');
const cbtn2 = document.getElementById('circle-button2');

cbtn1.addEventListener('click', function () {
    grid1.style.display = 'grid';
    grid2.style.display = 'none';
    cbtn2.style.backgroundColor = 'black'; 
    cbtn2.style.width = "12px";
    cbtn2.style.height = "12px";
    cbtn1.style.backgroundColor = 'white'; 
    cbtn1.style.width = "16px";
    cbtn1.style.height = "16px";
});

cbtn2.addEventListener('click', function () {
    grid2.style.display = 'grid';
    grid1.style.display = 'none';
    cbtn1.style.backgroundColor = 'black'; 
    cbtn1.style.width = "12px";
    cbtn1.style.height = "12px";
    cbtn2.style.backgroundColor = 'white'; 
    cbtn2.style.width = "16px";
    cbtn2.style.height = "16px";

});

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const left = document.querySelector('.grid-container3-1');
const right = document.querySelector('.grid-container3-2');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

btn4.addEventListener('click', function () {
    left.style.display = 'grid';
    right.style.display = 'none';
    btn4.style.borderBottom = 'black solid 4px'; 
    btn5.style.borderBottom = 'none'; 
});

btn5.addEventListener('click', function () {
    left.style.display = 'none';
    right.style.display = 'grid';
    btn4.style.borderBottom = 'none'; 
    btn5.style.borderBottom = 'black solid 4px';
});
