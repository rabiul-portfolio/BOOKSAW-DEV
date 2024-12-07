var swiper = new Swiper(".mySwiper", {

  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Render custom HTML for dots
      return `
        <div class="dot ${className}">
            <div class="dot01"></div>
        </div>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".feature_slider", {

  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// external js: isotope.pkgd.js

// init Isotope elements
var $box = $(".isotope-box").isotope({
  itemSelector: ".isotope-item"
});

$(".isotope-toolbar").on("click", "button", function () {
  var filterValue = $(this).attr("data-type");
  $(".isotope-toolbar-btn").removeClass("active");
  $(this).addClass("active");
  if (filterValue !== "*") {
    filterValue = '[data-type="' + filterValue + '"]';
  }
  console.log(filterValue);
  $box.isotope({ filter: filterValue });
});



// external js: isotope.pkgd.js

// init Isotope elements
// var $box = $(".isotope-box").isotope({
//   itemSelector: ".isotope-item"
// });
// $(".isotope-toolbar").on("click", "button", function () {
//   var filterValue = $(this).attr("data-type");
//   $(".isotope-toolbar-btn").removeClass("active");
//   $(this).addClass("active");
//   if (filterValue !== "*") {
//     filterValue = '[data-type="' + filterValue + '"]';
//   }
//   console.log(filterValue);
//   $box.isotope({ filter: filterValue });
// });

// change is-checked class on buttons
