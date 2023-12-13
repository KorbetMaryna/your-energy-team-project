import{a as _,o as O,i as A,b}from"./vendor-1e9366a1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(s){const i=s.getAttribute("href").split("/").pop();e===i||e===""&&i==="index.html"?s.classList.add("header-nav-current"):s.classList.remove("header-nav-current")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open")};t.addEventListener("click",i),s.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();function P(){const e=document.getElementsByClassName("exercises-tiles-list"),t=document.getElementById("myModal"),s=document.getElementsByClassName("main-modal__close")[0];let i=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];s&&(s.onclick=function(){t.style.display="none"}),window.onclick=function(n){n.target==t&&(t.style.display="none")};for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(u){const l=u.target.closest(".exercises-category-tile-item");if(l){const p=l.dataset.id;t.style.display="flex";const f=`https://your-energy.b.goit.study/api/exercises/${p}`;_.get(f).then(o=>{if(o)return o.data}).then(o=>{a(o);const d=document.getElementById("fav-btn");if(d){const v=i.some(y=>y._id===o._id);d.querySelector(".main-modal__heart-icon use").setAttribute("href",v?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),console.log("isSaved",v),d.querySelector(".main-modal__btn-text").textContent=v?"Remove from":"Add to favorites",d.addEventListener("click",function(){const y=i.some(x=>x._id===o._id);y?i=i.filter(x=>x._id!==o._id):i.push(o),localStorage.setItem("savedExercises",JSON.stringify(i)),d.querySelector(".main-modal__btn-text").textContent=y?"Add to favorites":"Remove from",d.querySelector(".main-modal__heart-icon use").setAttribute("href",y?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(o=>{console.error("There was a problem with the Axios request:",o)})}});function a(n){const m=document.getElementById("exerciseDetails");let u=null;n.gifUrl?u=`<div class="main-modal__gif-wrapper">
        <img class="gif" src="${n.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:u=`<div class="main-modal__gif-wrapper">
        <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
        <div class="main-modal__gif-overlay"></div>
        </div>`;const l=`<p class='main-modal__card-title'>${n.name}</p>`,p=r(Math.round(n.rating)),f=`<div class='main-modal__rating-container'>
      <span class="main-modal__rating">${n.rating%1>=.5?Math.ceil(n.rating)+".0":Math.floor(n.rating)+".0"}</span>
      ${p}
      </div>`,o=`<div class="main-modal__details-container">
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Target</p>
      <p class="main-modal__details-info">${n.target}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title body-part">Body Part</p>
      <p class="main-modal__details-info">${n.bodyPart}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Equipment</p>
      <p class="main-modal__details-info">${n.equipment}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Popular</p>
      <p class="main-modal__details-info">${n.popularity}</p>
      </div>
      </div>
      <div class="main-modal__details-wrapper calories">
      <p class="main-modal__details-title">Burned Calories</p>
      <p class="main-modal__details-info">${n.burnedCalories}</p>
      </div>`,d=`<div class="main-modal__description">${n.description}</div>`,v=`<div class="main-modal__btns-wrapper">
      <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
      <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
      <svg class="main-modal__heart-icon" aria-label="logo icon">
      <use href="./img/icons.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="main-modal__btn main-modal__rating-btn">
      <span class="main-modal__btn-text">Give a rating</span>
      </button>
      </div>`;m.innerHTML=`${u+`<div class="main-modal__content-wrapper">${l+f+o+d+v}</div>`}`}function r(n){const m=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star" aria-label="logo icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`,u=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon " aria-label="logo icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;let l="",p=Math.floor(n),f=n-p;for(let o=0;o<5;o++)o<p||o===p&&f>=.5?l+=m:l+=u;return`${l}`}}window.onload=function(){document.querySelector(".exercises-section .exercises-container")&&P()};const L=document.querySelector(".rating-backdrop"),w=document.querySelector(".rating__close-btn"),B=document.querySelector(".rating__submit-btn"),$=document.querySelectorAll(".rating__input"),S=document.querySelector(".rating__input-email"),E=document.querySelector(".rating__input-comment");let g=null;const h=()=>{L.classList.remove("modal-open"),w.removeEventListener("click",h)},D=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),T=async()=>{const e=g==null?void 0:g.id,t=parseInt(e==null?void 0:e.replace("star",""),10);if(!t||isNaN(t)){console.log("Please add a rate");return}if(D(S.value)){console.log("Please enter your email");return}if(E.value.length<=3){console.log("Please leave your review");return}const i="https://your-energy.b.goit.study/api/exercises/EXERCISE_ID/rating";try{(await _.patch(i,{rate:t,email:S.value,review:E.value})).status===200?iziToast.success({title:"Success",message:"Rating submitted successfully!"}):iziToast.error({title:"Error",message:"Failed to submit rating"})}catch{iziToast.error({title:"Error",message:"Failed to submit rating"})}h()},C=()=>{const e=Array.from($);e.forEach((t,s)=>{const i=t.nextElementSibling.querySelector(".rating__icon-star");t===g||g&&s<e.indexOf(g)?(i.style.fill="var(--stars-color-activ)",i.style.opacity=1):(i.style.fill="var(--second-color-light-theme)",i.style.opacity=.2)})};$.forEach(e=>{e.addEventListener("click",function(t){g=t.target,C()})});L.addEventListener("click",function(e){e.target===L&&!e.target.closest(".rating__close-btn")&&!e.target.closest(".rating__submit-btn")&&h()});w.addEventListener("click",h);document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});B.addEventListener("click",T);const q="https://your-energy.b.goit.study/api/";async function R(e,t=1){const{data:s}=await _(`${q}filters?filter=${e}&page=${t}&limit=24`);return s}async function j(e,t=1){const s={bodypart:"",muscles:"",equipment:"",keyword:""},i=new URLSearchParams(O(Object.assign(s,e),A)),{data:a}=await _(`${q}exercises?${i}&page=${t}&limit=24`);return a}b.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const c={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesList:document.querySelector(".js-tiles-list")};I("Muscles",1);c.filterButtons.forEach(e=>{e.addEventListener("click",()=>{var t;I(e.innerText,1),(t=document.querySelector(".active-button"))==null||t.classList.remove("active-button"),e==null||e.classList.add("active-button")})});async function I(e,t){await R(e,t).then(s=>{console.log(s),N(s),c.headlineWrapper.classList.add("hidden"),c.headlineCategory.innerText="",c.searchForm.classList.add("hidden")}).catch(s=>{console.log(s),b.error({message:"Something went wrong :-( try again later."})})}function N({results:e}){const t=e.map(({filter:s,name:i,imgURL:a})=>`      
  <li class="exercises-filter-tile-item" data-name=${i} data-filter=${s.toLowerCase()}>
        <div class="exercises-filter-tile-gradient"></div>
        <img class="exercises-filter-tile-img" src="${a}" alt="${i}" />
        <div class="exercises-filter-tile-text-wrapper">
            <h3 class="exercises-filter-tile-headline">${k(i)}</h3>
            <p class="exercises-filter-tile-text">${s}</p>
        </div>
  </li>`).join("");c.tilesList.innerHTML=t}c.tilesList.addEventListener("click",F);function F(e){if(e.preventDefault(),e.currentTarget===e.target)return;let{name:t,filter:s}=e.target.parentNode.dataset;s==="body"&&(s="bodypart");const i={[s]:t};U(i),c.headlineWrapper.classList.remove("hidden"),c.headlineCategory.innerText=k(t),c.searchForm.classList.remove("hidden")}async function U(e,t){await j(e,t).then(s=>{console.log(s),z(s)}).catch(s=>{console.log(s),b.error({message:"Something went wrong :-( try again later."})})}function z({results:e}){const t=e.map(({rating:s,name:i,burnedCalories:a,bodyPart:r,target:n,_id:m})=>`      
        <li class="exercises-category-tile-item" data-id=${m}>
            <div>
                <span>WORKOUT</span>
                <span>${s}</span>
                <button>Start</button>
            </div>
            <div>
                <h3>${i}</h3>
            </div>
            <ul>
                <li><span>Burned calories</span>${a}</li>
                <li><span>Body part</span>${r}</li>
                <li><span>Target</span>${n}</li>
            </ul>
        </li>`);if(!t.length)return b.warning({message:"Unfortunately, we don't have any exercises in this category"});c.tilesList.innerHTML=t.join("")}function k(e){return e[0].toUpperCase()+e.slice(1)}const Q=document.querySelector(".quote-wrapper"),H="https://your-energy.b.goit.study/api/quote";async function J(){const{data:e}=await _(H);return e}function W(){const e=new Date().toLocaleDateString(),t=K(),s=JSON.parse(t);!s||s.date!=e?X(e):M(s.quote,s.author)}function G(e,t,s){const i={quote:e,author:t,date:s};localStorage.setItem("quoteOfDay",JSON.stringify(i))}function K(){return localStorage.getItem("quoteOfDay")}async function X(e){await J().then(({quote:t,author:s})=>{M(t,s),G(t,s,e)})}function M(e,t){const s=`<p class="quote quote-text">${e}</p>
    <p class="qoute-author">${t}</p>`;Q.insertAdjacentHTML("beforeend",s)}W();
//# sourceMappingURL=main-b501662d.js.map
