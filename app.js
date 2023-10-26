//Pin the first page
const tlIntro = gsap.timeline({
    scrollTrigger : {
        trigger : ".first-page",
        start : "0%",
        end : "100%",
        pin : true,
        // To let other page come on top of first page at end
        pinSpacing : false,
        // scrub : true,
    }
});

const tlFade = gsap.timeline({
    scrollTrigger : {
        trigger : ".first-page",
        start : "-1%",
        end : "100%",
        scrub : true,
    }
})
tlFade.fromTo(".first-page", {opacity : 1}, {opacity : 0});
    

//Highliht : Page 2

// --Fading in animation--

const tlH = gsap.timeline({
    scrollTrigger: {
      trigger: ".second-page",
      markers: false,
      //Add delay based on scroll. Makes animation look smoother
      scrub: true,
      start: "-50%",
      end: "50%",
    },
});
// Stagger helps to delay animation between each highlight class
  
tlH.fromTo(
    ".highlight",
    { color: "rgba(255,255,255, 0.4" },
    { color: "rgba(255,255,255, 1", stagger: 1 }
);

// --Fading out animation
  
const tlHRemove = gsap.timeline({
    scrollTrigger: {
      trigger: ".second-page",
      markers: false,
      scrub: true,
      start: "-30%",
      end: "70%",
    },
});
  
tlHRemove.to(".highlight", { color: "rgba(255,255,255, 0.4", stagger: 1 });

//Page 3 : Phone Split
const tlSplit = gsap.timeline({
    scrollTrigger: {
        trigger : ".third-page",
        start : "-30%",
        end : "3%",
        markers : false,
        scrub : true,
    },
});

tlSplit.fromTo(".large-phone", {x: "40%"}, {x: "25%"});
//Less than(<) is for executing both at the same time
tlSplit.fromTo(".small-phone", {x: "-40%"}, {x: "-25%"} , "<");
tlSplit.fromTo(".product-text-left", {x: -50, opacity:0}, {opacity:1, x:0}, "<");
tlSplit.fromTo(".product-text-right", {x: 50, opacity:0}, {opacity:1, x:0}, "<");

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger : ".third-page",
        pin : true,
        pinSpacing : false,
        start : "2%",
        end : "100%",
    },
});

//4th Page : Carousel

const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let topIndex = 2;


swatches.forEach((swatch, index) =>{
    //Grabbing the left coordinate of the slide
    const coord = slides[index].getBoundingClientRect().left;

    swatch.addEventListener("click", (e)=>{
        let swatchName = e.target.getAttribute("swatch");
        let closeUp = document.querySelector("." + swatchName);
        //Check if we are on the same swatch
        if (currentSwatch === swatchName) return;

        gsap.set(closeUp, {zIndex : topIndex});
        gsap.fromTo(closeUp, {opacity : 0}, {opacity : 1 , duration : 1});

        //Gallery 
        gsap.to(gallery, {x: -coord, duration: 1, ease: "back.out(1)"})

        //Increment zIndex
        topIndex++
        currentSwatch = swatchName
    });
});

//5th Page : Video Scroll (Here our vido is encoded with ffmepeg else it would be laggy to animate it)
const tlVideo =  gsap.timeline({
    scrollTrigger : {
        trigger : ".fifth-page",
        start: "0%",
        end: "100%",
        scrub : true,
        pin : true,
    },
});
tlVideo.fromTo(".product-video", {currentTime : 0}, {currentTime : 3, duration: 1});
tlVideo.fromTo(".product-info-container h3", {opacity : 0}, {opacity:1, stagger : 0.25, duration: 0.5}, "<");

//6th page
const tlParallax = gsap.timeline({
    scrollTrigger: {
      trigger: ".sixth-page",
      start: "-60%",
      end: "0%",
      scrub: true,
      markers : false,
    },
  });
  
  tlParallax.fromTo(".photo-description", { y: 0 }, { y: -90 });
  tlParallax.fromTo(".portrait-container", { y: 0 }, { y: -90 }, "<");
  tlParallax.fromTo(".phone-video", { y: 0 }, { y: 30 }, "<");