//type effect
const divWelcome = document.querySelector(".introduction");
const text = `Hi! i'm Samuel a web/mobile developer`;
function typingEffect(element, text, i=0){
    if(i===0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    if (i === text.length -1) {
        return;
    } 

    setTimeout(() => typingEffect(element, text, i+1), 65);
}
typingEffect(divWelcome, text);


//fixed navbar on scroll
window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector(".navbar");
    if(window.scrollY >= 100) {
        navbar.classList.add("fixedNavbar");
    } else {
        navbar.classList.remove("fixedNavbae");
    }

});


//hamburger menu animation
const menubar = document.querySelector(".menu-bar");
const dropdown = document.querySelector(".dropdown");
const dropdownLinks = document.querySelector(".dropdown-links");
menubar.addEventListener('click', ()=>{
    menubar.classList.toggle('change');
    dropdown.classList.toggle("change-height");
    dropdownLinks.classList.toggle('showDropLinks');
});


//active tab switch

const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

tab1.addEventListener('click', ()=>{
    tab1.classList.add("active-tab");
    tab2.classList.remove("active-tab");
    tab3.classList.remove("active-tab");
});

tab2.addEventListener('click', ()=>{
    tab2.classList.add("active-tab");
    tab1.classList.remove("active-tab");
    tab3.classList.remove("active-tab");
});


tab3.addEventListener('click', ()=>{
    tab3.classList.add("active-tab");
    tab1.classList.remove("active-tab");
    tab2.classList.remove("active-tab");
});


//show buttons on project card hover
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    const projectBtns = card.querySelector(".project-btns");

    card.addEventListener('mouseenter', () => {
        projectBtns.style.display = "flex";
    });

    card.addEventListener('mouseleave', () => {
        projectBtns.style.display = "none";
    });
});



//tab swtich
const tabContent1 = document.querySelector('.tab-1-content');
const tabContent2 = document.querySelector('.tab-2-content');
const tabContent3 = document.querySelector('.tab-3-content');

tab1.addEventListener('click', ()=>{
    tabContent1.style.display = 'inline-block';
    tabContent2.style.display = ' none';
    tabContent3.style.display = 'none';
})

tab2.addEventListener('click', ()=>{
    tabContent2.style.display = 'inline-block';
    tabContent1.style.display = ' none';
    tabContent3.style.display = 'none';
})

tab3.addEventListener('click', ()=>{
    tabContent3.style.display = 'inline-block';
    tabContent2.style.display = ' none';
    tabContent1.style.display = 'none';
})




//carpuse ski;;s

const rightArrow = document.querySelector(".skills-arrow .fa-arrow-right");
rightArrow.addEventListener("click", rightArrowClicked);

function rightArrowClicked(){
    const skillsWrapper = document.querySelector(".skills-circle-wrapper");
    skillsWrapper.scrollLeft += 260;
}


const leftArrow = document.querySelector(".skills-arrow .fa-arrow-left");
leftArrow.addEventListener("click", leftArrowClicked);

function leftArrowClicked(){
    const skillsWrapper = document.querySelector(".skills-circle-wrapper");
    skillsWrapper.scrollLeft += -260;
}


