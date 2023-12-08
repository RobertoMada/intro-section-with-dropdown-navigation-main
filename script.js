const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', ()=>{
    const visibility = nav.getAttribute('data-visible');
    if(visibility === 'false'){
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expended', true);
    } else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expended', false);
    }
})

const drops = document.querySelectorAll('[role="navigation"]');

drops.forEach((drop)=>{
    drop.addEventListener('click', toggleDropDown);
})

function toggleDropDown(e){
    const targetDrop = e.target;
    const dropDown = targetDrop.getAttribute('aria-controls');
    if(targetDrop.getAttribute('aria-expanded') === 'false'){
        targetDrop.setAttribute('aria-expanded', true);
        document.getElementById(dropDown).setAttribute('data-visible', true);
    }else{
        targetDrop.setAttribute('aria-expanded', false);
        document.getElementById(dropDown).setAttribute('data-visible', false);
    }
   
}