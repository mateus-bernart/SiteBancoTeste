
/* Event listner par aver se o DOM carregou antes do JavaScript
 - Um dos problemas enfrentados.
*/
function goToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener("DOMContentLoaded", function() {
    // your JavaScript code here
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    
    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
  });

  function showForm() {
    var formContainer = document.getElementById("form-container");
    var backgroundBlur = document.getElementById("background-blur");
    formContainer.style.display = "block";
    backgroundBlur.style.display = "block";
  }
  
  function closeForm() {
    var formContainer = document.getElementById("form-container");
    var backgroundBlur = document.getElementById("background-blur");
    formContainer.style.display = "none";
    backgroundBlur.style.display = "none";
  }