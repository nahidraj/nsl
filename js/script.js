$(function () {
  "use strict";

  // Fixed menu js start
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // offcanvas js
  $(".header_control_bar").on("click", function () {
    $(".menu_overlay").addClass("active_menu_overlay");
    $(".menu_main_area").addClass("active_menu_main_area");
  });
  $(".close_offcanvas, .menu_overlay").on("click", function () {
    $(".menu_overlay").removeClass("active_menu_overlay");
    $(".menu_main_area").removeClass("active_menu_main_area");
  });

  // rotate start gsap js
  gsap.from(".star img", {
    rotate: "360",
    scrollTrigger: {
      trigger: ".our_projects",
      scroller: "body",
      start: "top 50%",
      scrub: 0.5,
    },
  });

  
// for sidebar menu timeline animation
const header_control_bar = document.querySelector(".header_control_bar");
const close_offcanvas = document.querySelector(".close_offcanvas");
const menu_overlay = document.querySelector(".menu_overlay");

let tl = gsap.timeline();
tl.to(".menu_overlay", {
  opacity:1,
  left:0,
  duration: 0.1,
});
tl.to(".menu_main_area", {
  left:0,
  opacity:1,
  duration: 0.3,
});
// tl.from(".info_item", {
//   opacity: 0,

// });

tl.pause();

header_control_bar.addEventListener("click", function () {
  tl.play();
});

close_offcanvas.addEventListener("click", function () {
  tl.reverse();
});
menu_overlay.addEventListener("click", function () {
  tl.reverse();
});

  // section zoom js
  TweenLite.defaultEase = Linear.easeNone;
  var ctrl = new ScrollMagic.Controller();

  // Create scenes
  $(".content").each(function (i) {
    // let target1 = $(this).find(".section_title");
    let target2 = $(this).find(".service_left");
    let target3 = $(this).find(".service_right");
    let target4 = $(this).find(".expertise_item");
    var tl = new TimelineMax();
    // tl.from(target1, 1, {
    //   opacity: 0,
    //   y: -100
    // });
    // tl.from(target2, 1, {
    //   scale: 0.5
    // }, 0);
    tl.from(
      target2,
      1,
      {
        opacity: 0,
        x: -100,
      },
      0
    );
    tl.from(
      target3,
      1,
      {
        opacity: 0,
        x: 100,
      },
      0
    );
    tl.from(
      target4,
      1,
      {
        opacity: 0,
        x: -100,
        stagger: 1,
      },
      0
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      duration: "50%",
      triggerHook: 0.5,
    })
      .setTween(tl)
      .addTo(ctrl);
    // .addIndicators({
    //   colorTrigger: "white",
    //   colorStart: "white",
    //   colorEnd: "white",
    //   indent: 40
    // });
  });

  // gsap splitting text
  gsap.registerPlugin(ScrollTrigger);
  const splitTypes = document.querySelectorAll(".reveal-type");

  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, {
      types: "chars,words",
    });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 100%",
        scrub: false,
        markers: false,
        toggleActions: "restart none none reset",
      },
      x: 80,
      opacity: 0,
      stagger: 0.02,
    });
  });

  /* Data Background js */
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // nogor life banner js
  $(".nogor_life_details_area .top_info_slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".bottom_sm_slider ul",
  });

  // nogor life banner js
  $(".bottom_sm_slider ul").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 7,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    asNavFor: ".nogor_life_details_area .top_info_slider",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".banner_text_slider")
    .slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".banner_image_slider",
      prevArrow: '<i class="fas fa-chevron-left icon left"></i>',
      nextArrow: '<i class="fas fa-chevron-right icon right"></i>',
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      const slider = $(this);
      const splitTypes = slider.find(".reveal-type");

      gsap.registerPlugin(ScrollTrigger);

      splitTypes.each((i, char) => {
        const text = new SplitType(char, {
          types: "chars,words",
        });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 100%",
            scrub: false,
            markers: false,
            toggleActions: "restart none none reset",
          },
          x: 80,
          opacity: 0,
          stagger: 0.03,
        });
      });

      // Animate other elements here (paragraph, list items, buttons, etc.)
      gsap.from(slider.find(".subtitle"), {
        duration: 0.8,
        x: 80,
        ease: "power2.out",
      });

      gsap.from(slider.find(".listing li"), {
        duration: 0.5,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(slider.find(".banner_btn .common_btn"), {
        duration: 0.7,
        delay: 0.4,
        opacity: 0,
        y: 80,
        ease: "power2.out",
      });

      gsap.from(slider.find(".play_video"), {
        duration: 0.7,
        delay: 0.7,
        opacity: 0,
        y: 80,
        ease: "power2.out",
      });
    });

  $(".banner_image_slider")
    .slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      fade: true,
      slidesToShow: 1,
      asNavFor: ".banner_text_slider",
      slidesToScroll: 1,
      prevArrow: '<i class="fas fa-chevron-left icon left"></i>',
      nextArrow: '<i class="fas fa-chevron-right icon right"></i>',
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      const slider = $(this);

      // Animate elements within the .banner_image_slider
      // Animate the .image_overlay element within .banner_image_slider
      gsap.from(slider.find(".image_overlay"), {
        duration: 2,
        opacity: 0,
        scaleY: 6, // Example scale animation
        ease: "power2.out",
      });

      gsap.from(slider.find(".banner_circle_img"), {
        duration: 2,
        rotation: -190,
        opacity: 0,
        ease: "power2.out",
      });

      // You can add more animations for other elements within this slider as needed
    });

  // Run the animation when the page is fully loaded
  $(document).ready(function () {
    // Select all elements with the class 'clients_label' and animate them
    gsap.from(".clients_label", {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.1, // Stagger the animations for a smoother effect
      ease: "power2.out",
    });
  });

  // Run the animation when the page is fully loaded
  $(document).ready(function () {
    // Select all elements with the class 'clients_label' and animate them
    gsap.from(".projects_label", {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.2, // Stagger the animations for a smoother effect
      ease: "power2.out",
    });
  });

  // Products slider js
  $(".products_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    draggable: false,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "150px",
    speed: 8000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
          speed: 5000,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          speed: 6000,
        },
      },
    ],
  });

  // clients logo slider js
  $(".clients_logo").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    draggable: false,
    autoplaySpeed: 0,
    speed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  // testimonial image slider js
  $(".image_slider").slick({
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 600,
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    arrows: true,
    centerPadding: "0",
    asNavFor: ".text_slider",
    prevArrow: '<i class="fas fa-chevron-left icon left"></i>',
    nextArrow: '<i class="fas fa-chevron-right icon right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  // testimonial text slider js
  $(".text_slider").slick({
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: ".image_slider",
    prevArrow: '<i class="fas fa-chevron-left icon left"></i>',
    nextArrow: '<i class="fas fa-chevron-right icon right"></i>',
  });

  // magnific video js
  // gallery popup js
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".vidplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });

  // cursor animation
  var e = $(".cursor");
  $(window).on("mousemove", function i(t) {
    var s = t.clientX + "px",
      n = t.clientY + "px";
    TweenMax.to(e, 0.2, {
      left: s,
      top: n,
      ease: "Power1.easeOut",
    });
  }),
    $("a, button, .zoom-cursor").on("mouseenter", function i(t) {
      TweenMax.to(e, 0.1, {
        scale: 3,
        ease: "Power1.easeOut",
      }),
        $(e).removeClass("cursor-close");
    }),
    $(".trigger-close").on("mouseenter", function i(t) {
      TweenMax.to(e, 0.1, {
        scale: 3,
        ease: "Power1.easeOut",
      }),
        $(e).addClass("cursor-close");
    }),
    $("a, button, .zoom-cursor, .trigger-close, .trigger-plus").on(
      "mouseleave",
      function i(t) {
        TweenLite.to(e, 0.1, {
          scale: 1,
          ease: "Power1.easeOut",
        }),
          $(e).removeClass("cursor-close");
      }
    );

  // gsap text animation
  gsap.config({
    trialWarn: false,
  });
  gsap.registerPlugin(ScrollTrigger, SplitText);

  function animateText(className) {
    const split = new SplitText(className, {
      type: "lines",
    });

    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          markers: false,
          scrub: 0.4,
          start: "bottom 100%",
          end: "top 50%",
        },
      });
    });
  }

  animateText(".reveal_text");
  animateText(".reveal_text_white");
  animateText(".short_p");
  // Add more classes as needed

  /* Odometer Active js */
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // // image skew
  // let proxy = {
  //     skew: 0
  //   },
  //   skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  //   clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

  // ScrollTrigger.create({
  //   onUpdate: (self) => {
  //     let skew = clamp(self.getVelocity() / -300);
  //     // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
  //     if (Math.abs(skew) > Math.abs(proxy.skew)) {
  //       proxy.skew = skew;
  //       gsap.to(proxy, {
  //         skew: 0,
  //         duration: 0.8,
  //         ease: "power3",
  //         overwrite: true,
  //         onUpdate: () => skewSetter(proxy.skew)
  //       });
  //     }
  //   }
  // });

  // image reveal
  gsap.registerPlugin(ScrollTrigger);

  let revealContainers = document.querySelectorAll(".reveal_image");

  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        // toggleActions: "restart none none reset",
      },
    });

    tl.set(container, {
      autoAlpha: 1,
    });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out,
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });

  // project details image animation
  gsap.utils.toArray(".content_image").forEach(function (container) {
    let image = container.querySelector("img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      },
    });
    tl.from(image, {
      yPercent: -60,
      ease: Power2.out,
    }).to(image, {
      yPercent: 60,
      ease: Power2.out,
    });
  });
  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", {
    transformOrigin: "right center",
    force3D: true,
  });

  // back to top js
  var btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    }
  });

  // mobilel menu js

  $(".mobile-topbar .bars i").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });

  // banner text slider
  // $(".banner_text_slider").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   fade: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: ".banner_image_slider",
  //   prevArrow: '<i class="fas fa-chevron-left icon left"></i>',
  //   nextArrow: '<i class="fas fa-chevron-right icon right"></i>',
  // }).slickAnimation();

  // $(".banner_text_slider").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 4000,
  //   fade: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: ".banner_image_slider",
  //   prevArrow: '<i class="fas fa-chevron-left icon left"></i>',
  //   nextArrow: '<i class="fas fa-chevron-right icon right"></i>'
  // }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //   // GSAP animation code
  //   gsap.registerPlugin(ScrollTrigger);
  //   const splitTypes = document.querySelectorAll('.reveal-type');

  //   splitTypes.forEach((char, i) => {
  //     const text = new SplitType(char, {
  //       types: 'chars,words'
  //     });

  //     gsap.from(text.chars, {
  //       scrollTrigger: {
  //         trigger: char,
  //         start: 'top 100%',
  //         scrub: false,
  //         markers: false,
  //         toggleActions: 'restart none none reset'
  //       },
  //       x: 80,
  //       opacity: 0,
  //       stagger: 0.06
  //     });
  //   });
  // });

  // $(".banner_text_slider").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 4000,
  //   fade: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: ".banner_image_slider",
  //   prevArrow: '<i class="fas fa-chevron-left icon left"></i>',
  //   nextArrow: '<i class="fas fa-chevron-right icon right"></i>'
  // }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //   const slider = $(this);
  //   const splitTypes = slider.find('.reveal-type');

  //   gsap.registerPlugin(ScrollTrigger);

  //   splitTypes.each((i, char) => {
  //     const text = new SplitType(char, {
  //       types: 'chars,words'
  //     });

  //     gsap.from(text.chars, {
  //       scrollTrigger: {
  //         trigger: char,
  //         start: 'top 100%',
  //         scrub: false,
  //         markers: false,
  //         toggleActions: 'restart none none reset'
  //       },
  //       x: 80,
  //       opacity: 0,
  //       stagger: 0.03
  //     });
  //   });
  // });
});
