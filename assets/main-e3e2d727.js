import{a as E,i as y}from"./vendor-f9c1c104.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();function b(e){const t=document.querySelector(".loader-container");e&&t.classList.remove("hidden"),t.classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){b(!0);const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(i){const s=i.getAttribute("href").split("/").pop();e===s||e===""&&s==="index.html"?(i.classList.add("header-nav-current"),b(!1)):(i.classList.remove("header-nav-current"),b(!1))})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),s=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();function T(){const e=document.getElementsByClassName("exercises-tiles-category-list"),t=document.getElementById("myModal"),i=document.getElementsByClassName("main-modal__close")[0];let s=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];i&&(i.onclick=function(){t.style.display="none",localStorage.removeItem("currentExercise")}),window.onclick=function(r){r.target==t&&(t.style.display="none",localStorage.removeItem("currentExercise"))};for(let r=0;r<e.length;r+=1)e[r].addEventListener("click",function(l){const g=l.target.closest(".exercises-category-tile-button"),h=l.target.closest(".exercises-category-tile-item");if(g){const d=h.dataset.id;t.style.display="flex";const c=`https://your-energy.b.goit.study/api/exercises/${d}`;E.get(c).then(a=>{if(a)return localStorage.setItem("currentExercise",JSON.stringify(a.data)),a.data}).then(a=>{n(a);const p=document.getElementById("fav-btn");if(p){const L=s.some(_=>_._id===a._id);p.querySelector(".main-modal__heart-icon use").setAttribute("href",L?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),p.querySelector(".main-modal__btn-text").textContent=L?"Unfavorite":"Add to favorites",p.addEventListener("click",function(){const _=s.some(w=>w._id===a._id);_?s=s.filter(w=>w._id!==a._id):s.push(a),localStorage.setItem("savedExercises",JSON.stringify(s)),p.querySelector(".main-modal__btn-text").textContent=_?"Add to favorites":"Unfavorite",p.querySelector(".main-modal__heart-icon use").setAttribute("href",_?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(a=>{console.error("There was a problem with the Axios request:",a)})}});function n(r){const m=document.getElementById("exerciseDetails");let l=null;r.gifUrl?l=`<div class="main-modal__gif-wrapper">
        <img class="gif" src="${r.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:l=`<div class="main-modal__gif-wrapper">
        <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
        <div class="main-modal__gif-overlay"></div>
        </div>`;const g=`<p class='main-modal__card-title'>${r.name.charAt(0).toUpperCase()+r.name.slice(1)}</p>`,h=o(Math.round(r.rating*10)/10),d=`<div class='main-modal__rating-container'>
      <span class="main-modal__rating">${r.rating.toString().includes(".")?Math.round(r.rating*10)/10:r.rating+".0"}</span>
      ${h}
      </div>`,c=`<div class="main-modal__details-container">
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Target</p>
      <p class="main-modal__details-info">${r.target.charAt(0).toUpperCase()+r.target.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title body-part">Body Part</p>
      <p class="main-modal__details-info">${r.bodyPart.charAt(0).toUpperCase()+r.bodyPart.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Equipment</p>
      <p class="main-modal__details-info">${r.equipment.charAt(0).toUpperCase()+r.equipment.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Popular</p>
      <p class="main-modal__details-info">${r.popularity}</p>
      </div>
      </div>
      <div class="main-modal__details-wrapper main-modal__calories">
      <p class="main-modal__details-title">Burned Calories</p>
      <p class="main-modal__details-info">${r.burnedCalories}</p>
      </div>`,a=`<div class="main-modal__description">${r.description}</div>`,p=`<div class="main-modal__btns-wrapper">
      <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
      <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
      <svg class="main-modal__heart-icon" aria-label="logo icon">
      <use href="./img/icons.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="main-modal__btn main-modal__rating-btn">
      <span class="main-modal__btn-text">Give a rating</span>
      </button>
      </div>`;m.innerHTML=`${l+`<div class="main-modal__content-wrapper">${g+d+c+a+p}</div>`}`}function o(r){const m=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`,l=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;let g="",h=Math.floor(r),d=r-h;for(let c=0;c<5;c++)if(c<h)g+=m;else if(c===h&&d>0){const a=Math.round(d*100);g+=`<div class="main-modal__star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${a}%, rgba(244, 244, 244, 0.2) ${a}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${a}%, rgba(244, 244, 244, 0.2) ${a}%);"><svg class="main-modal__star-icon main-modal__colored-star" >
          <use href="./img/icons.svg#icon-star"></use>
          </svg></div>`}else g+=l;return`${g}`}}window.onload=function(){document.querySelector(".exercises-container")&&T()};y.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#myModal");e.addEventListener("click",function(t){if(t.target.closest(".main-modal__rating-btn")){const s={backdrop:document.querySelector(".rating-backdrop"),closeButton:document.querySelector(".rating__close-btn"),submitButton:document.querySelector(".rating__submit-btn"),starsContainer:document.querySelectorAll(".rating__input"),emailInput:document.querySelector(".rating__input-email"),commentInput:document.querySelector(".rating__input-comment"),ratingValue:document.querySelector(".rating__value")};let n=null,o=JSON.parse(localStorage.getItem("currentExercise"))||{};s.ratingValue.innerHTML=o.rating.toString().includes(".")?Math.round(o.rating*10)/10:o.rating+".0";const r=()=>{e.style.display="none",s.backdrop.classList.add("modal-open"),s.closeButton.addEventListener("click",m)},m=()=>{s.backdrop.classList.remove("modal-open"),s.closeButton.removeEventListener("click",m),e.style.display="flex"},l=()=>{const d=Array.from(s.starsContainer);d.forEach((c,a)=>{const p=c.nextElementSibling.querySelector(".rating__icon-star");c===n||n&&a<d.indexOf(n)?(p.style.fill="var(--stars-color-activ)",p.style.opacity=1):(p.style.fill="var(--second-color-light-theme)",p.style.opacity=.2)})},g=d=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(d),h=async d=>{d.preventDefault();const c=n==null?void 0:n.id,a=parseInt(c==null?void 0:c.replace("star",""),10);if(!a||isNaN(a)){y.show({title:"Error",message:"Please add your rating"});return}if(!g(s.emailInput.value)){y.show({title:"Error",message:"Please enter a valid email address"});return}if(s.commentInput.value.length<=3){y.show({title:"Error",message:"Please leave your comment"});return}const p=`https://your-energy.b.goit.study/api/exercises/${o._id}/rating`;try{(await E.patch(p,{rate:a,email:s.emailInput.value,review:s.commentInput.value})).status===200?y.success({title:"Success",message:"Rating submitted successfully!"}):y.error({title:"Error",message:"Failed to submit rating"})}catch{y.error({title:"Error",message:"Failed to submit rating"})}m()};s.starsContainer.forEach(d=>{d.addEventListener("click",function(c){n=c.target,l()})}),s.backdrop.addEventListener("click",function(d){d.target===s.backdrop&&!d.target.closest(".rating__close-btn")&&!d.target.closest(".rating__submit-btn")&&m()}),s.closeButton.addEventListener("click",m),s.submitButton.addEventListener("click",h),document.addEventListener("keydown",d=>{d.key==="Escape"&&m()}),r()}})});const P="https://your-energy.b.goit.study/api/";b(!0);async function O(e,t){for(const n of Object.keys(t))t[n]===""&&delete t[n];const i=new URLSearchParams(t),{data:s}=await E(`${P}${e}?${i}`);return b(!1),s}function x(e){return e[0].toUpperCase()+e.slice(1)}function F(e,t,i){return`      
<li class="exercises-filter-tile-item" data-name=${t} data-filter=${e.toLowerCase()}>
      <div class="exercises-filter-tile-gradient"></div>
      <img class="exercises-filter-tile-img" src="${i}" alt="${t}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
      <div class="exercises-filter-tile-text-wrapper">
          <h3 class="exercises-filter-tile-headline">${x(t)}</h3>
          <p class="exercises-filter-tile-text">${e}</p>
      </div>
</li>`}function D(e,t,i,s,n,o){return`      
<li class="exercises-category-tile-item" data-id=${o}>
    <div class="exercises-category-tile-top">
      <div class="exercises-category-tile-workout-wrapper">
        <span class="exercises-category-tile-badge">WORKOUT</span>
        <div class="exercises-category-tile-rating-wrapper">
          <span class="exercises-category-tile-rating">${e.toFixed(1)}</span>
          <svg
          class="exercises-category-tile-star-icon"
          width="18"
          height="18">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>
        </div>
      </div>
      <button class="exercises-category-tile-button">Start 
        <svg 
        class="exercises-category-tile-arrow-icon"
        width="36" 
        height="36">
          <use href="./img/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>
    <div class="exercises-category-tile-middle">
      <svg 
      class="exercises-category-tile-man-icon"
      width="24" 
      height="24">
        <use href="./img/icons.svg#icon-running-man"></use>
      </svg>
      <h3 class="exercises-category-tile-name">${t}</h3>
    </div>
    <ul class="exercises-category-tile-bottom">
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        ${i}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        ${x(s)}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        ${x(n)}</li>
    </ul>
</li>`}y.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const u={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let f={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};function q(e,t){e!==""?f.limit=t<768?9:12:f.limit=t<768?8:10}q(f.filter,window.innerWidth);S("filters",f);u.filterButtons.forEach(e=>{e.addEventListener("click",()=>{Object.assign(f,{bodypart:"",muscles:"",equipment:""}),f.filter=e.innerText,f.page=1,S("filters",f),document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")})});async function S(e,t){await O(e,t).then(i=>{var s;(s=i.results[0])!=null&&s.filter?(q(f.filter,window.innerWidth),U("filters",i),u.headlineCategory.innerText="",u.headlineWrapper.classList.add("visually-hidden"),u.searchForm.classList.add("visually-hidden")):(q(f.filter,window.innerWidth),H("exercises",i))}).catch(i=>{console.log(i),y.error({message:"Something went wrong :-( try again later."})})}function U(e,t){u.tilesCategoryList.innerHTML="",u.tilesCategoryList.classList.add("visually-hidden"),u.tilesFilterList.classList.remove("visually-hidden");const{page:i,totalPages:s,results:n}=t,o=n.map(({filter:r,name:m,imgURL:l})=>F(r,m,l)).join("");u.tilesFilterList.innerHTML=o,j(i,s,e)}u.tilesFilterList.addEventListener("click",N);function N(e){if(e.preventDefault(),Object.assign(f,{filter:"",bodypart:"",muscles:"",equipment:""}),e.currentTarget===e.target)return;let{name:i,filter:s}=e.target.parentNode.dataset;s==="body"&&(s="bodypart"),Object.assign(f,{[s]:i}),S("exercises",f),u.headlineWrapper.classList.remove("visually-hidden"),u.headlineCategory.innerText=x(i),u.searchForm.classList.remove("visually-hidden")}function H(e,{page:t,totalPages:i,results:s}){if(!s.length)return y.warning({message:"Unfortunately, we don't have any exercises in this category"});u.tilesFilterList.innerHTML="",u.tilesFilterList.classList.add("visually-hidden"),u.tilesCategoryList.classList.remove("visually-hidden");const n=s.map(({rating:o,name:r,burnedCalories:m,bodyPart:l,target:g,_id:h})=>D(o,r,m,l,g,h)).join("");u.tilesCategoryList.innerHTML=n,j(t,i,e)}function j(e,t,i){u.paginationList.innerHTML="",t<=6?n(1,t,e,i):e<4?(n(1,4,e,i),o(),m(t,e)):e>t-3?(r(),o(),n(t-3,t,e,i)):(r(),o(),n(e-1,e+1,e,i),o(),m(t,e));function n(l,g,h,d){for(let c=l;c<=g;c++){const a=document.createElement("span");a.classList.add("exercises-pagination-item"),a.textContent=c,c===Number(h)&&a.classList.add("exercises-pagination-item-active"),a.addEventListener("click",()=>{f.page=c,S(d,f)}),u.paginationList.appendChild(a)}}function o(){const l=document.createElement("span");l.classList.add("exercises-pagination-item"),l.textContent="...",u.paginationList.appendChild(l)}function r(){n(1,1,e,i)}function m(l,g){n(l,l,g,i)}}const R=document.querySelector(".quote-wrapper");async function W(){const e=new Date().toLocaleDateString(),t=J(),i=JSON.parse(t);if(!i||i.date!=e){let{quote:s,author:n}=await Q();I(s,n),z(s,n,e)}else I(i.quote,i.author)}function z(e,t,i){const s={quote:e,author:t,date:i};localStorage.setItem("quoteOfDay",JSON.stringify(s))}function J(){return localStorage.getItem("quoteOfDay")}async function Q(){try{const{quote:e,author:t}=await O("quote","");return{quote:e,author:t}}catch(e){B(e.message)}}function I(e,t){const i=`<p class="quote quote-text">${e}</p>
    <p class="qoute-author">${t}</p>`;R.insertAdjacentHTML("beforeend",i)}function B(e){y.error({message:`${e}`})}W();const G=document.querySelector(".footer-sub-form"),K="https://your-energy.b.goit.study/api/";G.addEventListener("submit",V);async function V(e){e.preventDefault();const t=e.target.email.value;try{const{data:i}=await E.post(`${K}subscription`,{email:t});Z(i.message)}catch(i){B(i.response.data.message)}}function Z(e){y.success({message:`${e}`})}function X(e,t=300){let i;return(...s)=>{clearTimeout(i),i=setTimeout(()=>{e.apply(this,s)},t)}}function k(e){e.classList.remove("visually-hidden")}function C(e){e.classList.add("visually-hidden")}const v={searchClearBtnEl:document.querySelector(".js-search-form--btn__clear"),searchInputEl:document.querySelector(".js-search-form--input"),searchIconEl:document.querySelector(".js-search-form--btn__search"),searchClearEl:document.querySelector(".js-search-form--btn__clear"),searchFormEl:document.querySelector(".js-search-form")},Y=X(e=>ee(e),400);v.searchClearBtnEl.addEventListener("click",te);v.searchInputEl.addEventListener("input",Y);v.searchFormEl.addEventListener("submit",se);function ee({target:e}){e!=null&&e.value.trim()?(k(v.searchClearEl),C(v.searchIconEl)):(C(v.searchClearEl),k(v.searchIconEl))}function te(){v.searchInputEl.value="",C(v.searchClearEl),k(v.searchIconEl)}function se(e){e.preventDefault()}const $=document.querySelector(".quote-and-exercises-desktop-section"),M=document.querySelector(".quote-section"),A=document.querySelector(".exercises-section");window.innerWidth>=1440?$.classList.remove("visually-hidden"):$.classList.add("visually-hidden");window.innerWidth>=1440?M.classList.add("visually-hidden"):M.classList.remove("visually-hidden");window.innerWidth>=1440?A.classList.add("visually-hidden"):A.classList.remove("visually-hidden");
//# sourceMappingURL=main-e3e2d727.js.map
