import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

function textureglitch(){

    const tl = gsap.timeline();

    tl.from("#ptexture",{duration:1, alpha: 0})
    tl.to("#p1",{duration:.5, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p2",{duration:.5, x:40, transformOrigin: "50% 50%"},"same")
    .to("#p3",{duration:.5, x:-40, transformOrigin: "50% 50%"},"same")
    .to("#p4",{duration:.5, x:-20, transformOrigin: "50% 50%"},"same")
    .to("#p5",{duration:.5, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p6",{duration:.5, x:-40, transformOrigin: "50% 50%"},"same")
    .to("#p8",{duration:.5, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p1",{duration:.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p2",{duration:.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p3",{duration:.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p4",{duration:.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p5",{duration:.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p6",{duration:.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p8",{duration:.5, x:0, y:0, transformOrigin: "50% 50%"},"same2");

    return tl;
}

// function backgroundtexture(){

//   const tl = gsap.timeline();

//   tl.to("#p1",{duration:10, x:20, y:-20, transformOrigin: "50% 50%"},"same")
//     .to("#p2",{duration:10, x:-40, y:40, transformOrigin: "50% 50%"},"same")
//     .to("#p3",{duration:10, x:40, y:-40, transformOrigin: "50% 50%"},"same")
//     .to("#p4",{duration:10, x:-20, y:20, transformOrigin: "50% 50%"},"same")
//     .to("#p5",{duration:10, x:20, y:-20, transformOrigin: "50% 50%"},"same")
//     .to("#p6",{duration:10, x:-40, y:40, transformOrigin: "50% 50%"},"same")
//     .to("#p8",{duration:10, x:20, y:-20, transformOrigin: "50% 50%"},"same")
//     .to("#p1",{duration:10, x:0, y:0, transformOrigin: "50% 50%"},"same2")
//     .to("#p2",{duration:10, x:0, y:0, transformOrigin: "50% 50%"},"same2")
//     .to("#p3",{duration:10, x:0, y:0, transformOrigin: "50% 50%"},"same2")
//     .to("#p4",{duration:10, x:0, y:0, transformOrigin: "50% 50%"},"same2")
//     .to("#p5",{duration:10, x:0, y:0, transformOrigin: "50% 50%"},"same2")
//     .to("#p6",{duration:10, x:0, y:0, transformOrigin: "50% 50%"},"same2")
//     .to("#p8",{duration:10, x:0, y:0, transformOrigin: "50% 50%"},"same2");

//   return tl;
// }


// function zoomedin(){

//   const tl = gsap.timeline();

//   tl.from("#t_2", { duration:5, transformOrigin: "50% 50%", y: -2000, x:-1000, scale: 0},"same1")
//     .from("#e_2", { duration:5, transformOrigin: "50% 50%", y: -2000, x:-1000, scale: 0},"same1")
//     .from("#u_2", { duration:5, transformOrigin: "50% 50%", y: 2000, x:1000, scale: 0},"same1")
//     .from("#ss_3", { duration:5, transformOrigin: "50% 50%", y: -2000, x:1000, scale: 0},"same1")
//     .to("#set1", { duration: 0.5 ,alpha:0})
//     .from("#n_2", { duration:5, transformOrigin: "50% 50%", y: 500, x:500, scale: 0},"same2")
//     .from("#ss_2", { duration:5, transformOrigin: "50% 50%", y: 500, x:-500, scale: 0},"same2")
//     .to("#set2", { duration: 0.5 ,alpha:0})
//     .from("#s_2", { duration:5, transformOrigin: "50% 50%", y: 700, scale: 0},"same3")
//     .from("#ee_2", { duration:5, transformOrigin: "50% 50%", x:1000, scale: 0},"same3")
//     .to("#set3", { duration: 0.5 ,alpha:0})
//     .from("#r_2", { duration:5, transformOrigin: "50% 50%", y: 700, scale: 0},"same4")
//     .from("#h_2", { duration:5, transformOrigin: "50% 50%", x:1000, scale: 0},"same4")
//     .to("#set4", { duration: 0.5 ,alpha:0});

//   return tl;
// }

function backgroundtexture(){

  const tl = gsap.timeline();

  tl.to("#p1",{duration:5.5, x:20, y:-20, transformOrigin: "50% 50%"},"same")
    .to("#p2",{duration:5.5, x:-40, y:40, transformOrigin: "50% 50%"},"same")
    .to("#p3",{duration:5.5, x:40, y:-40, transformOrigin: "50% 50%"},"same")
    .to("#p4",{duration:5.5, x:-20, y:20, transformOrigin: "50% 50%"},"same")
    .to("#p5",{duration:5.5, x:20, y:-20, transformOrigin: "50% 50%"},"same")
    .to("#p6",{duration:5.5, x:-40, y:40, transformOrigin: "50% 50%"},"same")
    .to("#p8",{duration:5.5, x:20, y:-20, transformOrigin: "50% 50%"},"same")
    .to("#p1",{duration:5.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p2",{duration:5.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p3",{duration:5.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p4",{duration:5.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p5",{duration:5.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p6",{duration:5.5, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p8",{duration:5.5, x:0, y:0, transformOrigin: "50% 50%"},"same2");

  return tl;
}

function zoomedin(){

  const tl = gsap.timeline();

  tl.from("#letters", { duration:0.5, alpha:0})
    .fromTo("#letters", { duration:10, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: 1100, y: -1300}, {duration: 4, scaleY: 3, scaleX: 3, x: 500, y: -400})
    .fromTo("#letters", { duration:10, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: 0, y: 0}, {duration:4, scaleY: 3, scaleX: 3, x: -900, y: 300})
    .fromTo("#letters", { duration:10, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: -400, y: -800}, {duration:4, scaleY: 3, scaleX: 3, x: 400, y: 800})
    .to("#letters", { duration: 0.5, alpha: 0},"same")
    .to("#ptexture", { duration: 0.5 ,alpha:0}, "same");

  return tl;
}



function textcomein(){

    const tl = gsap.timeline();

    tl.from("#title",{duration:.75, transformOrigin: "50% 50%", scaleY:0, scaleX: 0, x: 0, y:0, ease: "none"})
      .to("#the", {duration:1, x: -106, y: -13, ease: "none"},"same4")
      .to("#huntress", {duration:1, x: 43, y: -13, ease: "none"},"same4")
      .to("#sofia", {duration:1, x: 4, y: 14, ease: "none"},"same4")
      .to("#samatar", {duration:1, x: 4, y: 14, ease: "none"},"same4")
      .to("#title", {duration: .5, transformOrigin: "50% 50%", x: 10, y: -10})
      .to("#title", {duration: .05, alpha:0})
      .to("#title", {duration: .05, alpha:1})
      .to("#title", {duration: .5, transformOrigin: "50% 50%", x: -10, y: 10})
      .to("#title", {duration: .05, alpha:0})
      .to("#title", {duration: .05, alpha:1})
      .to("#title", {duration: .5, transformOrigin: "50% 50%", x: -20, y: -20})
      .to("#title", {duration: .05, alpha:0})
      .to("#title", {duration: .05, alpha:1})
      .to("#title", {duration: .5, transformOrigin: "50% 50%", x: 0, y: 0});

    return tl;
}



mainTL.add(textureglitch())
      .add(zoomedin(),"same")
      .add(backgroundtexture(),"same")
      .add(textcomein());


GSDevTools.create();

//.add(lettersgrow(), "same")

// function lettersgrow(){

//     const tl = gsap.timeline();

//     tl.from("#r", {duration:.25, alpha: 0})
//       .to("#r", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#r", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#r", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#ss", {duration:.25, alpha: 0})
//       .to("#ss", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#ss", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#ss", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#e", {duration:.25, alpha: 0})
//       .to("#e", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#e", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#e", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#t", {duration:.25, alpha: 0})
//       .to("#t", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#t", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#t", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#u", {duration:.25, alpha: 0})
//       .to("#u", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#u", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#u", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#n", {duration:.25, alpha: 0})
//       .to("#n", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#n", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#n", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#h", {duration:.25, alpha: 0})
//       .to("#h", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#h", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#h", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#hh", {duration:.25, alpha: 0})
//       .to("#hh", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#hh", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#hh", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#s", {duration:.25, alpha: 0})
//       .to("#s", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#s", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#s", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#tt", {duration:.25, alpha: 0})
//       .to("#tt", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#tt", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#tt", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%")
//       .from("#ee", {duration:.25, alpha: 0})
//       .to("#ee", {duration:1, transformOrigin: "50%, 50%", scaleX: .25, scaleY: .25})
//       .to("#ee", {duration:1, transformOrigin: "50%, 50%", scaleX: .5, scaleY: .5},"+=70%")
//       .to("#ee", {duration:1, transformOrigin: "50%, 50%", scaleX: 1, scaleY: 1},"+=70%");

//     return tl;
// }