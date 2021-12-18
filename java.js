



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

};

menu.addEventListener('click' , mobileMenu);

const hide = document.querySelector('#nav--menu')
const search =document.querySelector('.search');
const icon = document.querySelector('.icon');
const clear = document.querySelector('.clear')
const down = document.querySelector('.down')
const clear2 = document.querySelector('.clear--res')



function checkMedia() {
    if(window.innerWidth > 768) {
       
        icon.onclick = function(){
            search.classList.add('active')
            document.getElementById('nav--menu').classList.add('active')
        }
        
        
        
        clear.onclick = function(){
            document.getElementById('mysearch').value = ''
            document.getElementById('nav--menu').classList.remove('active')
            search.classList.remove('active')
        }
      
    }
    else{
        icon.onclick = function(){
           down.classList.toggle('active')
           
        }

        clear2.onclick = function(){
            down.classList.toggle('active')
            
         }

        
    }
    return;
}

window.addEventListener('resize',checkMedia);

window.addEventListener('load',checkMedia)





