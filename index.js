
let mobileNav = document.querySelector(".mobile-nav")

let click = 0;
let openNav = ()=>{
    if(click === 0){
        mobileNav.classList.add("mobile-nav-on")
        click = 1
    }
    else{
        mobileNav.classList.remove("mobile-nav-on")
        click = 0
    }
    
}


