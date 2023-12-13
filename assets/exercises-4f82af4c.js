import{a as h,o as M,i as A,b}from"./vendor-f0888250.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(i){const s=i.getAttribute("href").split("/").pop();e===s||e===""&&s==="index.html"?i.classList.add("header-nav-current"):i.classList.remove("header-nav-current")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),s=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open")};t.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();function B(){const e=document.getElementsByClassName("exercises-tiles-list"),t=document.getElementById("myModal"),i=document.getElementsByClassName("main-modal__close")[0];let s=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];i&&(i.onclick=function(){t.style.display="none"}),window.onclick=function(n){n.target==t&&(t.style.display="none")};for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(u){const c=u.target.closest(".exercises-category-tile-item");if(c){const p=c.dataset.id;t.style.display="flex";const f=`https://your-energy.b.goit.study/api/exercises/${p}`;h.get(f).then(o=>{if(o)return o.data}).then(o=>{a(o);const d=document.getElementById("fav-btn");if(d){const v=s.some(_=>_._id===o._id);d.querySelector(".main-modal__heart-icon use").setAttribute("href",v?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),console.log("isSaved",v),d.querySelector(".main-modal__btn-text").textContent=v?"Remove from":"Add to favorites",d.addEventListener("click",function(){const _=s.some(x=>x._id===o._id);_?s=s.filter(x=>x._id!==o._id):s.push(o),localStorage.setItem("savedExercises",JSON.stringify(s)),d.querySelector(".main-modal__btn-text").textContent=_?"Add to favorites":"Remove from",d.querySelector(".main-modal__heart-icon use").setAttribute("href",_?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(o=>{console.error("There was a problem with the Axios request:",o)})}});function a(n){const m=document.getElementById("exerciseDetails");let u=null;n.gifUrl?u=`<div class="main-modal__gif-wrapper">
        <img class="gif" src="${n.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:u=`<div class="main-modal__gif-wrapper">
        <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
        <div class="main-modal__gif-overlay"></div>
        </div>`;const c=`<p class='main-modal__card-title'>${n.name}</p>`,p=r(Math.round(n.rating)),f=`<div class='main-modal__rating-container'>
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
      </div>`;m.innerHTML=`${u+`<div class="main-modal__content-wrapper">${c+f+o+d+v}</div>`}`}function r(n){const m=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star" aria-label="logo icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`,u=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon " aria-label="logo icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;let c="",p=Math.floor(n),f=n-p;for(let o=0;o<5;o++)o<p||o===p&&f>=.5?c+=m:c+=u;return`${c}`}}window.onload=function(){document.querySelector(".exercises-section .exercises-container")&&B()};const L=document.querySelector(".rating-backdrop"),S=document.querySelector(".rating__close-btn"),P=document.querySelector(".rating__submit-btn"),$=document.querySelectorAll(".rating__input"),E=document.querySelector(".rating__input-email"),w=document.querySelector(".rating__input-comment");let g=null;const y=()=>{L.classList.remove("modal-open"),S.removeEventListener("click",y)},T=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),C=async()=>{const e=g==null?void 0:g.id,t=parseInt(e==null?void 0:e.replace("star",""),10);if(!t||isNaN(t)){console.log("Please add a rate");return}if(T(E.value)){console.log("Please enter your email");return}if(w.value.length<=3){console.log("Please leave your review");return}const s="https://your-energy.b.goit.study/api/exercises/EXERCISE_ID/rating";try{(await h.patch(s,{rate:t,email:E.value,review:w.value})).status===200?iziToast.success({title:"Success",message:"Rating submitted successfully!"}):iziToast.error({title:"Error",message:"Failed to submit rating"})}catch{iziToast.error({title:"Error",message:"Failed to submit rating"})}y()},O=()=>{const e=Array.from($);e.forEach((t,i)=>{const s=t.nextElementSibling.querySelector(".rating__icon-star");t===g||g&&i<e.indexOf(g)?(s.style.fill="var(--stars-color-activ)",s.style.opacity=1):(s.style.fill="var(--second-color-light-theme)",s.style.opacity=.2)})};$.forEach(e=>{e.addEventListener("click",function(t){g=t.target,O()})});L.addEventListener("click",function(e){e.target===L&&!e.target.closest(".rating__close-btn")&&!e.target.closest(".rating__submit-btn")&&y()});S.addEventListener("click",y);document.addEventListener("keydown",e=>{e.key==="Escape"&&y()});P.addEventListener("click",C);const k="https://your-energy.b.goit.study/api/";async function R(e,t=1){const{data:i}=await h(`${k}filters?filter=${e}&page=${t}&limit=24`);return i}async function D(e,t=1){const i={bodypart:"",muscles:"",equipment:"",keyword:""},s=new URLSearchParams(M(Object.assign(i,e),A)),{data:a}=await h(`${k}exercises?${s}&page=${t}&limit=24`);return a}b.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const l={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesList:document.querySelector(".js-tiles-list")};q("Muscles",1);l.filterButtons.forEach(e=>{e.addEventListener("click",()=>{var t;q(e.innerText,1),(t=document.querySelector(".active-button"))==null||t.classList.remove("active-button"),e==null||e.classList.add("active-button")})});async function q(e,t){await R(e,t).then(i=>{console.log(i),j(i),l.headlineWrapper.classList.add("hidden"),l.headlineCategory.innerText="",l.searchForm.classList.add("hidden")}).catch(i=>{console.log(i),b.error({message:"Something went wrong :-( try again later."})})}function j({results:e}){const t=e.map(({filter:i,name:s,imgURL:a})=>`      
  <li class="exercises-filter-tile-item" data-name=${s} data-filter=${i.toLowerCase()}>
        <div class="exercises-filter-tile-gradient"></div>
        <img class="exercises-filter-tile-img" src="${a}" alt="${s}" />
        <div class="exercises-filter-tile-text-wrapper">
            <h3 class="exercises-filter-tile-headline">${I(s)}</h3>
            <p class="exercises-filter-tile-text">${i}</p>
        </div>
  </li>`).join("");l.tilesList.innerHTML=t}l.tilesList.addEventListener("click",F);function F(e){if(e.preventDefault(),e.currentTarget===e.target)return;let{name:t,filter:i}=e.target.parentNode.dataset;i==="body"&&(i="bodypart");const s={[i]:t};N(s),l.headlineWrapper.classList.remove("hidden"),l.headlineCategory.innerText=I(t),l.searchForm.classList.remove("hidden")}async function N(e,t){await D(e,t).then(i=>{console.log(i),U(i)}).catch(i=>{console.log(i),b.error({message:"Something went wrong :-( try again later."})})}function U({results:e}){const t=e.map(({rating:i,name:s,burnedCalories:a,bodyPart:r,target:n,_id:m})=>`      
        <li class="exercises-category-tile-item" data-id=${m}>
            <div>
                <span>WORKOUT</span>
                <span>${i}</span>
                <button>Start</button>
            </div>
            <div>
                <h3>${s}</h3>
            </div>
            <ul>
                <li><span>Burned calories</span>${a}</li>
                <li><span>Body part</span>${r}</li>
                <li><span>Target</span>${n}</li>
            </ul>
        </li>`);if(!t.length)return b.warning({message:"Unfortunately, we don't have any exercises in this category"});l.tilesList.innerHTML=t.join("")}function I(e){return e[0].toUpperCase()+e.slice(1)}
//# sourceMappingURL=exercises-4f82af4c.js.map
