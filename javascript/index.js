// card-animation on scroll
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".card1");
    if (entry.isIntersecting) {
      square.classList.remove("opacity");
      square.classList.add("card-animation");
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});
observer1.observe(document.querySelector(".card-container"));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".card2");

    if (entry.isIntersecting) {
      setTimeout(() => {
        square.classList.remove("opacity");
        square.classList.add("card-animation");
      }, 1000);

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});
observer2.observe(document.querySelector(".card-container"));

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".card3");
    if (entry.isIntersecting) {
      setTimeout(() => {
        square.classList.remove("opacity");
        square.classList.add("card-animation");
      }, 1500);
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});
observer3.observe(document.querySelector(".card-container"));

// const observer4 = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const square = entry.target.querySelector(".card4");
//     if (entry.isIntersecting) {
//       setTimeout(() => {
//         square.classList.remove("opacity");
//         square.classList.add("card-animation");
//       }, 2000);
//       return; // if we added the class, exit the function
//     }
    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
//   });
// });
// observer4.observe(document.querySelector(".card-container"));

//   Slick Animation Effect in Our team section
$(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 400) {
      $("#slick-carousel").removeClass("autoplay");
      $("#contact-submit-btn").removeClass("w-25");
      //add the class for mobile width
      $("#slick-carousel").addClass("mobile-slick");
    } else if (ww >= 401) {
      $("#slick-carousel").addClass("autoplay");
      $("#contact-submit-btn").addClass("w-25");
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  //slick specification for mobile width

  $(".mobile-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

