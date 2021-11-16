import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

function textureglitch(){

    const tl = gsap.timeline();

    tl.from("#ptexture",{duration:.25, alpha: 0})
      .to("#ptexture",{duration:.25, x: -10, y:-10, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})", alpha: 0})
      .to("#ptexture",{duration:.25, alpha:1})
      .to("#ptexture",{duration:.25, x: 0, y:0, alpha:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})
      .to("#ptexture",{duration:.25, alpha:1})
      .to("#ptexture",{duration:.25, x: 20, y:-20 , alpha:0, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})
      .to("#ptexture",{duration:.25, alpha:1});

    return tl;
}

function lettersgrow(){

    const tl = gsap.timeline();

    tl.from(".set1",{duration:.25, transformOrigin: "50% 50%", scaleX:0, scaleY:0})
    .to(".set1",{duration:.5, transformOrigin: "50% 50%", scaleX:.8, scaleY:.8, ease: "none"})
    .from(".set2",{duration:.25, transformOrigin: "50% 50%", scaleX:0, scaleY:0})
    .to(".set2",{duration:.5, transformOrigin: "50% 50%", scaleX:.8, scaleY:.8, ease: "none"})
    .to(".set1",{duration:.5, transformOrigin: "50% 50%", scaleX:1, scaleY:1, ease: "none"})
    .to(".set2",{duration:.5, transformOrigin: "50% 50%", scaleX:1, scaleY:1, ease: "none"})
    .to(".set2",{duration:.5, alpha:0})
    .to(".set1",{duration:.5, alpha:0});

    return tl;
}

function textureoffscreen(){

    const tl = gsap.timeline();

    tl.to("#ptexture",{duration:.5, alpha:0});

    return tl;
}

function textcomein(){

    const tl = gsap.timeline();

    tl.from("#title",{duration:.5, transformOrigin: "50% 50%", scaleY:0, scaleX: 0, x: 0, y:0, ease: "none"})
      .to("#the", {duration:.75, x: -106, y: -13, ease: "none"},"same1")
      .to("#huntress", {duration:.75, x: 43, y: -13, ease: "none"},"same1")
      .to("#sofia", {duration:.75, x: 4, y: 14, ease: "none"},"same1")
      .to("#samatar", {duration:.75, x: 4, y: 14, ease: "none"},"same1");

    return tl;
}



mainTL.add(textureglitch())
      .add(lettersgrow())
      .add(textureoffscreen())
      .add(textcomein());


GSDevTools.create();