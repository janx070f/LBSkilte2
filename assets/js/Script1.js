// JavaScript source code by Jan Andreassen 1071790 | Mmda0918 - 2019

    let hamburgerButton = document.querySelector('.NavButton');
    let mobileNav = document.querySelector('.mobile');

    function openMobile() {
        mobileNav.classList.add('open'); //Add the class open to the mobile class
    }

    function closeMobile() {
        mobileNav.classList.remove('open'); //remove the class open from the mobile class
    }

    hamburgerButton.addEventListener('click', openMobile); //when click use function openMobile
    mobileNav.addEventListener('click', closeMobile); //when click use function closeMobile

//mikkel forside starter 
let billedIndex = 1;
visBilleder(billedIndex);

function nytBilled(x) {
    visBilleder(billedIndex += x);
}
function vistbilled(y) {
    visBilleder(billedIndex = y);
}
function visBilleder(z) {
    let i;
    let billeder = document.getElementsByClassName("billeder");
    let cirkler = document.getElementsByClassName("cirkler");
    if (z > billeder.length) { billedIndex = 1 }
    if (z < 1) { billedIndex = billeder.length }
    for (i = 0; i < billeder.length; i++) {
        billeder[i].style.display = "none";
    }
    for (i = 0; i < cirkler.length; i++) {
        cirkler[i].className = cirkler[i].className.replace(" active", "");
    }
    if (billedIndex > billeder.length) { billedIndex = 1 }
    billeder[billedIndex - 1].style.display = "block";
    cirkler[billedIndex - 1].className += " active";
}
setInterval(nytBilled, 5000, 1);
//mikkel forside slut 
