//Page load animation
let pageLoadBox = document.querySelector(".page-load-box");
let loaders = document.querySelector(".loaders");
window.addEventListener("load", () => {
    loaders.style.opacity = "1";
    setTimeout(() => {
        loaders.style.opacity = "0";
        setTimeout(() => {
            pageLoadBox.style.top = "100%";
        }, 500)
    }, 1500)
});

//Declare Menu Variables
let signUpBg = document.querySelector(".sign-up-bg");
let menuBox = document.querySelector(".menu-box");
let menuToggle = document.getElementById("menuToggle");
let menu = document.querySelector(".menu");
let menuClicked = false;
//Add The Hover Event To The Menu Box
menuBox.addEventListener("mouseover", () => {
    menuBox.style.width = "80px";
    menuBox.style.height = "80px";
    menuBox.style.backgroundColor = "rgba(28, 43, 42, 0.7)";
})
menuBox.addEventListener("mouseout", menuOut)
//Change Menu Toggle Icon On CLick
menuToggle.addEventListener("click", () => {
    menuOut();
   setTimeout(() => {
    menuToggle.classList.toggle("fa-bars");
    menuToggle.classList.toggle("fa-close");
   }, 500);
   if(menuClicked == false) {
        menuShow();
    }else {
        menuHide();
}
});
signUpBg.addEventListener("click", () => {
    if(menuClicked == false) {
        return;
    }else {
        menuToggle.classList.toggle("fa-bars");
        menuToggle.classList.toggle("fa-close");
        menuHide();
    }
});


//Declare Variables For Menu
let menuLinks = document.querySelectorAll(".menu-links");
let menuDelay = 0.5;
//Function To Delay Menu Links
function delayMenuLinks() {
    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].style.transitionDelay = `${menuDelay}s`;
        menuDelay += 0.2;
    }
    menuDelay = 0.5;
}
//Function To Remove Menu Link Delay
function removeMenuLinkDelay() {
    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].style.transitionDelay = "0s";
    }
}
//Create A Function To CLose The Menu When Mouse Out
function menuOut() {
    menuBox.style.width = "30px";
    menuBox.style.height = "30px";
    menuBox.style.backgroundColor = "rgb(28, 43, 42)";
}
//Function To Show Menu
function menuShow() {
    menu.style.left = "20px";
    delayMenuLinks();
    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].style.transform = "translateX(0)";
    }
    setTimeout(() => {
        removeMenuLinkDelay();
    }, 2000);
    menuClicked = true;
}
//Function To Hide Menu
function menuHide() {
    delayMenuLinks();
    menuDropdown.style.height = "0";
    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].style.transform = "translateX(150%)";
    }
    setTimeout(() => {
        menu.style.left = "-100%";
    }, 1500)
    setTimeout(() => {
        removeMenuLinkDelay();
    }, 2000);
    menuClicked = false;
}


//Declare The Variables For The Dropdown
let dropIcon = document.getElementById("drop-icon");
let menuDropdown = document.querySelector(".menu-dropdown");
let menuDropLink = document.getElementById("menu-droplink");
let dropdownClicked = false;
//Add The Click Event
menuDropLink.addEventListener("click", () => {
//Check If The Dropdown Is Already Clicked
    if(dropdownClicked == false) {
        dropIcon.style.transform = "rotateZ(180deg)"
        menuDropdown.style.height = "140px";
        dropdownClicked = true;
    }else {
        dropIcon.style.transform = "rotateZ(0deg)"
        menuDropdown.style.height = "0";
        dropdownClicked = false;
    }
});

let singInput = document.querySelectorAll(".name-input");
for(let i = 0; i < singInput.length; i++) {
    singInput[i].addEventListener("click", (e) => {
        let label = e.target.parentNode.childNodes[1];
        label.style.top = "10px";
        label.style.left = "20px";
        label.style.fontSize = "11px";
    })
    singInput[i].addEventListener("blur", (e) => {
        if(e.target.value.length < 1) {
            let label = e.target.parentNode.childNodes[1];
            label.style.top = "20px";
            label.style.left = "20px";
            label.style.fontSize = "15px";
        }else {
            return;
        }
    })
    singInput[i].addEventListener("keydown", (e) => {
        let label = e.target.parentNode.childNodes[1];
        label.style.top = "10px";
        label.style.left = "20px";
        label.style.fontSize = "11px";
    })
};

let eyeIcon = document.querySelector(".eye-icon");
eyeIcon.addEventListener("click", () => {
    eyeIcon.classList.toggle("fa-eye-slash");
    eyeIcon.classList.toggle("fa-eye");
    if(singInput[3].type == "password") {
        singInput[3].type = "text";
    } else {
        singInput[3].type = "password";
    }
});