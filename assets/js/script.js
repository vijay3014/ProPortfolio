$(window).on("load", function(){
    $('#loader_wrapper').fadeOut('slow');
});
// Header Scroll
let nav = document.querySelector(".navbar");
$( window ).scroll(function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 
)

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

/// Year retriver
document.getElementById("year").innerHTML = (new Date().getFullYear());


// typing animation\
const options = {
    strings: ['Web Developer.', 'Tech Enthusiast.', 'Fast Learner.'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
};

const typed = new Typed('.typerjs', options);

$('#contact-form').submit((e)=>{
    e.preventDefault();
})

// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    
        
const skillSection = document.getElementById('pills-skill-tab');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;

});

}
flag=0;
window.addEventListener('scroll', () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight/2;


    if (sectionPos < screenPos && !flag) {
            showProgress();
            flag=1;
        }
    else if (!flag) {
           hideProgress();
         }
});