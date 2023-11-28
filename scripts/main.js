function foot(x) {
    if (x.matches) { 
        document.getElementById('footer').innerHTML = "Правила пользования<br>© 2023 NoirExp Ltd.";
    } else {
        document.getElementById('footer').innerHTML = "Правила пользования © 2023 NoirExp Ltd.";
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    new SimpleAdaptiveSlider('#slider-1', {
        swipe: true,
     });

    new SimpleAdaptiveSlider('#slider-2', {
        swipe: true,
     });
});
  
let footer = window.matchMedia("(max-width: 447px)");
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
    scrollBy({ top: 550, behavior: 'smooth' });
}

$action.onclick = function(e){
    e.preventDefault();
    scrollBy({ top: 1130, behavior: 'smooth' });
}

$photographer.onclick = function(e){
    e.preventDefault();
    scrollBy({ top: 1750, behavior: 'smooth' });
}

$examp.onclick = function(e){
    e.preventDefault();
    scrollBy({ top: 2385, behavior: 'smooth' });
}

$studio.onclick = function(e){
    e.preventDefault();
    scrollBy({ top: 3080, behavior: 'smooth' });
}

$order.onclick = function(e){
    e.preventDefault();
    scrollBy({ top: 4000, behavior: 'smooth' });
}

function scroll1023(x) {
    if (x.matches){
        $who.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 580, behavior: 'smooth' });
            menu_bar();
        }
        
        $action.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 1200, behavior: 'smooth' });
            menu_bar();
        }
        
        $photographer.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 2200, behavior: 'smooth' });
            menu_bar();
        }
        
        $examp.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 3130, behavior: 'smooth' });
            menu_bar();
        }
        
        $studio.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 3830, behavior: 'smooth' });
            menu_bar();
        }
        
        $order.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 4860, behavior: 'smooth' });
            menu_bar();
        }
    }
}

function scroll640(x) {
    if (x.matches){
        $who.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 580, behavior: 'smooth' });
            menu_bar();
        }
        
        $action.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 1800, behavior: 'smooth' });
            menu_bar();
        }
        
        $photographer.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 3100, behavior: 'smooth' });
            menu_bar();
        }
        
        $examp.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 3600, behavior: 'smooth' });
            menu_bar();
        }
        
        $studio.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 4150, behavior: 'smooth' });
            menu_bar();
        }
        
        $order.onclick = function(e){
            e.preventDefault();
            scrollBy({ top: 4900, behavior: 'smooth' });
            menu_bar();
        }
    }
}

let Media1023 = window.matchMedia('(max-width: 1023px)');
scroll1023(Media1023);
Media1023.addListener(scroll1023);

let Media640 = window.matchMedia('(max-width: 640px)');
scroll640(Media640);
Media640.addListener(scroll640);