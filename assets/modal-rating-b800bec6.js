import{a as _}from"./vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(n){const i=n.getAttribute("href").split("/").pop();e===i||e===""&&i==="index.html"?n.classList.add("header-nav-current"):n.classList.remove("header-nav-current")})});(()=>{const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{const t=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!t),e.classList.toggle("is-open")};s.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();var c=document.getElementById("myModal"),v=document.getElementById("openModalBtn"),y=document.getElementsByClassName("main-modal__close")[0];v.onclick=function(){c.style.display="flex"};y.onclick=function(){c.style.display="none"};window.onclick=function(e){e.target==c&&(c.style.display="none")};const h="https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a3";fetch(h).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log(e),b(e)}).catch(e=>{console.error("There was a problem with the fetch operation:",e)});function b(e){const s=document.getElementById("exerciseDetails");let n=null;e.gifUrl?n=`<div class="main-modal__gif-wrapper">
    <img class="gif" src="${e.gifUrl}" alt="Exercise GIF">
    <div class="gif-overlay"></div>
    </div>`:n=`<div class="main-modal__gif-wrapper">
    <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
    <div class="main-modal__gif-overlay"></div>
    </div>`;const i=`<p class='main-modal__card-title'>${e.name}</p>`,t=E(Math.round(e.rating)),a=`<div class='main-modal__rating-container'>
  <span class="main-modal__rating">${e.rating%1>=.5?Math.ceil(e.rating)+".0":Math.floor(e.rating)+".0"}</span>
  ${t}
  </div>`,o=`<div class="main-modal__details-container">
  <div class="main-modal__details-wrapper">
  <p class="main-modal__details-title">Target</p>
  <p class="main-modal__details-info">${e.target}</p>
  </div>
  <div class="main-modal__details-wrapper">
  <p class="main-modal__details-title">Body Part</p>
  <p class="main-modal__details-info">${e.bodyPart}</p>
  </div>
  <div class="main-modal__details-wrapper">
  <p class="main-modal__details-title">Equipment</p>
  <p class="main-modal__details-info">${e.equipment}</p>
  </div>
  <div class="main-modal__details-wrapper">
  <p class="main-modal__details-title">Popular</p>
  <p class="main-modal__details-info">${e.popularity}</p>
  </div>
  </div>
  <div class="main-modal__details-wrapper calories">
  <p class="main-modal__details-title">Burned Calories</p>
  <p class="main-modal__details-info">${e.burnedCalories}</p>
  </div>`,f=`<div class="main-modal__description">${e.description}</div>`;s.innerHTML=`${n+`<div class="main-modal__content-wrapper">${i+a+o+f}</div>`}`}function E(e){const s=`<div class="star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star" aria-label="logo icon">
  <use href="./img/icons.svg#icon-star"></use>
  </svg></div>`,n=`<div class="star-wrapper"><svg class="main-modal__star-icon " aria-label="logo icon">
  <use href="./img/icons.svg#icon-star"></use>
  </svg></div>`;let i="",t=Math.floor(e),a=e-t;for(let o=0;o<5;o++)o<t||o===t&&a>=.5?i+=s:i+=n;return`${i}`}const d=document.querySelector(".rating-backdrop"),p=document.querySelector(".rating__close-btn"),w=document.querySelector(".rating__submit-btn"),g=document.querySelectorAll(".rating__input"),m=document.querySelector(".rating__input-email"),u=document.querySelector(".rating__input-comment");let r=null;const l=()=>{d.classList.remove("modal-open"),p.removeEventListener("click",l)},L=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),k=async()=>{const e=r==null?void 0:r.id,s=parseInt(e==null?void 0:e.replace("star",""),10);if(!s||isNaN(s)){console.log("Please add a rate");return}if(L(m.value)){console.log("Please enter your email");return}if(u.value.length<=3){console.log("Please leave your review");return}const i="https://your-energy.b.goit.study/api/exercises/EXERCISE_ID/rating";try{(await _.patch(i,{rate:s,email:m.value,review:u.value})).status===200?iziToast.success({title:"Success",message:"Rating submitted successfully!"}):iziToast.error({title:"Error",message:"Failed to submit rating"})}catch{iziToast.error({title:"Error",message:"Failed to submit rating"})}l()},x=()=>{const e=Array.from(g);e.forEach((s,n)=>{const i=s.nextElementSibling.querySelector(".rating__icon-star");s===r||r&&n<e.indexOf(r)?(i.style.fill="var(--stars-color-activ)",i.style.opacity=1):(i.style.fill="var(--second-color-light-theme)",i.style.opacity=.2)})};g.forEach(e=>{e.addEventListener("click",function(s){r=s.target,x()})});d.addEventListener("click",function(e){e.target===d&&!e.target.closest(".rating__close-btn")&&!e.target.closest(".rating__submit-btn")&&l()});p.addEventListener("click",l);document.addEventListener("keydown",e=>{e.key==="Escape"&&l()});w.addEventListener("click",k);
//# sourceMappingURL=modal-rating-b800bec6.js.map
