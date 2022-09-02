// shrink navbar
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 80) {
    $(".primary-nav").addClass("shrink");
  } else {
    $(".primary-nav").removeClass("shrink");
  }
});

// Go to top button
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
