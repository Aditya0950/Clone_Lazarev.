let slider = document.querySelector("#Loader");

setTimeout(function () {
  HoverBox.style.bottom = "2.5%";
  setTimeout(function () {
    HoverBox.style.right = "10.5%";
  }, 1000)
}, 7500)

setTimeout(function () {
  slider.style.top = "-100%";
}, 6500)

let page1Container = document.querySelector("#Page1 #Page1Container");

setTimeout(function () {
  page1Container.style.top = "0%";
}, 8000)

let container = document.querySelector("#Container");
let cursor = document.querySelector("#Cursor");

container.addEventListener("mousemove", function (details) {
  cursor.style.left = details.x + "px";
  cursor.style.top = details.y + "px";
});

let h1Pen = document.querySelector("#Page1Container span svg");

setTimeout(function () {
  h1Pen.style.transform = "rotate(0deg) scale(1)";
}, 8700)

h1Pen.addEventListener("mouseover", function () {
  h1Pen.style.transform = "rotate(-30deg) scale(0.85)";
});

h1Pen.addEventListener("mouseleave", function () {
  h1Pen.style.transform = "rotate(0deg) scale(1)";
});

let navbottom = document.querySelector("#NavBottom");
let navtalk = document.querySelector("#NavTalk");

navtalk.addEventListener("mouseover", function () {
  navtalk.style.width = "2.75vw";
  navtalk.style.marginLeft = "6vw";
})

navtalk.addEventListener("mouseleave", function () {
  navtalk.style.width = "9vw";
  navtalk.style.marginLeft = "0vw";
})

let page2 = document.querySelector("#Page2");

page2.addEventListener("mouseenter", function () {
  rightPart[0].style.left = "0%";

  setTimeout(function () {
    rightPart[1].style.left = "0%";
  }, 500)

  setTimeout(function () {
    rightPart[2].style.left = "0%";
  }, 700)

  setTimeout(function () {
    rightPart[3].style.left = "0%";
  }, 900)

  setTimeout(function () {
    rightPart[4].style.left = "0%";
  }, 1100)
})

let rightPart = document.querySelectorAll("#Right .Part");

rightPart.forEach(function (part) {
  part.addEventListener("mouseenter", function () {
    part.childNodes[1].style.scale = "1";
    part.childNodes[1].style.opacity = "1";
  })

  part.addEventListener("mouseleave", function () {
    part.childNodes[1].style.scale = "0";
    part.childNodes[1].style.opacity = "0";
  })

  part.addEventListener("mousemove", function (mousedets) {
    gsap.to(part.childNodes[1], {
      x: mousedets.x - part.getBoundingClientRect().x - 50,
      y: mousedets.y - part.getBoundingClientRect().y - 100,
    })
  })
})

let Page1 = document.querySelector("#Page1");
let nav = document.querySelector("nav");
let navbottomA = document.querySelectorAll("#NavBottomContainer a");

Page1.addEventListener("mouseenter", function () {
  cursor.style.display = "flex";
  nav.style.height = "7.25vw";
})

Page1.addEventListener("mouseleave", function () {
  cursor.style.display = "none";
  nav.style.height = "3.25vw";

  navbottomA.forEach(function (a) {
    a.style.display = "none";
  })
})

nav.addEventListener("mouseover", function () {
  nav.style.height = "7.25vw";
  navbottomA.forEach(function (a) {
    a.style.display = "block";
  })
})

nav.addEventListener("mouseleave", function () {
  nav.style.height = "3.25vw";
  navbottomA.forEach(function (a) {
    a.style.display = "none";
  })
})

let page3Design = document.querySelector("#Design");
let page3Watch = document.querySelector("#Design #Watch");
let page3Svg = document.querySelector("#Design svg");
let Video = document.querySelector("#Page3Container video");
let HoverBox = document.querySelector("#Container #HoverBox");

page3Design.addEventListener("mouseover", function () {
  page3Watch.style.opacity = "1";
})

page3Design.addEventListener("mouseleave", function () {
  page3Watch.style.opacity = "0";
})

page3Svg.addEventListener("click", function () {
  Video.play();
  HoverBox.style.display = "none";
  Video.style.zIndex = "999";
  Video.style.opacity = "1";
  Video.style.transform = "scaleX(1) scaleY(1)";
})

Video.addEventListener("click", function () {
  Video.pause();
  HoverBox.style.display = "flex";
  Video.style.zIndex = "0";
  Video.style.opacity = "0";
  Video.style.transform = "scaleX(0.7) scaleY(0)";
})

let Right = document.querySelector("#Container-Right");
let RightHover = document.querySelector("#Right-Hover");
let RightVideo = document.querySelector("#Right-Video video");
let RightImg = document.querySelector("#Right-Video img");

Right.addEventListener("mouseover", function () {
  RightHover.style.display = "flex";
  RightHover.style.scale = "1";
  RightHover.style.opacity = "1";
  RightVideo.play();
  RightImg.style.display = "none";
})

Right.addEventListener("mouseleave", function () {
  RightHover.style.display = "none";
  RightHover.style.scale = "0";
  RightHover.style.opacity = "0";
  RightVideo.pause();
  RightImg.style.display = "block";
})

Right.addEventListener("mousemove", function (HoverDets) {
  RightHover.style.left = HoverDets.x + "px";
  RightHover.style.top = HoverDets.y + "px";
})
