const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});


/*-----------------------------------------------*/

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function changeContent(subject) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById('content-' + subject).style.display = 'flex';
}
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    var menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('open');
}

/*----------------------------------------------*/

      var a = document.getElementsByTagName("a");
      for (var i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("selected");
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" selected", "");
          }
          this.className += " selected";
        });
      }

