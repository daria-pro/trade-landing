//Accordion toggle
$(".questions__question").click(function (e) {
  e.preventDefault();
  var currentIsActive = $(this).hasClass("questions__question--active");
  $(this)
    .parent(".questions__list")
    .find("> *")
    .removeClass("questions__question--active");
  if (currentIsActive != 1) {
    $(this).addClass("questions__question--active");
  }
});

//Email validation
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");
  const $emailInput = $("#email");
  const $errorText = $("#errorText");

  if (validateEmail(email)) {
    $emailInput.css({ border: "1px solid #0EAC00" });
    $errorText.css("visibility", "hidden");
  } else {
    $emailInput.css({ border: "1px solid #EB5757" });
    $errorText.css("visibility", "visible");
  }
  return false;
};

$("#email").on("input", validate);

//no margin on 2 last sections
var lastItems = $(".page__section");
lastItems.slice(lastItems.length - 2).css("margin-bottom", "0");

//Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log("clicked");
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("reviews__card");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Hamburger menu
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");
const navButtons = document.querySelector(".nav__buttons-container");
const langButton = navButtons.querySelector(
  ".nav__buttons-container > .nav__lang-select"
);
const signInButton = navButtons.querySelector(".nav__buttons-container > a");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));
signInButton.addEventListener("click", closeMenu);

function mobileMenu() {
  hamburger.classList.toggle("nav__hamburger--active");
  navMenu.classList.toggle("nav__list--active");
  navButtons.classList.toggle("nav__buttons-container--active");
  langButton.classList.toggle("nav__button--active");
}

function closeMenu() {
  hamburger.classList.remove("nav__hamburger--active");
  navMenu.classList.remove("nav__list--active");
  navButtons.classList.remove("nav__buttons-container--active");
  langButton.classList.remove("nav__button--active");
}

//Language select
$(function () {
  $(".nav__lang-select").each(function () {
    var $input = $(this).find("#lang-input");
    var $dropDown = $(this).find("#lang-list");

    $(this).on("click", function () {
      $dropDown.slideToggle();
    });

    $dropDown.on("click", "li", function () {
      $input.val($(this).text());
    });
  });
});
