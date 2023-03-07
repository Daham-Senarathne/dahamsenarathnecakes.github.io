function slider_open() {
  var slider = document.getElementById("slider");
  slider.style.right = "0";
  slider.classList.add("shadow");
}

function slider_close() {
  slider.style.right = "-50%";
  slider.classList.remove("shadow");
}

// function toContactPage() {
//   window.location = "contact.html#message";
// }

// function filter_open() {
//   var filter = document.getElementById("filter");
//   filter.style.left = "0";
//   filter.classList.add("shadow");
// }

// function filter_close() {
//   var filter = document.getElementById("filter");
//   filter.style.left = "-100%";
//   filter.classList.remove("shadow");
// }

// window.onscroll = function () {
//   var nav = document.getElementById("search");
//   if (window.pageYOffset > nav.offsetTop) {
//     nav.style.position = "fixed";
//     nav.style.top = "0";
//   } else if (window.pageYOffset <= nav.offsetTop) {
//     nav.style.position = "unset";
//     nav.style.top = "unset";
//   }
// }

// function show_password() {
//   var input = document.getElementById("password_input");
//   var icon = document.getElementById("password_icon");
//   if (input.type == "password") {
//     input.type = "text"
//     icon.classList = "bi bi-eye-fill";
//   } else {
//     input.type = "password";
//     icon.classList = "bi bi-eye-slash-fill";
//   }
// }

// function toProducts() {
//   window.location = "multiple_product.html"
// }

new Swiper("#swiper_1", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#swiper_1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: "#button_prev_1",
    nextEl: "#button_next_1"
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper("#swiper_2", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#swiper_2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: "#button_prev_2",
    nextEl: "#button_next_2"
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper("#swiper_3", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#swiper_3 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: "#button_prev_3",
    nextEl: "#button_next_3"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});