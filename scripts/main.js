function foot(x) {
    if (x.matches) { 
        document.getElementById('footer').innerHTML = "<a href='#'>Правила пользования</a><br>© 2023 NoirExp Ltd.";
    } else {
        document.getElementById('footer').innerHTML = "<a href='#'>Правила пользования</a> © 2023 Noir Ltd.";
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    new SimpleAdaptiveSlider('#slider-1', { swipe: true, });
    new SimpleAdaptiveSlider('#slider-2', { swipe: true, });
});
  
let footer = window.matchMedia("(max-width: 440px)");
foot(footer);
footer.addListener(foot);


let menu_status = false;
let menu__btn = document.getElementById('menu__btn');
let menu = document.getElementById('menu');

function menu_bar(){
    if (menu_status == false){
        menu__btn.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
        menu.style.right = '0';
        menu_status = true;
    } else {
        menu__btn.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
        menu.style.right = '-100%';
        menu_status = false;
    }
}

const $who = document.querySelector('#who');
const $action = document.querySelector('#action');
const $photographer = document.querySelector('#photographer');
const $examp = document.querySelector('#examp');
const $studio = document.querySelector('#studio');
const $order = document.querySelector('#order');

$who.onclick = function(e){
    e.preventDefault();
    let c = document.querySelector('.who').getBoundingClientRect();
    scrollBy({ top: c.top - (window.innerHeight / 4), behavior: 'smooth' });
    menu_bar();
};

$action.onclick = function(e){
    e.preventDefault();
    let c = document.querySelector('.action').getBoundingClientRect();
    scrollBy({ top: c.top - (window.innerHeight / 4), behavior: 'smooth' });
    menu_bar();
}

$photographer.onclick = function(e){
    e.preventDefault();
    let c = document.querySelector('.photographer').getBoundingClientRect();
    scrollBy({ top: c.top - (window.innerHeight / 4), behavior: 'smooth' });
    menu_bar();
}

$examp.onclick = function(e){
    e.preventDefault();
    let c = document.querySelector('.examp').getBoundingClientRect();
    scrollBy({ top: c.top - (window.innerHeight / 4), behavior: 'smooth' });
    menu_bar();
}

$studio.onclick = function(e){
    e.preventDefault();
    let c = document.querySelector('.studio').getBoundingClientRect();
    scrollBy({ top: c.top - (window.innerHeight / 4), behavior: 'smooth' });
    menu_bar();
}

$order.onclick = function(e){
    e.preventDefault();
    let c = document.querySelector('.order').getBoundingClientRect();
    scrollBy({ top: c.top - (window.innerHeight / 4), behavior: 'smooth' });
    menu_bar();
}