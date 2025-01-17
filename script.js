function page4image() {
  var p4Img = document.querySelector(".element-section");
  var p4FixImg = document.querySelector(".page-4-image");
  var elements = document.querySelectorAll(".element");

  if(window.innerWidth <= 600) {
    p4Img.addEventListener("mouseenter", function () {
      p4FixImg.style.display = "none";
    });
  
    p4Img.addEventListener("mouseleave", function () {
      p4FixImg.style.display = "none";
    });
  }
  else {
    p4Img.addEventListener("mouseenter", function () {
      p4FixImg.style.display = "block";
    });
  
    p4Img.addEventListener("mouseleave", function () {
      p4FixImg.style.display = "none";
    });
  
    elements.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        p4FixImg.style.backgroundImage = `url(${image})`;
      });
    });

    elements.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        if (window.innerWidth > 600) {
          var image = e.getAttribute("data-image");
          p4FixImg.style.backgroundImage = `url(${image})`;
        }
      });

      e.addEventListener("mouseleave", function () {
        if (window.innerWidth > 600) {
          p4FixImg.style.backgroundImage = "";
        }
      })
    })
  }


}

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
  });
}

function loader() {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 3700);
}

function menu() {
  var fullmenu = document.querySelector(".full-menu");
  var menu = document.querySelector(".menu");
  var flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      fullmenu.style.top = 0;
      flag = 1;
    } else {
      fullmenu.style.top = "-120%";
      flag = 0;
    }
  });
}

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function p5ImgChange() {
  var text1 = document.querySelector(".h1");
  var text2 = document.querySelector(".h2");
  var text3 = document.querySelector(".h3");
  var img = document.querySelector(".changeimg");
  var bar = document.querySelector(".bar");
  var changingText = document.querySelector(".changing-text");

  function leftMargin(text) {
    text.style.marginLeft = "3.8vh";
    text.style.color = "#504a45";
  }
  function noMargin(text) {
    text.style.marginLeft = "0.8vh";
    text.style.color = "#efeae3";
  }

  if (window.innerWidth <= 600) {
    text1.addEventListener("click", function () {
      img.src = "images/page5-1.webp";
      noMargin(text1);
      leftMargin(text2);
      leftMargin(text3);
      bar.style.top = "0";
      changingText.textContent =
        "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
    });

    text2.addEventListener("click", function () {
      img.src = "images/page5-2.webp";
      noMargin(text2);
      leftMargin(text1);
      leftMargin(text3);
      bar.style.top = "5.26vh";
      changingText.textContent =
        "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
    });

    text3.addEventListener("click", function () {
      img.src = "images/page5-3.webp";
      noMargin(text3);
      leftMargin(text1);
      leftMargin(text2);
      bar.style.top = "10.52vh";

      changingText.textContent =
        "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    });
  } else {
    text1.addEventListener("click", function () {
      img.src = "images/page5-1.webp";
      noMargin(text1);
      leftMargin(text2);
      leftMargin(text3);
      bar.style.top = "0";
      changingText.textContent =
        "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
    });

    text2.addEventListener("click", function () {
      img.src = "images/page5-2.webp";
      noMargin(text2);
      leftMargin(text1);
      leftMargin(text3);
      bar.style.top = "11.4vh";
      changingText.textContent =
        "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
    });

    text3.addEventListener("click", function () {
      img.src = "images/page5-3.webp";
      noMargin(text3);
      leftMargin(text1);
      leftMargin(text2);
      bar.style.top = "22.9vh";

      changingText.textContent =
        "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    });
  }
}

// document.addEventListener("contextmenu",function(e) {
//   e.preventDefault()
// },false)

page4image();
swiper();
loader();
menu();
p5ImgChange();
locoScroll();
