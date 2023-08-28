


    function time() {
        
        var a = 0;
    setInterval(() => {

        a = a+ Math.floor(Math.random() * 10)
        if (a<100) {
          document.querySelector("#loader h1").innerHTML= a + "%";


        } else {
            a= 100;
            document.querySelector("#loader h1").innerHTML= 100+ "%";
        }
    }, 90);
    
}

var tl = gsap.timeline()

tl.to("#loader h1",{
    onStart: time(),
})

tl.to("#loader",{
    top: "-100vh",
    duration : 1,
    delay:1.8,

})
tl.from("#page1 h1",{
    x:-20,
    duration:0.2,
    opacity:0,
    stagger:0.2,
})
tl.from(".menu h3",{
    x: 30,
    opacity:0,
    duration:0.1,
    delay:0,
    stagger:0.2
})

 
gsap.to(".section h1",{
transform : "translateX(-56%)",
fontWeight: "300",
color:"white",
scrollTrigger:{
    trigger:"#page1",
    scroller:"body",
    // markers:true,
    start:"top 0%",
    end: "top -250%",
    scrub:3,
    pin:true,
  
}
})
gsap.to("#page1 video",{
transform : "translateY(-148%)",
duration:2,
scrollTrigger:{
    trigger:"#page1",
    scroller:"body",
    // markers:true,
    start:"top -1%",
    end: "top -300%",
    scrub:2,
    pin:true, 
}
})

var tl2 = gsap.timeline()

tl2.from(".box1 h1 , .box1 p", {
    x : -2000,
    stagger:1.5,
    duration:3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start: "top 10%",
        end: "top 15%",
        scrub:5,
    }
})
tl2.from(".box2 h1 ", {
    x:700,
    stagger:1.5,
    duration:3,
    delay:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start: "top 10%",
        end: "top 15%",
        scrub:5,
    }
})


// MOUSE Function./

var crsr = document.querySelector("#cursur")
console.log(crsr)

document.addEventListener("mousemove",(e)=>{
    crsr.style.top = e.y+ "px";
    crsr.style.left = e.x + "px";
})


// HAMBURG MENU/

var menu = document.querySelector(".menu")
var icon = document.querySelector("nav i")

icon.addEventListener("click",()=>{
    if (menu.style.left === "-41%") {
        menu.style.left = "0%"
        icon.classList.remove("ri-menu-5-line")
        icon.classList.add("ri-menu-4-line")
    } else {
        menu.style.left = "-41%"
        icon.classList.remove("ri-menu-4-line")
        icon.classList.add("ri-menu-5-line")
       
    }
})