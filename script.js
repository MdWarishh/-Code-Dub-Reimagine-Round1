function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
var timeout;
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});





// loading animation 


function loadingAnimation(){
  var pageloader = document.querySelector('#pre-loader')
 
var tl = gsap.timeline();
tl
gsap.from(".loader-1",{
  width: 0,
  duration: 1,
  ease: Power4,
});
gsap.from(".loader-2",{
  width: 0,
  delay: 0.3,
  duration: 1,
  ease: Power3,
});
gsap.to(".loaderr",{
  background: "none",
  delay: 0.3,
  duration: 0.1,
  ease: Power4,
});
gsap.to(".loader-1",{
  rotate: 90,
  y: -50,
  duration: 0.3,
  delay: 2,
  ease: Power4,
});
gsap.to(".loader-2",{
  rotate: -75,
  y: 75,
  duration: 0.5,
  ease: Power3,
},
"<"
);
gsap.to(".loader",{
scale: 40,
duration: 1,
delay: 3,
ease: "power4.inOut",
});
gsap.to(".loader",{
rotate: 45,
y: 500,
x: 2000,
duration: 1,
delay: 3,
ease: "power2.inOut",
});
gsap.to(".loading-screen",{
  opacity:0,
  duration: 0,
   delay:4,
   ease: "power3.inOut",
   
});
gsap.from(".wel", 1.5, {
  opacity: 0,
  duration: 1,
  delay: 4,
  y: 50,
  stagger:{
      amount: 0.09,
  },
  ease: "power4.inOut",
}); 
gsap.to(".wel",{
  y: "100%",
  duration: 1.3,
  delay: 5,
  ease: "power4.inOut",
  opacity: 0,
})

gsap.to("#loader",{
  height: 100,
  delay: 6,
  duration: 1,
  ease: "power3.inOut",
})
 gsap.to("#green", {
  height: "0%",
  top: 0,
  delay: 5.8,
  duration: 1,
  ease: "power2.inOut",
})
gsap.to("#green",{
  height: "100%",
  // bottom: 0,
  delay: 5.7,
  duration: 1,
  ease: "power2.inOut",
})
 gsap.to("#grey", {
  height: "0%",
  top: 0,
  delay: 5.7,
  duration: 1,
  ease: "power2.inOut",
})
gsap.to("#grey",{
  height: "100%",
  delay: 6.16,
  duration: 1,
  ease: "power2.inOut",
})
 gsap.to("#white", {
  height: "0%",
  top: 0,
  delay: 6.4,
  duration: 1,
  ease: "power2.inOut",
})
gsap.to("#white",{
  height: "100%",
  delay: 6.6,
  duration: 1,
  ease: "power2.inOut",
})

var tl = gsap.timeline()
tl.to("#pre-loader",{
  opacity: 0,
  duration: 1,
  delay: 6.5,
  ease: Power3,
})
tl.from("#page1",{
  y: -5,
  opacity: 0,
  // duration: 0.2,
  ease: Power4,
})
tl.to("#pre-loader",{ 
  display: "none",
})

tl.from("#nav", {
  y: '-10',
  opacity: 0,
})
  .from(".nav", {
    y: '-10',
    opacity: 0,
    duration: 0.3,
    ease: Power4,
    stagger: .05,
  })
  // .from(".searchBox", {
  //   y: '-10',
  //   opacity: 0,
  //   duration: 0.2,
  //   ease: Power4,
    
  // })

  // .from(".rightnav h4", {
  //   y: '-10',
  //   opacity: 0,
  //   duration: 0.1,
  //   ease: Power4,
   
  // })
  .from(".panel a", {
    y: '-10',
    opacity: 0,
    duration: 0.4,
    ease: Power3,
    // stagger: .2,
  })
  .from(".section1 h1", {
    y: '-20',
    opacity: 0,
    // duration: 0.5,
    ease: Power4,
    stagger: .1,
  })
  .from(".section1 h2", {
    y: '-20',
    opacity: 0,
    // duration: 0.5,
    ease: Power4,
    // stagger: .1,
  })
  .from(".section2", {
    y: '-60',
    opacity: 0,
    // duration: 1.5,
    ease: Power4,
    // stagger: .3,
  })
}

loadingAnimation();


// loadingAnimation()


function circlechaptakaro() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);

    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    clickmousefollower(xscale, yscale);
    timeout = this.setTimeout(function () {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);

  });
};

function clickmousefollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
  })
}
clickmousefollower();
circlechaptakaro();
  
  
  
  
  
 

  
function firstpageanim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut,
  })
    .from(".logo", {
      y: '-10',
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
      stagger: .1,
    })
    .from(".searchBox", {
      y: '-10',
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
      stagger: .1,
    })

    .from(".rightnav h4", {
      y: '-10',
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
      stagger: .24,
    })
    .from(".panel a", {
      y: '-25',
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
      stagger: .19,
    })
    .from(".section1 h1", {
      x: '-25',
      opacity: 0,
      duration: 1.2,
      ease: Expo.easeInOut,
      stagger: .1,
    })
    .from(".section1 h2", {
      x: '-25',
      opacity: 0,
      duration: 1.2,
      ease: Expo.easeInOut,
      stagger: .1,
    })
    .from(".section2", {
      x: '20',
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      stagger: .3,
    })

};
// firstpageanim();
// new arrival image viewwer

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    var differ = dets.clientX - elem.getBoundingClientRect().left;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power4,
      top: diff,
      left: differ,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.9),
    });
  });
});

function circlechaptakaro() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);

    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    clickmousefollower(xscale, yscale);
    timeout = this.setTimeout(function () {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);

  });
};

function clickmousefollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
  })
}
locomotiveAnimation();
// clickmousefollower();
// circlechaptakaro();
