import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

function textureglitch(){

    const tl = gsap.timeline();

    tl.from("#ptexture",{duration:.005, alpha: 0})
    tl.to("#p1",{duration:1, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p2",{duration:1, x:40, transformOrigin: "50% 50%"},"same")
    .to("#p3",{duration:1, x:-40, transformOrigin: "50% 50%"},"same")
    .to("#p4",{duration:1, x:-20, transformOrigin: "50% 50%"},"same")
    .to("#p5",{duration:1, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p6",{duration:1, x:-40, transformOrigin: "50% 50%"},"same")
    .to("#p8",{duration:1, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p1",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p2",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p3",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p4",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p5",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p6",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p8",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2");

    return tl;
}

// function lettersgrow(){

//     const tl = gsap.timeline();

//     tl.from("#thu",{duration:.05, alpha: 0})
//       .fromTo("#thu",{duration:5, transformOrigin: "50% 50%", scaleX:3, scaleY:3, x: 0, y:0}, {scaleX:2, scaleY:2})
//       .to("#thu",{duration:.25, alpha:0})
//       .from("#nhst",{duration:.05, alpha: 0})
//       .fromTo("#nhst",{duration:5, transformOrigin: "50% 50%", scaleX:3, scaleY:3}, {scaleX:2, scaleY:2})
//       .to("#nhst",{duration:.25, alpha:0})
//       .from("#rhes",{duration:.05, alpha: 0})
//       .fromTo("#rhes",{duration:5, transformOrigin: "50% 50%", scaleX:3, scaleY:3}, {scaleX:2, scaleY:2})
//       .to("#rhes",{duration:.05, alpha:0},"same")
//       .from("#letters",{duration:.05, alpha: 0},"same")
//       .fromTo("#letters",{duration:5, transformOrigin: "50% 50%", scaleX:3, scaleY:3, x: 0, y:0}, {scaleX:1, scaleY:1});

//     return tl;
// }

function backgroundtexture(){

  const tl = gsap.timeline();

  tl.to("#p1",{duration:9, x:20, y:-20, transformOrigin: "50% 50%"},"same")
    .to("#p2",{duration:9, x:-40, y:40, transformOrigin: "50% 50%"},"same")
    .to("#p3",{duration:9, x:40, y:-40, transformOrigin: "50% 50%"},"same")
    .to("#p4",{duration:9, x:-20, y:20, transformOrigin: "50% 50%"},"same")
    .to("#p5",{duration:9, x:20, y:-20, transformOrigin: "50% 50%"},"same")
    .to("#p6",{duration:9, x:-40, y:40, transformOrigin: "50% 50%"},"same")
    .to("#p8",{duration:9, x:20, y:-20, transformOrigin: "50% 50%"},"same")
    .to("#p1",{duration:9, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p2",{duration:9, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p3",{duration:9, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p4",{duration:9, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p5",{duration:9, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p6",{duration:9, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p8",{duration:9, x:0, y:0, transformOrigin: "50% 50%"},"same2");

  return tl;
}

function zoomedin(){

  const tl = gsap.timeline();

  tl.from("#letters", { duration:0.5, alpha:0})
    .fromTo("#letters", { duration:5, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: 1100, y: -1300}, {duration: 4, scaleY: 3, scaleX: 3, x: 500, y: -400})
    .fromTo("#letters", { duration:5, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: 0, y: 0}, {duration:4, scaleY: 3, scaleX: 3, x: -900, y: 300})
    .fromTo("#letters", { duration:5, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: -400, y: -800}, {duration:4, scaleY: 3, scaleX: 3, x: 400, y: 800})
    .fromTo("#letters", { duration:5, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: 400, y: 800}, {duration:4, scaleY: 1, scaleX: 1, x: 0, y: 0});

  return tl;
}

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

function texturetextoffscreen(){

    const tl = gsap.timeline();
   
    tl.to("#ptexture", {duration: .5, x:-10, y:-10, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})", alpha: 0}, "same1")
    .to("#letters", {duration: .5, x:10, y:10, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})", alpha: 0}, "same1")
    .to("#ptexture",{duration:.25, alpha:1}, "same2")
    .to("#letters",{duration:.25, alpha:1}, "same2")
    .to("#ptexture", {duration: .5, x:0, y:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})", alpha: 0}, "same3")
    .to("#letters", {duration: .5, x:0, y:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})", alpha: 0}, "same3")
    .to("#ptexture",{duration:.25, alpha:1}, "same4")
    .to("#letters",{duration:.25, alpha:1}, "same4")
    .to("#ptexture", {duration: .5, x:20, y:20, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})", alpha: 0}, "same5")
    .to("#letters", {duration: .5, x:-20, y:-20, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})", alpha: 0}, "same5")
    .to("#ptexture",{duration:.25, alpha:1}, "same6")
    .to("#letters",{duration:.25, alpha:1}, "same6")
    .to("#ptexture", {duration: .5, x:0, y:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"}, "same7")
    .to("#letters", {duration: .5, x:0, y:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"}, "same7")
    .to("#ptexture",{duration:.05, alpha:0}, "same8")
    .to("#letters",{duration:.05, alpha:0}, "same8");

    return tl;
}

function textcomein(){

    const tl = gsap.timeline();

    tl.from("#title",{duration:.75, transformOrigin: "50% 50%", scaleY:0, scaleX: 0, x: 0, y:0, ease: "none"})
      .to("#the", {duration:1, x: -106, y: -13, ease: "none"},"same4")
      .to("#huntress", {duration:1, x: 43, y: -13, ease: "none"},"same4")
      .to("#sofia", {duration:1, x: 4, y: 14, ease: "none"},"same4")
      .to("#samatar", {duration:1, x: 4, y: 14, ease: "none"},"same4");

    return tl;
}



mainTL.add(textureglitch())
      .add(zoomedin(),"same")
      //.add(lettersgrow(), "same")
      .add(backgroundtexture(),"same")
      .add(texturetextoffscreen())
      .add(textcomein(),"+=50%");


GSDevTools.create();