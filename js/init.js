
const discordWebhooks =
"https://discord.com/api/webhooks/1253062420214186066/GRKLGoq2WN73gxPvkcFjGujfoYEAaqHV9D__R8G_kCHVyU2GxIOxtPjmyuJVNx2c8c42";

const sendPing = async (click) => {
const sendWebhook = await $.post(discordWebhooks, {
  content: click,
});
console.log("discord", sendWebhook);
return sendWebhook;
};

jQuery(document).ready(function () {
  "use strict";
  chiako_tm_modalbox();
  chiako_tm_trigger_menu();
  progress_function();
  chiako_tm_modalbox_news();
  chiako_tm_modalbox_skills();
  chiako_tm_imgtosvg();
  chiako_tm_popup();
  chiako_tm_data_images();
  chiako_tm_page_transition();
  chiako_tm_projects();
  chiako_tm_skills();
  chiako_tm_owl_carousel();
  chiako_tm_section_top();
  chiako_tm_background_effects();
  chiako_tm_borders();
  chiako_tm_canvas_effect();
  chiako_add_ping();
  jQuery(window).load("body", function () {
    chiako_tm_my_load();
  });

  sendPing("Someone viewed Chiako.dev");
});

// Ensure the mobile menu links are clickable
jQuery(".chiako_tm_mobile_menu .menu_list a").on("click", function () {
  var href = jQuery(this).attr("href");
  if (href && href.endsWith(".pdf")) {
    window.open(href, "_blank");
  }
});


function chiako_add_ping() {
  "use strict";
  var links = jQuery(".ping-class");
  links.each(function () {
    var element = jQuery(this);
    element.on("click", function () {
      sendPing(`Someone clicked on ${element.text()} link!`);
      console.log("here");
    });
  });
}
function chiako_tm_modalbox() {
  "use strict";
  jQuery(".chiako_tm_all_wrap").prepend(
    '<div class="chiako_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"></a></div><div class="description_wrap"></div></div></div>'
  );
}
function tdProgress(container) {
  "use strict";
  container.find(".progress_inner").each(function () {
    var progress = jQuery(this);
    var pValue = parseInt(progress.data("value"), 10);
    var pColor = progress.data("color");
    var pBarWrap = progress.find(".bar");
    var pBar = progress.find(".bar_in");
    var number = progress.find(".number");
    var label = progress.find(".label");
    number.css({ right: 100 - pValue + "%" });
    setTimeout(function () {
      label.addClass("opened");
    }, 500);
    pBar.css({ width: pValue + "%", backgroundColor: pColor });
    setTimeout(function () {
      pBarWrap.addClass("open");
    });
  });
}
function resetProgress() {
  "use strict";
  $(".chiako_progress .number").css({ right: "100%" });
  $(".chiako_progress .label").removeClass("opened");
  $(".chiako_progress .bar_in").css({
    width: "0px",
    backgroundColor: "transparent",
  });
}
function progress_function(wrapper) {
  "use strict";
  var element;
  if (wrapper) {
    element = wrapper.find(".chiako_progress");
  } else {
    element = jQuery(".chiako_progress");
  }
  element.each(function () {
    var pWrap = jQuery(this);
    pWrap.find(".number").css({ right: "100%" });
    pWrap.waypoint({
      handler: function () {
        tdProgress(pWrap);
      },
      offset: "90%",
      context: document.getElementById("experience"),
    });
  });
}
function chiako_tm_trigger_menu() {
  "use strict";
  var hamburger = jQuery(".chiako_tm_topbar .trigger .hamburger");
  var mobileMenu = jQuery(".chiako_tm_mobile_menu");
  var mobileMenuList = jQuery(".chiako_tm_mobile_menu ul li a");
  hamburger.on("click", function () {
    var element = jQuery(this);
    if (element.hasClass("is-active")) {
      element.removeClass("is-active");
      mobileMenu.removeClass("opened");
    } else {
      element.addClass("is-active");
      mobileMenu.addClass("opened");
    }
    return false;
  });
  mobileMenuList.on("click", function () {
    jQuery(".chiako_tm_topbar .trigger .hamburger").removeClass("is-active");
    mobileMenu.removeClass("opened");
    return false;
  });
}
function chiako_tm_modalbox_news() {
  "use strict";
  var modalBox = jQuery(".chiako_tm_modalbox");
  var button = jQuery(
    ".chiako_tm_news .chiako_tm_full_link, .chiako_tm_news .news_list .title a, .chiako_tm_news .chiako_tm_button a"
  );
  var closePopup = modalBox.find(".close");
  button.on("click", function () {
    var element = jQuery(this);
    var parent = element.closest("li");
    var content = parent.find(".news_hidden_details").html();
    var image = parent.find(".image .main").data("img-url");
    var meta = parent.find(".meta").html();
    var title = parent.find(".title a").text();
    var date = parent.find(".date").text();
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(content);
    modalBox
      .find(".news_popup_informations")
      .prepend(
        '<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
          image +
          '"></div></div>'
      );
    modalBox
      .find(".news_popup_informations .image")
      .append('<span class="date">' + date + "</span>");
    modalBox
      .find(".news_popup_informations .image")
      .after(
        '<div class="details_news"><div class="meta">' +
          meta +
          '</div><div class="title"><h3>' +
          title +
          "</h3></div></div>"
      );
    chiako_tm_data_images();
    return false;
  });
  closePopup.on("click", function () {
    modalBox.removeClass("opened");
    modalBox.find(".description_wrap").html("");
    return false;
  });
}
function chiako_tm_modalbox_skills() {
  "use strict";
  var modalBox = jQuery(".chiako_tm_modalbox");
  var button = jQuery(".chiako_tm_skills .skills_popup");
  button.on("click", function () {
    var element = jQuery(this);
    var parent = element.closest(".inner");
    var image = parent.find(".abs_image").data("img-url");
    var details = parent.find(".hidden_content_skills").html();
    var title = parent.find(".entry").data("title");
    var category = parent.find(".entry").data("category");
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(details);
    modalBox
      .find(".popup_details")
      .prepend(
        '<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
          image +
          '"></div></div>'
      );
    modalBox
      .find(".popup_details .top_image")
      .after(
        '<div class="skills_main_title"><h3 class="title">' +
          title +
          '</h3><span class="category"><a href="#">' +
          category +
          "</a></span></div>"
      );
    chiako_tm_data_images();
    return false;
  });
}
function chiako_tm_preloader() {
  "use strict";
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  var preloader = $("#preloader");
  if (!isMobile) {
    setTimeout(function () {
      preloader.addClass("preloaded");
    }, 800);
    setTimeout(function () {
      preloader.remove();
    }, 2000);
  } else {
    preloader.remove();
  }
}
function chiako_tm_my_load() {
  "use strict";
  var speed = 500;
  setTimeout(function () {
    chiako_tm_preloader();
  }, speed);
  setTimeout(function () {
    jQuery(".chiako_tm_all_wrap").addClass("ready");
  }, speed + 2000);
}
function chiako_tm_imgtosvg() {
  "use strict";
  jQuery("img.html").each(function () {
    var jQueryimg = jQuery(this);
    var imgClass = jQueryimg.attr("class");
    var imgURL = jQueryimg.attr("src");
    jQuery.get(
      imgURL,
      function (data) {
        var jQuerysvg = jQuery(data).find("svg");
        if (typeof imgClass !== "undefined") {
          jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
        }
        jQuerysvg = jQuerysvg.removeAttr("xmlns:a");
        jQueryimg.replaceWith(jQuerysvg);
      },
      "xml"
    );
  });
}
function chiako_tm_popup() {
  "use strict";
  jQuery(".gallery_zoom").each(function () {
    jQuery(this).magnificPopup({
      delegate: "a.zoom",
      type: "image",
      gallery: { enabled: true },
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
  });
  jQuery(".popup-youtube, .popup-vimeo").each(function () {
    jQuery(this).magnificPopup({
      disableOn: 100,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
    });
  });
  jQuery(".soundcloude_link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
}
function chiako_tm_data_images() {
  "use strict";
  var data = jQuery("*[data-img-url]");
  data.each(function () {
    var element = jQuery(this);
    var url = element.data("img-url");
    element.css({ backgroundImage: "url(" + url + ")" });
  });
}
$(".animateText").textition({
  speed: 1.2,
  animation: "ease-out",
  map: { x: 200, y: 100, z: 0 },
  autoplay: true,
  interval: 4,
});
function chiako_tm_page_transition() {
  "use strict";
  var section = jQuery(".chiako_tm_section");
  var allLi = jQuery(".transition_link li");
  var button = jQuery(".transition_link a");
  var wrapper = jQuery(".chiako_tm_all_wrap");
  var enter = wrapper.data("enter");
  var exit = wrapper.data("exit");
  button.on("click", function () {
    var element = jQuery(this);
    var href = element.attr("href");
    if (element.parent().hasClass("chiako_tm_button")) {
      jQuery('.menu .transition_link a[href="' + href + '"]').trigger("click");
      return false;
    }
    resetProgress();
    var sectionID = jQuery(href);
    var parent = element.closest("li");
    if (!parent.hasClass("active")) {
      allLi.removeClass("active");
      wrapper.find(section).removeClass("animated " + enter);
      if (wrapper.hasClass("opened")) {
        wrapper.find(section).addClass("animated " + exit);
      }
      parent.addClass("active");
      wrapper.addClass("opened");
      wrapper
        .find(sectionID)
        .removeClass("animated " + exit)
        .addClass("animated " + enter);
      jQuery(section).addClass("hidden");
      jQuery(sectionID).removeClass("hidden").addClass("active");
    }
    return false;
  });
}
function chiako_tm_projects() {
  "use strict";
  jQuery(".chiako_tm_skills_animation_wrap").each(function () {
    jQuery(this)
      .on("mouseenter", function () {
        if (jQuery(this).data("title")) {
          jQuery(".chiako_tm_skills_titles").html(
            jQuery(this).data("title") +
              '<span class="work__cat">' +
              jQuery(this).data("category") +
              "</span>"
          );
          jQuery(".chiako_tm_skills_titles").addClass("visible");
        }
        jQuery(document).on("mousemove", function (e) {
          jQuery(".chiako_tm_skills_titles").css({
            left: e.clientX - 10,
            top: e.clientY + 25,
          });
        });
      })
      .on("mouseleave", function () {
        jQuery(".chiako_tm_skills_titles").removeClass("visible");
      });
  });
}
function chiako_tm_skills() {
  "use strict";
  if (jQuery().isotope) {
    var list = jQuery(".chiako_tm_skills .skills_item");
    var filter = jQuery(".chiako_tm_skills .skills_filter ul");
    if (filter.length) {
      filter.find("a").on("click", function () {
        var selector = jQuery(this).attr("data-filter");
        list.isotope({
          filter: selector,
          animationOptions: { duration: 750, easing: "linear", queue: false },
        });
        return false;
      });
      filter.find("a").on("click", function () {
        filter.find("a").removeClass("current");
        jQuery(this).addClass("current");
        return false;
      });
    }
  }
}
function chiako_tm_owl_carousel() {
  "use strict";
  var carousel = jQuery(".chiako_tm_testimonials .owl-carousel");
  carousel.owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    margin: 0,
    dots: true,
    nav: false,
    navSpeed: true,
    responsive: {
      0: { mouseDrag: false, touchDrag: true },
      1100: { mouseDrag: true, touchDrag: true },
    },
  });
  chiako_tm_imgtosvg();
}
function chiako_tm_section_top() {
  "use strict";
  var button = jQuery(
    ".chiako_tm_sidebar_menu .menu ul li a,.chiako_tm_mobile_menu .menu_list ul li a"
  );
  var section = jQuery(".chiako_tm_section");
  button.on("click", function () {
    section.animate({ scrollTop: 0 }, "slow");
    return false;
  });
}
function chiako_tm_background_effects() {
  "use strict";
  var box = jQuery(".chiako_tm_background_effects");
  var wrapper = jQuery(".chiako_tm_background_effects").data("style");
  if (wrapper === "canvas") {
    box.append('<div class="canvas_effects"></div>');
  }
  if (wrapper === "lines") {
    box.append(
      '<div class="lines"><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div>'
    );
  }
  if (wrapper === "circles") {
    box.append(
      '<div class="circles_wrapper"><ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div>'
    );
  }
  if (wrapper === "noise") {
    box.append('<div class="noise"></div>');
  }
}
function chiako_tm_borders() {
  "use strict";
  jQuery(".chiako_tm_mainpart").append(
    '<span class="left_border"></span><span class="right_border"></span><span class="top_border"></span><span class="bottom_border"></span>'
  );
}
function chiako_tm_canvas_effect() {
  "use strict";
  if (jQuery(".canvas_effects").length) {
    var maxx = document.body.clientWidth;
    var maxy = document.body.clientHeight;
    var halfx = maxx / 2;
    var halfy = maxy / 2;
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = maxx;
    canvas.height = maxy;
    var context = canvas.getContext("2d");
    var dotCount = 200;
    var dots = [];
    for (var i = 0; i < dotCount; i++) {
      dots.push(new dot());
    }
    function render() {
      context.fillStyle = "#eee";
      context.fillRect(0, 0, maxx, maxy);
      for (var i = 0; i < dotCount; i++) {
        dots[i].draw();
        dots[i].move();
      }
      requestAnimationFrame(render);
    }
    function dot() {
      this.rad_x = 2 * Math.random() * halfx + 1;
      this.rad_y = 1.2 * Math.random() * halfy + 1;
      this.alpha = Math.random() * 360 + 1;
      this.speed = Math.random() * 100 < 50 ? 1 : -1;
      this.speed *= 0.1;
      this.size = Math.random() * 5 + 1;
      this.color = Math.floor(Math.random() * 256);
    }
    dot.prototype.draw = function () {
      var dx = halfx + this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
      var dy = halfy + this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
      context.fillStyle = "#999";
      context.fillRect(dx, dy, this.size, this.size);
    };
    dot.prototype.move = function () {
      this.alpha += this.speed;
      if (Math.random() * 100 < 50) {
        this.color += 1;
      } else {
        this.color -= 1;
      }
    };
    render();
  }
}
