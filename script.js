const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(){

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

}
setInterval(showSlide,4000);<script src="script.js"></script>let cart=0;

const buttons=document.querySelectorAll(".add-cart");

buttons.forEach(btn=>{

btn.onclick=function(){

cart++;

document.getElementById("cart-count").innerText=cart;

this.innerText="✅ اضافه شد";

setTimeout(()=>{

this.innerText="افزودن به سبد خرید";

},1000);

}

});<div class="menu-btn" id="menu-btn">

☰

</div>const menuBtn=document.getElementById("menu-btn");

const nav=document.getElementById("nav");

menuBtn.onclick=function(){

nav.classList.toggle("active");

}const favs=document.querySelectorAll(".favorite");

favs.forEach(item=>{

item.onclick=function(){

this.classList.toggle("active");

if(this.classList.contains("active")){

this.innerHTML="♥";

}else{

this.innerHTML="♡";

}

}

});const search=document.getElementById("search");

search.onkeyup=function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}