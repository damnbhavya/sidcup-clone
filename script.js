var crsr = document.querySelector("#cursor");
var blr = document.querySelector("#cursor-blur");

let speed = 0.1;
let crsrX = 0, crsrY = 0;
let mouseX = 0, mouseY = 0;
let blrX = 0, blrY = 0;

document.addEventListener("mousemove", function (dets) {
    mouseX = dets.x;
    mouseY = dets.y;
});

function animate() {
    crsrX += (mouseX - crsrX) * speed;
    crsrY += (mouseY - crsrY) * speed;
    crsr.style.left = (crsrX - 10) + "px";
    crsr.style.top = (crsrY - 10) + "px";

    blrX += (mouseX - blrX) * speed;
    blrY += (mouseY - blrY) * speed;
    blr.style.left = (blrX - 250) + "px";
    blr.style.top = (blrY - 250) + "px";

    requestAnimationFrame(animate);
}
animate();

var liall = document.querySelectorAll("#nav img, #nav li, #page1 #arrow, .overlay, .dash, #section1>img, #socials i, #section2 li, #section3 li, #section4 h4, #lastline li")
console.log(liall);
liall.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid rgba(255, 255, 255, 0.6)";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "none";
        crsr.style.backgroundColor = "#91B508";
    })
})
var scrollButton = document.getElementById("arrow");
var pagetwo = document.getElementById("page2");
scrollButton.addEventListener("click", function () {
    pagetwo.scrollIntoView({
        behavior: "smooth"
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        scrub: 1,
        start: "top -25%",
        end: "top -75%"
    }
})

gsap.from("#about img, #aboutus", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from(".card, #cards>img", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 80%",
        end: "top 75%",
        scrub: 1
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    duration: 3,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    duration: 3,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y: -50,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})