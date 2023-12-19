let a = document.getElementById("change-bg");
let img= document.getElementById("img")
let imgBg=document.getElementById("imgBg")
let imgBg1=document.getElementById("imgBg-1")
let imgBg2=document.getElementById("imgBg-2")
let imgBg3=document.getElementById("imgBg-3")
let imgBg4=document.getElementById("imgBg-4")


//  for logo img
let imgelogo=document.getElementById("imge-change")
let imgBg6=document.getElementById("imgBg-6")

// for texts to be changes there 

let lasth1=document.getElementById("last-h1")
let lastp1=document.getElementById("last-p1")
let lastp2=document.getElementById("last-p2")
let lastp3=document.getElementById("last-p3")
let lastp4=document.getElementById("last-p4")
//  for circle text 
let mainp=document.getElementById("main-p")
let mainh=document.getElementById("main-h1")
let mainp1=document.getElementById("main-p1")

window.addEventListener("scroll", (e) => {
  // Adjust the values according to when you want the background color to change
  if (window.scrollY <= 600) {
    a.style.backgroundColor = "#6211a7";
    img.style.backgroundColor = "#6211a7";
    imgBg.style.backgroundColor = "#aeadb0";
    imgelogo.setAttribute("src","Assets/world-communication-awards-for-best-digital-experience.png")
    mainp.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000"></p>`
    mainh.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000"> 25M + Downloads</h4>`
    mainp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">on App Store and Google Play Store</p>`
    imgelogo.style.visibility="visible"
    mainh.style.fontSize="30px"
    mainp1.style.marginLeft=""
    lasth1.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">ABC 123</h4>`
    lastp4.innerHTML=`<p style="margin-top: 45px;" id="last-p4" data-aos="flip-up" data-aos-duration="1000"> View Case Study&nbsp; &nbsp; &nbsp; &nbsp; <i class="bi bi-arrow-right"></i> </p>`
    lastp4.style.color="#ffff"
  }  
  // For second seen 
  else if (window.scrollY <= 1200) {
    a.style.backgroundColor = "#4724c3";
    img.style.backgroundColor = "#4724c3";
    imgBg1.style.backgroundColor = "#1c0360";
 
    mainp.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000"> The Next Big</p>`
    mainp.style.fontSize="14px"
    lasth1.innerHTML="<h4 >ABC 234</h4>"
lastp4.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Coming Soon</p>`
lastp4.style.color="#593cb5"
    mainh.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">BlockChain</h4>`
    mainh.style.fontSize="43px"
    mainp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Revolution</p>`
    mainp1.style.marginLeft="110px"
    imgelogo.setAttribute("src","Assets/world-communication-awards-for-best-digital-experience.png")
    imgelogo.style.visibility="hidden"
    lastp3.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000"></p>`
 
  }
     // For Third Seen  
  else if (window.scrollY <= 1800) {
    a.style.backgroundColor = "#0e103a";
    img.style.backgroundColor = "#0e103a";
    imgBg2.style.backgroundColor = "#141546";
    mainp.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Powered by advance</p>`
    mainh.innerHTML=`<img style="width: 200px; margin-left:"23px"; margin-top:"-56px";" data-aos="flip-up" data-aos-duration="1000"  src="Assets/nasa-mobile-app.png" alt="">`
    mainp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">algorithms</p>`
    imgelogo.setAttribute("src","Assets/world-communication-awards-for-best-digital-experience.png")
    imgelogo.style.visibility="hidden"
    mainp.style.fontSize="14px"
    mainh.style.fontSize="43px"
    lasth1.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">ABC 345</h4>`
    mainp1.style.marginLeft="110px"
    lastp3.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">In The World</p>`
    
  } 
  // For Fourth Seen
  else if (window.scrollY <= 2400) {
    a.style.backgroundColor = "#111c2f";
    img.style.backgroundColor = "#111c2f";
    imgBg3.style.backgroundColor = "#0d121a";
    mainp.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000"> Redefining</p>`
    mainh.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">UX Strategy</h4>`
    mainp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000"> and UI design</p>`
    imgelogo.setAttribute("src","Assets/world-communication-awards-for-best-digital-experience.png")
    imgelogo.style.visibility="hidden"
    mainp.style.fontSize="14px"
    mainh.style.fontSize="43px"
    lasth1.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">ABC 456</h4>`
    mainp1.style.marginLeft="110px"
    lastp3.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">In The World</p>`
    lastp4.innerHTML=`<p style="margin-top: 45px;"  data-aos="zoom-in" data-aos-duration="1000" id="last-p4"> View Case Study&nbsp; &nbsp; &nbsp; &nbsp; <i class="bi bi-arrow-right"></i> </p>`
    lastp4.style.color="#fffff"
  }
  // fifth seen
  
  else if (window.scrollY <= 3000) {
    a.style.backgroundColor = "#0f408c";
    img.style.backgroundColor = "#0f408c";
    imgBg4.style.backgroundColor = "#29bccc";
    mainp.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Text Headline</p>`
    mainh.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">Text Headline</h4>`
    lasth1.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">ABC 576</h4>`
    mainp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Footer headline</p>`
    imgelogo.setAttribute("src","Assets/world-communication-awards-for-best-digital-experience.png")
    imgelogo.style.visibility="hidden"
    mainp.style.fontSize="14px"
    mainh.style.fontSize="40px"
    mainp1.style.marginLeft="110px"
    lastp3.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">In The World</p>`
    lastp4.innerHTML=` <p style="margin-top: 45px;" data-aos="flip-up" data-aos-duration="1000" id="last-p4"> View Case Study&nbsp; &nbsp; &nbsp; &nbsp; <i class="bi bi-arrow-right"></i> </p>`
    lastp4.style.color="#fffff"
  } 
  //  For sixth seen
  else if (window.scrollY <= 3800) {
    a.style.backgroundColor = "#022682";
    img.style.backgroundColor = "#022682";
    mainp.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Developing ERP Solution</p>`
    mainh.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">Text Headline</h4>`
    mainp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000"> in furniture industry</p>`
    imgelogo.setAttribute("src","Assets/world-communication-awards-for-best-digital-experience.png")
    imgelogo.style.visibility="hidden"
    mainp.style.fontSize="14px"
    mainh.style.fontSize="40px"
    mainp1.style.marginLeft="110px"
    lasth1.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">ABC 678</h4>`
    lastp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Best since 2017</p>`
    lastp2.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">We offer wide range of </p>`
    lastp3.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">web development and app development</p>`
  }
  //  For seventh seen 
  else if (window.scrollY <= 4600) {
    a.style.backgroundColor = "#017c49";
    img.style.backgroundColor = "#017c49";
    imgBg6.style.backgroundColor = "#01ac63";
     mainp.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Biggest Classifieds</p>`
    mainh.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">East Asia</h4>`
    mainp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000"> Countries</p>`
    lastp1.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">We are the best</p>`
    lastp2.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">web development company </p>`
    lastp3.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">in the world</p>`
    lastp4.innerHTML=`<p data-aos="flip-up" data-aos-duration="1000">Coming Soon</p>`
    lasth1.innerHTML=`<h4 data-aos="flip-up" data-aos-duration="1000">ABC 23478</h4>`
    imgelogo.style.visibility="visible"
    imgelogo.setAttribute("src","Assets/mobile-app-of-the-year-by-entrepreneur.png")
    mainp.style.fontSize="14px"
    mainh.style.fontSize="43px"
    mainp1.style.marginLeft="110px"

  } else {
    console.log("Kuch to Gadbad hai daya ")
  }
});


  // Scroll animation using GSAP and ScrollTrigger
   // Scroll animation using GSAP and ScrollTrigger
     // Scroll animation using GSAP and ScrollTrigger
  const opaqueRing = document.getElementById('Opaque_Ring');

  gsap.to(opaqueRing, {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
    },
    strokeDasharray: () => {
      const dashArrayValue = 80 + window.scrollY / 10; // Adjust the division factor as needed
      return `${dashArrayValue}, 1000`;
    },
    onUpdate: () => {
      // Ensure the stroke-dasharray doesn't go below a certain value
      const dashArrayValue = Math.max(80 + window.scrollY / 10, 80);
      opaqueRing.setAttribute('stroke-dasharray', `${dashArrayValue}, 1000`);
    }
  });