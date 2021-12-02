import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

function textureglitch(){

    const tl = gsap.timeline();

    tl.from(".text1",{duration:.5, alpha: 0})
      .from(".text2",{duration:.5, alpha: 0},"-=50%")
      .from(".text3",{duration:.5, alpha: 0},"-=50%")
      .from(".text4",{duration:.5, alpha: 0},"-=50%")
      .from(".text5",{duration:.5, alpha: 0},"-=50%")
      .from(".text6",{duration:.5, alpha: 0},"-=50%")
      .from(".text7",{duration:.5, alpha: 0},"-=50%")
      .from(".text8",{duration:.5, alpha: 0},"-=50%")
      .from(".text9",{duration:.5, alpha: 0},"-=50%")
      .from(".text10",{duration:.5, alpha: 0},"-=50%");

    return tl;
}

function backgroundtexture(){

  const tl = gsap.timeline();

  tl.to("#p1",{duration:11, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p2",{duration:11, x:-40, transformOrigin: "50% 50%"},"same")
    .to("#p3",{duration:11, x:40, transformOrigin: "50% 50%"},"same")
    .to("#p4",{duration:11, x:-20, transformOrigin: "50% 50%"},"same")
    .to("#p5",{duration:11, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p6",{duration:11, x:-40, transformOrigin: "50% 50%"},"same")
    .to("#p8",{duration:11, x:20, transformOrigin: "50% 50%"},"same")
    .to("#p1",{duration:11, x:0, transformOrigin: "50% 50%"},"same2")
    .to("#p2",{duration:11, x:0, transformOrigin: "50% 50%"},"same2")
    .to("#p3",{duration:11, x:0, transformOrigin: "50% 50%"},"same2")
    .to("#p4",{duration:11, x:0, transformOrigin: "50% 50%"},"same2")
    .to("#p5",{duration:11, x:0, transformOrigin: "50% 50%"},"same2")
    .to("#p6",{duration:11, x:0, transformOrigin: "50% 50%"},"same2")
    .to("#p8",{duration:11, x:0, transformOrigin: "50% 50%"},"same2");

  return tl;
}

function zoomedin(){

  const tl = gsap.timeline();

  tl.from("#letters", { duration:0.5, alpha:0})
    .fromTo("#letters", { duration:7, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: 800, y: -700, ease: "none"}, {duration: 7, scaleY: 3, scaleX: 3, x: 500, y: -300, ease: "none"})
    .fromTo("#letters", { duration:9, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: 0, y: 0, ease: "none"}, {duration:9, scaleY: 3, scaleX: 3, x: -500, y: 300, ease: "none"})
    .fromTo("#letters", { duration:6, transformOrigin: "50% 50%", scaleX: 3, scaleY: 3, x: 200, y: 500, ease: "none"}, {duration:6, scaleY: 3, scaleX: 3, x: 300, y: 700, ease: "none"})
    .to("#letters", { duration: 0.05, alpha: 0},"same")
    .to("#ptexture", { duration: 0.05 ,alpha:0}, "same");

  return tl;
}



function textcomein(){

    const tl = gsap.timeline();

    tl.from("#title",{duration: 1, transformOrigin: "50% 50%", scaleY:0, scaleX: 0, x: 0, y:0, ease: "none"})
      .to("#the", {duration:2, x: -106, y: -13, ease: "none"},"same4")
      .to("#huntress", {duration:2, x: 43, y: -13, ease: "none"},"same4")
      .to("#sofia", {duration:2, x: 4, y: 14, ease: "none"},"same4")
      .to("#samatar", {duration:2, x: 4, y: 14, ease: "none"},"same4");

    return tl;
}



mainTL.add(textureglitch())
      .add(zoomedin(),"same")
      .add(backgroundtexture(),"same")
      .add(textcomein());


GSDevTools.create();