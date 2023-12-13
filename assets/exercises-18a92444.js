import{a as m,o as x,i as E,b as u}from"./vendor-f0888250.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(i){const s=i.getAttribute("href").split("/").pop();e===s||e===""&&s==="index.html"?i.classList.add("header-nav-current"):i.classList.remove("header-nav-current")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),s=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open")};t.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();var d=document.getElementById("myModal"),$=document.getElementsByClassName("main-modal__close")[0];$.onclick=function(){d.style.display="none"};window.onclick=function(e){e.target==d&&(d.style.display="none")};const f=document.getElementsByClassName("exercises-tiles-list");for(let e=0;e<f.length;e++)f[e].addEventListener("click",function(i){const s=i.target.closest(".exercises-category-tile-item");if(s){const a=s.dataset.id;d.style.display="flex";const n=`https://your-energy.b.goit.study/api/exercises/${a}`;m.get(n).then(r=>{if(r)return r.data}).then(r=>{S(r)}).catch(r=>{console.error("There was a problem with the Axios request:",r)})}});function S(e){const t=document.getElementById("exerciseDetails");let i=null;e.gifUrl?i=`<div class="main-modal__gif-wrapper">
      <img class="gif" src="${e.gifUrl}" alt="Exercise GIF">
      <div class="gif-overlay"></div>
      </div>`:i=`<div class="main-modal__gif-wrapper">
      <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
      <div class="main-modal__gif-overlay"></div>
      </div>`;const s=`<p class='main-modal__card-title'>${e.name}</p>`,a=k(Math.round(e.rating)),n=`<div class='main-modal__rating-container'>
    <span class="main-modal__rating">${e.rating%1>=.5?Math.ceil(e.rating)+".0":Math.floor(e.rating)+".0"}</span>
    ${a}
    </div>`,r=`<div class="main-modal__details-container">
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
    </div>`,p=`<div class="main-modal__description">${e.description}</div>`;t.innerHTML=`${i+`<div class="main-modal__content-wrapper">${s+n+r+p}</div>`}`}function k(e){const t=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star" aria-label="logo icon">
    <use href="./img/icons.svg#icon-star"></use>
    </svg></div>`,i=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon " aria-label="logo icon">
    <use href="./img/icons.svg#icon-star"></use>
    </svg></div>`;let s="",a=Math.floor(e),n=e-a;for(let r=0;r<5;r++)r<a||r===a&&n>=.5?s+=t:s+=i;return`${s}`}const g=document.querySelector(".rating-backdrop"),_=document.querySelector(".rating__close-btn"),M=document.querySelector(".rating__submit-btn"),h=document.querySelectorAll(".rating__input"),y=document.querySelector(".rating__input-email"),v=document.querySelector(".rating__input-comment");let l=null;const c=()=>{g.classList.remove("modal-open"),_.removeEventListener("click",c)},q=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),I=async()=>{const e=l==null?void 0:l.id,t=parseInt(e==null?void 0:e.replace("star",""),10);if(!t||isNaN(t)){console.log("Please add a rate");return}if(q(y.value)){console.log("Please enter your email");return}if(v.value.length<=3){console.log("Please leave your review");return}const s="https://your-energy.b.goit.study/api/exercises/EXERCISE_ID/rating";try{(await m.patch(s,{rate:t,email:y.value,review:v.value})).status===200?iziToast.success({title:"Success",message:"Rating submitted successfully!"}):iziToast.error({title:"Error",message:"Failed to submit rating"})}catch{iziToast.error({title:"Error",message:"Failed to submit rating"})}c()},T=()=>{const e=Array.from(h);e.forEach((t,i)=>{const s=t.nextElementSibling.querySelector(".rating__icon-star");t===l||l&&i<e.indexOf(l)?(s.style.fill="var(--stars-color-activ)",s.style.opacity=1):(s.style.fill="var(--second-color-light-theme)",s.style.opacity=.2)})};h.forEach(e=>{e.addEventListener("click",function(t){l=t.target,T()})});g.addEventListener("click",function(e){e.target===g&&!e.target.closest(".rating__close-btn")&&!e.target.closest(".rating__submit-btn")&&c()});_.addEventListener("click",c);document.addEventListener("keydown",e=>{e.key==="Escape"&&c()});M.addEventListener("click",I);const L="https://your-energy.b.goit.study/api/";async function B(e,t=1){const{data:i}=await m(`${L}filters?filter=${e}&page=${t}&limit=24`);return i}async function P(e,t=1){const i={bodypart:"",muscles:"",equipment:"",keyword:""},s=new URLSearchParams(x(Object.assign(i,e),E)),{data:a}=await m(`${L}exercises?${s}&page=${t}&limit=24`);return a}u.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const o={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesList:document.querySelector(".js-tiles-list")};b("Muscles",1);o.filterButtons.forEach(e=>{e.addEventListener("click",()=>{var t;b(e.innerText,1),(t=document.querySelector(".active-button"))==null||t.classList.remove("active-button"),e==null||e.classList.add("active-button")})});async function b(e,t){await B(e,t).then(i=>{console.log(i),C(i),o.headlineWrapper.classList.add("hidden"),o.headlineCategory.innerText="",o.searchForm.classList.add("hidden")}).catch(i=>{console.log(i),u.error({message:"Something went wrong :-( try again later."})})}function C({results:e}){const t=e.map(({filter:i,name:s,imgURL:a})=>`      
  <li class="exercises-filter-tile-item" data-name=${s} data-filter=${i.toLowerCase()}>
        <div class="exercises-filter-tile-gradient"></div>
        <img class="exercises-filter-tile-img" src="${a}" alt="${s}" />
        <div class="exercises-filter-tile-text-wrapper">
            <h3 class="exercises-filter-tile-headline">${w(s)}</h3>
            <p class="exercises-filter-tile-text">${i}</p>
        </div>
  </li>`).join("");o.tilesList.innerHTML=t}o.tilesList.addEventListener("click",A);function A(e){if(e.preventDefault(),e.currentTarget===e.target)return;let{name:t,filter:i}=e.target.parentNode.dataset;i==="body"&&(i="bodypart");const s={[i]:t};D(s),o.headlineWrapper.classList.remove("hidden"),o.headlineCategory.innerText=w(t),o.searchForm.classList.remove("hidden")}async function D(e,t){await P(e,t).then(i=>{console.log(i),j(i)}).catch(i=>{console.log(i),u.error({message:"Something went wrong :-( try again later."})})}function j({results:e}){const t=e.map(({rating:i,name:s,burnedCalories:a,bodyPart:n,target:r,_id:p})=>`      
        <li class="exercises-category-tile-item" data-id=${p}>
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
                <li><span>Body part</span>${n}</li>
                <li><span>Target</span>${r}</li>
            </ul>
        </li>`);if(!t.length)return u.warning({message:"Unfortunately, we don't have any exercises in this category"});o.tilesList.innerHTML=t.join("")}function w(e){return e[0].toUpperCase()+e.slice(1)}
//# sourceMappingURL=exercises-18a92444.js.map
