/* MENU BUTTON */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

/* MOBILE MENU */

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        /* ICON CHANGE */

        if (navLinks.classList.contains("active")) {

            menuBtn.classList.replace("fa-bars", "fa-xmark");

        } else {

            menuBtn.classList.replace("fa-xmark", "fa-bars");
        }

    });

}

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "14px 7%";
        navbar.style.background = "#ffffffea";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.padding = "18px 7%";
        navbar.style.background = "#fff";
        navbar.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.08)";
    }

});

/* PRODUCT CATALOG */

function toggleCatalog() {

    const catalogPanel =
        document.getElementById("easternCatalog");

    if(catalogPanel){

        catalogPanel.classList.toggle("active");

    }

}
window.addEventListener("scroll", () => {

    const catalogPanel =
        document.getElementById("easternCatalog");

    if(catalogPanel &&
       catalogPanel.classList.contains("active")){

        catalogPanel.classList.remove("active");
    }

});
/* SLIDESHOW */

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[i].classList.add("active");
}

/* AUTO SLIDE */

setInterval(() => {

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide(index);

}, 3000);

/* ARROW CONTROLS */

function changeSlide(n){

    index += n;

    if(index >= slides.length){
        index = 0;
    }

    if(index < 0){
        index = slides.length - 1;
    }

    showSlide(index);
}
window.addEventListener("scroll", () => {

    const catalogPanel =
        document.getElementById("easternCatalog");

    if(catalogPanel &&
       catalogPanel.classList.contains("active")){

        catalogPanel.classList.remove("active");
    }

});
function toggleGrid() {
  document.getElementById("productGrid").classList.toggle("hidden");
}
let images = document.querySelectorAll(".grid img");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("popupImg").src = img.src;
    document.getElementById("popupTitle").innerText = "Product " + (index + 1);
  });
});

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}function showInfo(card){

  let title = card.dataset.title;
  let price = card.dataset.price;
  let rating = card.dataset.rating;
  let reviews = card.dataset.reviews;
  let img = card.querySelector("img").src;

  let popup = document.getElementById("popup");

  popup.innerHTML = `
    <div class="popup-box">

      <img src="${img}">

      <div class="popup-content">

        <h2>${title}</h2>

        <p class="price">${price}</p>

        <p class="rating">⭐ ${rating} (${reviews} reviews)</p>

        <button onclick="closePopup()">Close</button>

      </div>

    </div>
  `;

  popup.style.display = "flex";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}
const slider = document.getElementById("slider");

const beforeWrapper = document.querySelector(".before-wrapper");

slider.addEventListener("input", () => {

    beforeWrapper.style.width = slider.value + "%";

});

