(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
        document.getElementById("logoF80").style.display="inline";
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      document.getElementById("logoF80").style.display="none";
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
})(jQuery); // End of use strict


function init_competences() {
    var competences = {
        angular:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/220px-Angular_full_color_logo.svg.png",
            label:"Developpement front-end"
        },
        ionic:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/2000px-Ionic_Logo.svg.png",
            label:"Progressive Web App"
          },
        java:{
          image:"http://geeko.lesoir.be/wp-content/uploads/sites/58/2016/01/java.png",
            label:"version entreprise"
        },
        agile:{
            image:"https://www.apollo-formation.com/wp-content/uploads/Agile-Scrum-Logo-Flat-270x270.png",
            label:"Méthodes de développement agiles"
        },
        python:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/1280px-Python_logo_and_wordmark.svg.png",
            label:"Développement scientifique"
        },
        visualbasic:{
          image:"https://camo.githubusercontent.com/7271a61d1ca8e8a0fbbefb6645d33da5a8c2c95c/68747470733a2f2f6b6172616e636f64652e66696c65732e776f726470726573732e636f6d2f323031352f30332f76697375616c6261736963312e706e67",
            label:"developpement application windows"
        },
        github:{
            image:"https://i2.wp.com/www.globalemancipation.ngo/wp-content/uploads/2017/09/github-logo.png?ssl=1",
            label:"Gestion du code source"
        },
        googleapi:{
          image:"http://zied.ellouze.tn/google_maps/images/google_developers_logo.png",
          label:"Google API (maps,data,contact)"
        },
        Android:{
          image:"https://miro.medium.com/max/856/1*vzu94HpfYYsEQJUJ69_pMw.jpeg",
            label:"developpement android"
        },
        keras:{
          image:"https://www.anakeyn.com/v3/wp-content/uploads/2018/09/keras-logo-2018-large-1200.png",
            label:"Inteligence artificielle"
        },
        spark:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1280px-Apache_Spark_logo.svg.png",
            label:"réseaux de neurones"
        },
        typescript:{
          image:"https://vinceops.me/content/images/2018/02/TypeScript-3.png",
            label:"Surcouche de javascript"
        },
        google_cloud:{
          image:"https://www.xda-developers.com/files/2016/04/Google-CloudPlatform_VerticalLockup.png",
            label:"Hébergement applicatif"
        },
        rest_api:{
            image:"https://accessusergroups.org/access-latino/wp-content/uploads/sites/3/2018/03/ApiRest.png",
            label:"Architecture API en mode Rest"
        },
        bootstrap:{
          image:"https://www.sodifrance.fr/blog/wp-content/uploads/2017/05/bootstrap.png",
            label:"Version 4.0"
        },
        vuejs:{
          image:"https://cdn-images-1.medium.com/max/1200/1*OrjCKmou1jT4It5so5gvOA.jpeg",
            label:"Version 2.5"
        },
        flask:{
          image:"https://mherman.org/presentations/flask-kubernetes/images/flask-logo.png",
            label:"developpement microserver pour python"
        },
        scikit:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png",
            label:"librairie Python de data science"
        },
        javascript:{
          image:"https://gocode.academy/wp-content/uploads/2018/06/javascript-logo.png",
            label:"developpement front-end"
        },
        nodejs:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2000px-Node.js_logo_2015.svg.png",
            label:"outils de développement frontend"
        },
        intellij:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/1024px-IntelliJ_IDEA_Logo.svg.png",
            label:"Environnement de développement"
        },
        networkx:{
            image:"https://d2.alternativeto.net/dist/icons/networkx_90298.png?width=128&height=128&mode=crop&upscale=false",
            label:"NetworkX : Analyse de graphe"
        },
        GoogleAnalytics:{
          image:"https://www.cookiebot.com/media/1082/googleanalytics.png?width=500&height=291.66666666666663",
            label:"Analyse & développement d'audience"
        },
        Linux:{
          image:"https://cdn.icon-icons.com/icons2/1159/PNG/256/linux_81610.png",
            label:"Développement sur Linux"
        },
        hadoop:{
          image:"https://www.lintao-dashboards.com/wp-content/uploads/2015/10/hadoop-logo-475x230.png",
            label:"Stockage massif"
        },
        langageR:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png",
            label:"Langages statistiques"
        },
        docker:{
          image:"https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png",
            label:"gestion de containers"
        },
        hive:{
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Apache_Hive_logo.svg/1200px-Apache_Hive_logo.svg.png",
            label:"sql sur hadoop"
        },

    };
    var toActivate=true;
    for(let p in competences){
        var div=document.createElement("div");
        if(competences[p].label==null)competences[p].label="";
        div.innerHTML="<img src='"+competences[p].image+"' class='logos-competences'><br><small>"+competences[p].label+"</small>";
        if(toActivate){
          toActivate=false;
          div.className="carousel-item active";
        } else
            div.className="carousel-item";

        document.getElementById("carousel_content").appendChild(div);

    }
}

var last_option=null;
function show_more(option) {
    if(option!=last_option){
        var elt=document.getElementsByName("more")[option-1];
        elt.style="height:300px;opacity: 1.0;";
        elt.src="./subpages/more_"+["conseil","data","developpement","budget"][option-1]+".html";
        last_option=option;
    } else {
        option=5;
    }

    for(var i=0;i<4;i++){
        if(i!=option-1)
            document.getElementsByName("more")[i].style="height:0px;opacity:0.0;"
    }


}


$("document").ready(()=>{
  init_competences();
});