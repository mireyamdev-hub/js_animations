const core= document.querySelector(".core");
const slider= document.querySelector(".slider");
const logo= document.querySelector(".navbar-brand");
const menuicon= document.querySelector(".navbar-toggler-icon");
const headline= document.querySelector(".headline");

const core2 = document.querySelector(".core2");
const core3 = document.querySelector(".core3");
const core4 = document.querySelector(".core4");

const timeline = new TimelineMax();
timeline.fromTo(core, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut})
.fromTo(core, 1.2, {width: '100%'}, {width:'80%',ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"},{x:"0%", ease: Power2.easeInOut},"-=1.2")
.fromTo(logo, 0.5, {opacity:0, x:30},{opacity:1, x:0}, "-=0.5")
.fromTo(menuicon, 0.5, {opacity:0, x:30},{opacity:1, x:0}, "-=0.5")
.fromTo(headline, 0.5, {opacity:0, x:30},{opacity:1, x:0}, "-=0.5");


/*FullPage Scrolling*/
new fullpage('#fullpage',{
    autoScrolling:true,
    navigation: true,controlArrows: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const titles= section.querySelector("h1");
        console.log(destination.item);
        const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(titles, 0.5, { y: "50", opacity: 0 }, { y: "-150", opacity: 1 });
        console.log(destination.index);
        if (destination.index === 0) {
            tl.fromTo(core, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut})
            .fromTo(core, 1.2, {width: '100%'}, {width:'80%',ease: Power2.easeInOut})
            .fromTo(logo, 0.5, {opacity:0, x:30},{opacity:1, x:0}, "-=0.5")
            .fromTo(menuicon, 0.5, {opacity:0, x:30},{opacity:1, x:0}, "-=0.5");
        }else if(destination.index === 1){
            tl.fromTo(core2, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInBounce})
            .fromTo(core2, 1.2, {width: '30%'}, {width:'80%',ease: Power2.easeInOut});
        }else if(destination.index === 2){
            tl.fromTo(core3, 0.8, {height:"30%"}, {height:"80%", ease: Power3.easeInQuint})
            .fromTo(core3, 0.5, {width: '100%'}, {width:'80%',ease: Power2.easeInQuint});
        }else if(destination.index === 3){
            tl.fromTo(core4, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInElastic})
            .fromTo(core4, 1.2, {width: '100%'}, {width:'80%',ease: Power2.easeInElastic});
        }
     }
});


