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

}const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}const toast=document.getElementById("toast");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

});

});const filterBtns=document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn=>{

btn.onclick=function(){

document.querySelector(".filter-btn.active")?.classList.remove("active");

this.classList.add("active");

const category=this.dataset.filter;

document.querySelectorAll(".card").forEach(card=>{

if(category==="all" || card.dataset.category===category){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

});const modal=document.getElementById("productModal");

const modalImg=document.getElementById("modalImg");

const modalTitle=document.getElementById("modalTitle");

const modalPrice=document.getElementById("modalPrice");

document.querySelectorAll(".card").forEach(card=>{

card.onclick=function(e){

if(e.target.tagName==="BUTTON") return;

modal.style.display="flex";

modalImg.src=this.querySelector("img").src;

modalTitle.innerText=this.querySelector("h3").innerText;

modalPrice.innerText=this.querySelector("p").innerText;

}

});

document.querySelector(".close").onclick=function(){

modal.style.display="none";

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

}document.querySelectorAll(".sizes button").forEach(btn=>{

btn.onclick=function(){

document.querySelectorAll(".sizes button").forEach(b=>b.style.background="#f5f5f5");

document.querySelectorAll(".sizes button").forEach(b=>b.style.color="#000");

this.style.background="#ff4f87";

this.style.color="#fff";

}

});

document.querySelectorAll(".color").forEach(c=>{

c.onclick=function(){

document.querySelectorAll(".color").forEach(x=>x.style.border="2px solid #ddd");

this.style.border="3px solid #ff4f87";

}

});const themeBtn=document.getElementById("theme-btn");

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeBtn.innerHTML="☀️";
}else{
themeBtn.innerHTML="🌙";
}

}if(localStorage.getItem("theme")=="dark"){
document.body.classList.add("dark");
themeBtn.innerHTML="☀️";
}

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML="🌙";

}

}window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

});function applyCoupon(){

const code=document.getElementById("coupon").value;

const message=document.getElementById("coupon-message");

if(code==="VESTRA20"){

message.innerHTML="🎉 کد تخفیف با موفقیت اعمال شد.";

message.style.color="green";

}else{

message.innerHTML="❌ کد تخفیف نامعتبر است.";

message.style.color="red";

}

}