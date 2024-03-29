// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  }
});

// Navbar Fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Tambahkan kelas 'js-scroll-trigger' ke semua tautan scroll
document.addEventListener("DOMContentLoaded", function () {
  var scrollLinks = document.querySelectorAll(".js-scroll-trigger");

  // Fungsi untuk menangani perpindahan halaman dengan efek geser
  function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  }

  // Tambahkan event listener ke setiap tautan scroll
  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var targetId = this.getAttribute("href");
      smoothScroll(targetId);
    });
  });
});

//Submit Form
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
    });
  });
});
