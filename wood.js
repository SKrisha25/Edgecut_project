// header1
let leftBtn = document.querySelector('.left_btn');
let rightBtn = document.querySelector('.right_btn');
let point = document.querySelectorAll('.point');

let a = 0;
rightBtn.addEventListener('click', () => {
    a++;
    if (a > point.length - 1) {

        a = 0;
        point[0].classList.remove('hide');
        point[point.length - 1].classList.add('hide');
    }
    point[a].classList.remove('hide');
    point[a - 1].classList.add('hide');

});

leftBtn.addEventListener('click', () => {
    a--;
    if (a < 0) {
        a = point.length - 1;
        point[0].classList.add('hide');
    }
    point[a].classList.remove('hide');
    point[a + 1].classList.add('hide');
});




let cardHeading1 = document.querySelector('.card_heading1');

let on1 = document.querySelector('.on-click1');
let on2 = document.querySelector('.on-click2');

let b = 0;

on2.addEventListener('click' , ()=> {
        b++;
        cardHeading1.textContent = b;
})

on1.addEventListener('click' , ()=> {
        b--;    
        cardHeading1.textContent = b;
})




// header5 

let forBtn = document.querySelector('.for-btn');
let backBtn = document.querySelector('.back-btn');
let mind = document.querySelectorAll('.mind');

let c = 0;
backBtn.addEventListener('click', () => {
    c++;
    if (c > mind.length - 1) {

        c = 0;
        mind[0].classList.remove('dis');
        mind[mind.length - 1].classList.add('dis');
    }
    mind[c].classList.remove('dis');
    mind[c - 1].classList.add('dis');
});


forBtn.addEventListener('click', () => {
    c--;
    if (c < 0) {
        c = mind.length - 1;
        mind[0].classList.add('dis');
    }
    mind[c].classList.remove('dis');
    mind[c + 1].classList.add('dis');
});