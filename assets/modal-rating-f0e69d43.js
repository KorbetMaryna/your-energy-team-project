import{a as v}from"./vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(n){const i=n.getAttribute("href").split("/").pop();e===i||e===""&&i==="index.html"?n.classList.add("header-nav-current"):n.classList.remove("header-nav-current")})});(()=>{const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{const t=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!t),e.classList.toggle("is-open")};s.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();var c=document.getElementById("myModal"),y=document.getElementById("openModalBtn"),h=document.getElementsByClassName("close")[0];y.onclick=function(){c.style.display="flex"};h.onclick=function(){c.style.display="none"};window.onclick=function(e){e.target==c&&(c.style.display="none")};const b="https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2";fetch(b).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log(e),E(e)}).catch(e=>{console.error("There was a problem with the fetch operation:",e)});function E(e){const s=document.getElementById("exerciseDetails");let n=null;e.gifUrl?n=`<div class="gif-wrapper">
    <img class="gif" src="${e.gifUrl}" alt="Exercise GIF">
    <div class="gif-overlay"></div>
    </div>`:n=`<div class="gif-wrapper">
    <img class="gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
    <div class="gif-overlay"></div>
    </div>`;const i=`<p class='card-title'>${e.name}</p>`,t=w(Math.round(e.rating)),r=`<div class='rating-container'>
  <span class="rating">${e.rating%1>=.5?Math.ceil(e.rating)+".0":Math.floor(e.rating)+".0"}</span>
  ${t}
  </div>`,o=`<div class="details-container">
  <div class="details-wrapper">
  <p class="details-title">Target</p>
  <p class="details-info">${e.target}</p>
  </div>
  <div class="details-wrapper">
  <p class="details-title">Body Part</p>
  <p class="details-info">${e.bodyPart}</p>
  </div>
  <div class="details-wrapper">
  <p class="details-title">Equipment</p>
  <p class="details-info">${e.equipment}</p>
  </div>
  <div class="details-wrapper">
  <p class="details-title">Popular</p>
  <p class="details-info">${e.popularity}</p>
  </div>
  </div>
  <div class="details-wrapper calories">
  <p class="details-title">Burned Calories</p>
  <p class="details-info">${e.burnedCalories}</p>
  </div>`,f=`<div class="description">${e.description}</div>`;s.innerHTML=n+i+r+o+f}function w(e){const s=`<div class="star-wrapper"><svg class="star-icon colored-star" aria-label="logo icon">
  <use href="./img/icons.svg#icon-star"></use>
  </svg></div>`,n=`<svg class="star-icon " aria-label="logo icon">
  <use href="./img/icons.svg#icon-star"></use>
  </svg>`;let i="",t=Math.floor(e),r=e-t;for(let o=0;o<5;o++)o<t||o===t&&r>=.5?i+=s:i+=n;return`${i}`}const d=document.querySelector(".rating-backdrop"),g=document.querySelector(".rating__close-btn"),L=document.querySelector(".rating__submit-btn"),m=document.querySelectorAll(".rating__input"),u=document.querySelector(".rating__input-email"),p=document.querySelector(".rating__input-comment");let a=null;const l=()=>{d.classList.remove("modal-open"),g.removeEventListener("click",l)},k=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),x=async()=>{const e=a==null?void 0:a.id,s=parseInt(e==null?void 0:e.replace("star",""),10);if(!s||isNaN(s)){console.log("Please add a rate");return}if(k(u.value)){console.log("Please enter your email");return}if(p.value.length<=3){console.log("Please leave your review");return}const i="https://your-energy.b.goit.study/api/exercises/EXERCISE_ID/rating";try{(await v.patch(i,{rate:s,email:u.value,review:p.value})).status===200?iziToast.success({title:"Success",message:"Rating submitted successfully!"}):iziToast.error({title:"Error",message:"Failed to submit rating"})}catch{iziToast.error({title:"Error",message:"Failed to submit rating"})}l()},S=()=>{const e=Array.from(m);e.forEach((s,n)=>{const i=s.nextElementSibling.querySelector(".rating__icon-star");s===a||a&&n<e.indexOf(a)?(i.style.fill="var(--stars-color-activ)",i.style.opacity=1):(i.style.fill="var(--second-color-light-theme)",i.style.opacity=.2)})};m.forEach(e=>{e.addEventListener("click",function(s){a=s.target,S()})});d.addEventListener("click",function(e){e.target===d&&!e.target.closest(".rating__close-btn")&&!e.target.closest(".rating__submit-btn")&&l()});g.addEventListener("click",l);document.addEventListener("keydown",e=>{e.key==="Escape"&&l()});L.addEventListener("click",x);
//# sourceMappingURL=modal-rating-f0e69d43.js.map
