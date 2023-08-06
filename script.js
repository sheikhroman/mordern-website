const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circlecp() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

        circelMouseFollower(xscale, yscale);
        timeout = setTimeout(function () {
            document.querySelector(
              "#minicircle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
          }, 100);
      
        
    });
}

function circelMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircel").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) `;
    });
}

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration:1,
        ease:Expo.easeInOut,
    })
    .to(".boundingelem", {
        y: 0,
        duration:2,
        ease: Expo.easeInOut,
        stagger: .2,
        delay: -1,
    })
    .from("#heroFooter", {
        y: -10,
        duration: .5,
        ease: Expo.easeInOut,
        opacity: 0,
    })
}
circlecp();
circelMouseFollower();
firstPageAnim();