import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

function textureglitch(){

    const tl = gsap.timeline();

    tl.from("#ptexture",{duration:.005, alpha: 0})
      .to("#ptexture",{duration:.25, x: -10, y:-10, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})", alpha: 0})
      .to("#ptexture",{duration:.25, alpha:1})
      .to("#ptexture",{duration:.25, x: 0, y:0, alpha:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})
      .to("#ptexture",{duration:.25, alpha:1})
      .to("#ptexture",{duration:.25, x: 20, y:20 , alpha:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})
      .to("#ptexture",{duration:.25, alpha:1})
      .to("#ptexture",{duration:.25, x: 0, y:0 , alpha:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})
      .to("#ptexture",{duration:.25, alpha:1});

    return tl;
}

function lettersgrow(){

    const tl = gsap.timeline();

    tl.from("#thu",{duration:.05, alpha: 0})
      .fromTo("#thu",{duration:5, transformOrigin: "50% 50%", scaleX:3, scaleY:3, x: 0, y:0}, {scaleX:2, scaleY:2})
      .to("#thu",{duration:.25, alpha:0})
      .from("#nhst",{duration:.05, alpha: 0})
      .fromTo("#nhst",{duration:5, transformOrigin: "50% 50%", scaleX:3, scaleY:3}, {scaleX:2, scaleY:2})
      .to("#nhst",{duration:.25, alpha:0})
      .from("#rhes",{duration:.05, alpha: 0})
      .fromTo("#rhes",{duration:5, transformOrigin: "50% 50%", scaleX:3, scaleY:3}, {scaleX:2, scaleY:2})
      .to("#rhes",{duration:.05, alpha:0},"same")
      .from("#letters",{duration:.05, alpha: 0},"same")
      .fromTo("#letters",{duration:5, transformOrigin: "50% 50%", scaleX:3, scaleY:3, x: 0, y:0}, {scaleX:1, scaleY:1});

    return tl;
}

function backgroundtexture(){

  const tl = gsap.timeline();

  tl.to("#p7",{duration:1, x:20, y:-20, transformOrigin: "50% 50%"},"same")
    .to("#p8",{duration:1, x:-40, y:40, transformOrigin: "50% 50%"},"same")
    .to("#p2",{duration:1, x:40, y:-40, transformOrigin: "50% 50%"},"same")
    .to("#p3",{duration:1, x:-20, y:20, transformOrigin: "50% 50%"},"same")
    .to("#p7",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p8",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p2",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2")
    .to("#p3",{duration:1, x:0, y:0, transformOrigin: "50% 50%"},"same2");

  return tl;
}

// function lettersgrow(){

//     const tl = gsap.timeline();

//     tl.fromTo(".set1",{duration:.5, transformOrigin: "50% 50%", scaleX:0, scaleY:0}, {scaleX:.25, scaleY:.25})
//       .to(".set1",{duration:.75, transformOrigin: "50% 50%", scaleX:1, scaleY:1, ease: "none"},"+=70%")
//       .fromTo(".set2",{duration:.5, transformOrigin: "50% 50%", scaleX:0, scaleY:0}, {scaleX:.25, scaleY:.25},"-=30%")
//       .to(".set2",{duration:.75, transformOrigin: "50% 50%", scaleX:1, scaleY:1, ease: "none"},"+=70%")
//       .fromTo(".set3",{duration:.5, transformOrigin: "50% 50%", scaleX:0, scaleY:0}, {scaleX:.25, scaleY:.25},"-=30%")
//       .to(".set3",{duration:.75, transformOrigin: "50% 50%", scaleX:1, scaleY:1, ease: "none"},"+=70%")
//       .fromTo(".set4",{duration:.5, transformOrigin: "50% 50%", scaleX:0, scaleY:0}, {scaleX:.25, scaleY:.25},"-=30%")
//       .to(".set4",{duration:.75, transformOrigin: "50% 50%", scaleX:1, scaleY:1, ease: "none"},"+=70%")
//       .fromTo(".set5",{duration:.5, transformOrigin: "50% 50%", scaleX:0, scaleY:0}, {scaleX:.25, scaleY:.25},"-=30%")
//       .to(".set5",{duration:.75, transformOrigin: "50% 50%", scaleX:1, scaleY:1, ease: "none"},"+=70%")
//       .fromTo(".set6",{duration:.5, transformOrigin: "50% 50%", scaleX:0, scaleY:0}, {scaleX:.25, scaleY:.25},"-=30%")
//       .to(".set6",{duration:.75, transformOrigin: "50% 50%", scaleX:1, scaleY:1, ease: "none"},"+=50%");

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
      .add(lettersgrow(), "same")
      .add(backgroundtexture(),"same")
      .add(texturetextoffscreen())
      .add(textcomein(),"+=50%");


GSDevTools.create();