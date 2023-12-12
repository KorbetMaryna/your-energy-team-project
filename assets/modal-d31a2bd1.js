(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(r){const s=r.getAttribute("href").split("/").pop();e===s||e===""&&s==="index.html"?r.classList.add("header-nav-current"):r.classList.remove("header-nav-current")})});(()=>{const e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),s=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),e.classList.toggle("is-open")};n.addEventListener("click",s),r.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded",!1))})})();var l=document.getElementById("myModal"),c=document.getElementById("openModalBtn"),d=document.getElementsByClassName("close")[0];c.onclick=function(){l.style.display="flex"};d.onclick=function(){l.style.display="none"};window.onclick=function(e){e.target==l&&(l.style.display="none")};const p="https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2";fetch(p).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log(e),u(e)}).catch(e=>{console.error("There was a problem with the fetch operation:",e)});function u(e){const n=document.getElementById("exerciseDetails");let r=null;e.gifUrl?r=`<div class="gif-wrapper">
    <img class="gif" src="${e.gifUrl}" alt="Exercise GIF">
    <div class="gif-overlay"></div>
    </div>`:r=`<div class="gif-wrapper">
    <img class="gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
    <div class="gif-overlay"></div>
    </div>`;const s=`<p class='card-title'>${e.name}</p>`,t=f(Math.round(e.rating)),i=`<div class='rating-container'>
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
  </div>`,a=`<div class="description">${e.description}</div>`;n.innerHTML=r+s+i+o+a}function f(e){const n=`<div class="star-wrapper"><svg class="star-icon colored-star" aria-label="logo icon">
  <use href="./img/icons.svg#icon-star"></use>
  </svg></div>`,r=`<svg class="star-icon " aria-label="logo icon">
  <use href="./img/icons.svg#icon-star"></use>
  </svg>`;let s="",t=Math.floor(e),i=e-t;for(let o=0;o<5;o++)o<t||o===t&&i>=.5?s+=n:s+=r;return`${s}`}
//# sourceMappingURL=modal-d31a2bd1.js.map
