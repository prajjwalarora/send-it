const navItems = document.querySelectorAll('.nav-link');

const navItemArr = Array.from(navItems);

function classRemover() {
    navItemArr.forEach(element => {
        element.classList.remove('active');
    })
}



window.addEventListener('scroll',(e) => {
    if (window.pageYOffset < 700){
        classRemover();
        document.querySelector('.Home').classList.add('active')
    }else if ((window.pageYOffset >= 700) && (window.pageYOffset < 1300)){
        classRemover();
        document.querySelector('.Features').classList.add('active')
    }else if ((window.pageYOffset >= 1300) && (window.pageYOffset < 1670)){
        classRemover();
        document.querySelector('.Reviews').classList.add('active')
    }else if (window.pageYOffset >= 1670){
        classRemover();
        document.querySelector('.About').classList.add('active')
    }
})