$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
//  owl carousel section ends


let s = new Typed(".stored", {

    loop: true,
    typeSpeed: 80,
    stringsElement: ".box",
    backSpeed: 100,

});
//  typed js section ends


var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//  swiper js section ends



AOS.init({
    offset: 300,
    duration: 1000,
  });

  // aos js ends

// theme changer ----------------------------------> js

let a = document.querySelector("#shade-one"); // maroon
let b = document.querySelector("#shade-two"); // dark yellow
let c = document.querySelector("#shade-three"); // dark blue
let d = document.querySelector("#shade-four"); // dark green


// all text and headings (fetch) starts
let e = document.querySelector(".au"); // about us heading
let cth = document.querySelector("#chh"); // contact us heading*******************
let srh = document.querySelector("#service-hh"); // services heading*******************
let ee = document.querySelector(".owl-theme"); // about us right images prev-next
let f = document.querySelector(".scroll"); // scroll box
let g = document.querySelector(".au-t"); // scroll box text
let h = document.querySelector(".om"); // motive heading
let i = document.querySelector(".motive-texts"); // motive box
let j = document.querySelector(".focus"); // focus on walls heading
let k = document.querySelector(".sub-h-one"); // point a
let l = document.querySelector(".sub-h-two"); // point b
let info = document.querySelector(".info"); // info text
let infoTwo = document.querySelector("#info-two"); // info text
let m = document.querySelector(".nxt"); // next button swiper
let n = document.querySelector(".prv"); // prv button swiper
let o = document.querySelector(".o-s"); // services - mini heading

let q = document.querySelector(".cb"); // cards
let r = document.querySelector(".brand-background"); // brand background
let ss = document.querySelector(".tws"); // brand background text
let t = document.querySelector(".contact-section"); // contact section background
// all text and headings (fetch) ends


a.addEventListener("click", maroon = () => {
    document.body.style.backgroundColor = "#550404";
    a.style.transition = "2s";
    e.style.color = "white";
    f.style.border = "0.1rem solid white";
    g.style.color = "white";
    ee.style.color = "white";
    h.style.color = "white";

    h.style.color = "white";
    k.style.color = "white";
    j.style.color = "white";
    l.style.color = "white";
    info.style.color = "white";
    infoTwo.style.color = "white";
    m.style.color = "white";
    n.style.color = "white";
    o.style.color = "white";
    cth.style.color = "white";
    srh.style.color = "white";
});



b.addEventListener("click", darkYellow = () => {
    document.body.style.backgroundColor = "#413D04";
    b.style.transition = "2s";
    e.style.color = "white";
    f.style.border = "0.1rem solid white";
    g.style.color = "white";
    ee.style.color = "white";
    h.style.color = "white";

    h.style.color = "white";
    k.style.color = "white";
    j.style.color = "white";
    l.style.color = "white";
    info.style.color = "white";
    infoTwo.style.color = "white";
    m.style.color = "white";
    n.style.color = "white";
    o.style.color = "white";
    cth.style.color = "white";
    srh.style.color = "white";
});

c.addEventListener("click", darkBlue = () => {
    document.body.style.backgroundColor = "#10034D";
    c.style.transition = "2s";
    e.style.color = "white";
    f.style.border = "0.1rem solid white";
    g.style.color = "white";
    ee.style.color = "white";
    h.style.color = "white";

    h.style.color = "white";
    k.style.color = "white";
    j.style.color = "white";
    l.style.color = "white";
    info.style.color = "white";
    infoTwo.style.color = "white";
    m.style.color = "white";
    n.style.color = "white";
    o.style.color = "white";
    cth.style.color = "white";
    srh.style.color = "white";
});

d.addEventListener("click", darkGreen = () => {
    document.body.style.backgroundColor = "#033510";
    d.style.transition = "2s";
    e.style.color = "white";
    f.style.border = "0.1rem solid white";
    g.style.color = "white";
    ee.style.color = "white";
    h.style.color = "white";

    h.style.color = "white";
    k.style.color = "white";
    j.style.color = "white";
    l.style.color = "white";
    info.style.color = "white";
    infoTwo.style.color = "white";
    m.style.color = "white";
    n.style.color = "white";
    o.style.color = "white";
    cth.style.color = "white";
    srh.style.color = "white";
});

// theme changer ends-------------------------------------------------

const toTop = document.querySelector(".to-top");

// adding window event listner
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        toTop.classList.add("active");
        // toTop.style.color="white";
        // toTop.style.backgroundColor = "black";
        // top.style.borderRadius  = "5rem";
    } else {
        toTop.classList.remove("active");
    }
});