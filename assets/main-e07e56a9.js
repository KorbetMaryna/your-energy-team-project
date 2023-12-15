import{a as E,i as h}from"./vendor-f9c1c104.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function L(e){const t=document.querySelector(".loader-container");e&&t.classList.remove("hidden"),t.classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){L(!0);const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(s){const r=s.getAttribute("href").split("/").pop();e===r||e===""&&r==="index.html"?(s.classList.add("header-nav-current"),L(!1)):(s.classList.remove("header-nav-current"),L(!1))})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=()=>{const i=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open")};t.addEventListener("click",r),s.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();function B(){const e=document.getElementsByClassName("exercises-tiles-category-list"),t=document.getElementById("myModal"),s=document.getElementsByClassName("main-modal__close")[0],r=document.querySelector("body");let i=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];s&&(s.onclick=function(){t.style.display="none",localStorage.removeItem("currentExercise"),document.body.style.overflow="auto"}),window.onclick=function(n){n.target==t&&(t.style.display="none",localStorage.removeItem("currentExercise"),document.body.style.overflow="auto")};for(let n=0;n<e.length;n+=1)e[n].addEventListener("click",function(g){const y=g.target.closest(".exercises-category-tile-button"),c=g.target.closest(".exercises-category-tile-item");if(y){const l=c.dataset.id;t.style.display="flex",r.style.overflow="hidden";const d=`https://your-energy.b.goit.study/api/exercises/${l}`;E.get(d).then(o=>{if(o)return localStorage.setItem("currentExercise",JSON.stringify(o.data)),o.data}).then(o=>{a(o);const v=document.getElementById("fav-btn");if(v){const I=i.some(b=>b._id===o._id);v.querySelector(".main-modal__heart-icon use").setAttribute("href",I?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),v.querySelector(".main-modal__btn-text").textContent=I?"Remove from favorites":"Add to favorites",v.addEventListener("click",function(){const b=i.some(w=>w._id===o._id);b?i=i.filter(w=>w._id!==o._id):i.push(o),localStorage.setItem("savedExercises",JSON.stringify(i)),v.querySelector(".main-modal__btn-text").textContent=b?"Add to favorites":"Remove from favorites",v.querySelector(".main-modal__heart-icon use").setAttribute("href",b?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(o=>{console.error("There was a problem with the Axios request:",o)})}});function a(n){const u=document.getElementById("exerciseDetails");let g=null;n.gifUrl?g=`<div class="main-modal__gif-wrapper">
        <img class="gif" src="${n.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:g=`<div class="main-modal__gif-wrapper">
        <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
        <div class="main-modal__gif-overlay"></div>
        </div>`;const y=`<p class='main-modal__card-title'>${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</p>`,c=f(Math.round(n.rating*10)/10),l=`<div class='main-modal__rating-container'>
      <span class="main-modal__rating">${n.rating.toString().includes(".")?Math.round(n.rating*10)/10:n.rating+".0"}</span>
      ${c}
      </div>`,d=`<div class="main-modal__details-container">
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Target</p>
      <p class="main-modal__details-info">${n.target.charAt(0).toUpperCase()+n.target.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title body-part">Body Part</p>
      <p class="main-modal__details-info">${n.bodyPart.charAt(0).toUpperCase()+n.bodyPart.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Equipment</p>
      <p class="main-modal__details-info">${n.equipment.charAt(0).toUpperCase()+n.equipment.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Popular</p>
      <p class="main-modal__details-info">${n.popularity}</p>
      </div>
      </div>
      <div class="main-modal__details-wrapper main-modal__calories">
      <p class="main-modal__details-title">Burned Calories</p>
      <p class="main-modal__details-info">${n.burnedCalories+"/3 min"}</p>
      </div>`,o=`<div class="main-modal__description">${n.description}</div>`,v=`<div class="main-modal__btns-wrapper">
      <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
      <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
      <svg class="main-modal__heart-icon" aria-label="logo icon">
      <use href="./img/icons.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="main-modal__btn main-modal__rating-btn">
      <span class="main-modal__btn-text">Give a rating</span>
      </button>
      </div>`;u.innerHTML=`${g+`<div class="main-modal__content-container">${`<div class="main-modal__content-wrapper">${y+l+d+o} </div> ${v}`}</div>`}`}function f(n){const u=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`,g=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;let y="",c=Math.floor(n),l=n-c;for(let d=0;d<5;d++)if(d<c)y+=u;else if(d===c&&l>0){const o=Math.round(l*100);y+=`<div class="main-modal__star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${o}%, rgba(244, 244, 244, 0.2) ${o}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${o}%, rgba(244, 244, 244, 0.2) ${o}%);"><svg class="main-modal__star-icon main-modal__colored-star" >
          <use href="./img/icons.svg#icon-star"></use>
          </svg></div>`}else y+=g;return`${y}`}}window.onload=function(){document.querySelector(".exercises-container")&&B()};h.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#myModal");e.addEventListener("click",function(t){if(t.target.closest(".main-modal__rating-btn")){const r={backdrop:document.querySelector(".rating-backdrop"),closeButton:document.querySelector(".rating__close-btn"),submitButton:document.querySelector(".rating__submit-btn"),starsContainer:document.querySelectorAll(".rating__input"),emailInput:document.querySelector(".rating__input-email"),commentInput:document.querySelector(".rating__input-comment"),ratingValue:document.querySelector(".rating__value")};let i=null,a=JSON.parse(localStorage.getItem("currentExercise"))||{};r.ratingValue.innerHTML=a.rating.toString().includes(".")?Math.round(a.rating*10)/10:a.rating+".0";const f=()=>{e.style.display="none",r.backdrop.classList.add("modal-open"),r.closeButton.addEventListener("click",n)},n=()=>{r.backdrop.classList.remove("modal-open"),r.closeButton.removeEventListener("click",n),e.style.display="flex"},u=()=>{const c=Array.from(r.starsContainer);c.forEach((l,d)=>{const o=l.nextElementSibling.querySelector(".rating__icon-star");l===i||i&&d<c.indexOf(i)?(o.style.fill="var(--stars-color-activ)",o.style.opacity=1):(o.style.fill="var(--second-color-light-theme)",o.style.opacity=.2)})},g=c=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(c),y=async c=>{c.preventDefault();const l=i==null?void 0:i.id,d=parseInt(l==null?void 0:l.replace("star",""),10);if(!d||isNaN(d)){h.show({title:"Error",message:"Please add your rating"});return}if(!g(r.emailInput.value)){h.show({title:"Error",message:"Please enter a valid email address"});return}if(r.commentInput.value.length<=3){h.show({title:"Error",message:"Please leave your comment"});return}const o=`https://your-energy.b.goit.study/api/exercises/${a._id}/rating`;try{(await E.patch(o,{rate:d,email:r.emailInput.value,review:r.commentInput.value})).status===200?h.success({title:"Success",message:"Rating submitted successfully!"}):h.error({title:"Error",message:"Failed to submit rating"})}catch{h.error({title:"Error",message:"Failed to submit rating"})}n()};r.starsContainer.forEach(c=>{c.addEventListener("click",function(l){i=l.target,u()})}),r.backdrop.addEventListener("click",function(c){c.target===r.backdrop&&!c.target.closest(".rating__close-btn")&&!c.target.closest(".rating__submit-btn")&&n()}),r.closeButton.addEventListener("click",n),r.submitButton.addEventListener("click",y),document.addEventListener("keydown",c=>{c.key==="Escape"&&n()}),f()}})});const T="https://your-energy.b.goit.study/api/";async function A(e,t){for(const i of Object.keys(t))t[i]===""&&delete t[i];const s=new URLSearchParams(t),{data:r}=await E(`${T}${e}?${s}`);return r}function x(e){return e[0].toUpperCase()+e.slice(1)}function P(e,t,s){return`      
<li class="exercises-filter-tile-item" data-name=${t} data-filter=${e.toLowerCase()}>
      <div class="exercises-filter-tile-gradient"></div>
      <img class="exercises-filter-tile-img" src="${s}" alt="${t}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
      <div class="exercises-filter-tile-text-wrapper">
          <h3 class="exercises-filter-tile-headline">${x(t)}</h3>
          <p class="exercises-filter-tile-text">${e}</p>
      </div>
</li>`}function F(e,t,s,r,i,a){return`      
<li class="exercises-category-tile-item" data-id=${a}>
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
        ${s}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        ${x(r)}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        ${x(i)}</li>
    </ul>
</li>`}h.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const m={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let p={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};function q(e,t){e!==""?p.limit=t<768?9:12:p.limit=t<768?8:10}q(p.filter,window.innerWidth);S("filters",p);m.filterButtons.forEach(e=>{e.addEventListener("click",()=>{Object.assign(p,{bodypart:"",muscles:"",equipment:""}),p.filter=e.innerText,p.page=1,S("filters",p),document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")})});async function S(e,t){L(!0),await A(e,t).then(s=>{var r;(r=s.results[0])!=null&&r.filter?(q(p.filter,window.innerWidth),D("filters",s),m.headlineCategory.innerText="",m.headlineWrapper.classList.add("visually-hidden"),m.searchForm.classList.add("visually-hidden")):(q(p.filter,window.innerWidth),U("exercises",s))}).catch(s=>{console.log(s),h.error({message:"Something went wrong :-( try again later."})}).finally(L(!1))}function D(e,t){m.tilesCategoryList.innerHTML="",m.tilesCategoryList.classList.add("visually-hidden"),m.tilesFilterList.classList.remove("visually-hidden");const{page:s,totalPages:r,results:i}=t,a=i.map(({filter:f,name:n,imgURL:u})=>P(f,n,u)).join("");m.tilesFilterList.innerHTML=a,O(s,r,e)}var M;(M=m.tilesFilterList)==null||M.addEventListener("click",N);function N(e){if(e.preventDefault(),Object.assign(p,{filter:"",bodypart:"",muscles:"",equipment:""}),e.currentTarget===e.target)return;let{name:s,filter:r}=e.target.parentNode.dataset;r==="body"&&(r="bodypart"),Object.assign(p,{[r]:s}),S("exercises",p),m.headlineWrapper.classList.remove("visually-hidden"),m.headlineCategory.innerText=x(s),m.searchForm.classList.remove("visually-hidden")}function U(e,{page:t,totalPages:s,results:r}){if(!r.length)return h.warning({message:"Unfortunately, we don't have any exercises in this category"});m.tilesFilterList.innerHTML="",m.tilesFilterList.classList.add("visually-hidden"),m.tilesCategoryList.classList.remove("visually-hidden");const i=r.map(({rating:a,name:f,burnedCalories:n,bodyPart:u,target:g,_id:y})=>F(a,f,n,u,g,y)).join("");m.tilesCategoryList.innerHTML=i,O(t,s,e)}function O(e,t,s){m.paginationList.innerHTML="",t<=6?i(1,t,e,s):e<4?(i(1,4,e,s),a(),n(t,e)):e>t-3?(f(),a(),i(t-3,t,e,s)):(f(),a(),i(e-1,e+1,e,s),a(),n(t,e));function i(u,g,y,c){for(let l=u;l<=g;l++){const d=document.createElement("span");d.classList.add("exercises-pagination-item"),d.textContent=l,l===Number(y)&&d.classList.add("exercises-pagination-item-active"),d.addEventListener("click",()=>{p.page=l,S(c,p)}),m.paginationList.appendChild(d)}}function a(){const u=document.createElement("span");u.classList.add("exercises-pagination-item"),u.textContent="...",m.paginationList.appendChild(u)}function f(){i(1,1,e,s)}function n(u,g){i(u,u,g,s)}}const R=document.querySelector(".quote-wrapper");async function H(){const e=new Date().toLocaleDateString(),t=z(),s=JSON.parse(t);if(!s||s.date!=e){let{quote:r,author:i}=await J();k(r,i),W(r,i,e)}else k(s.quote,s.author)}function W(e,t,s){const r={quote:e,author:t,date:s};localStorage.setItem("quoteOfDay",JSON.stringify(r))}function z(){return localStorage.getItem("quoteOfDay")}async function J(){try{const{quote:e,author:t}=await A("quote","");return{quote:e,author:t}}catch(e){j(e.message)}}function k(e,t){const s=`<p class="quote quote-text">${e}</p>
    <p class="qoute-author">${t}</p>`;R.insertAdjacentHTML("beforeend",s)}function j(e){h.error({message:`${e}`})}H();const Q=document.querySelector(".footer-sub-form"),G="https://your-energy.b.goit.study/api/";Q.addEventListener("submit",K);async function K(e){e.preventDefault();const t=e.target.email.value;try{const{data:s}=await E.post(`${G}subscription`,{email:t});V(s.message)}catch(s){j(s.response.data.message)}}function V(e){h.success({message:`${e}`})}function Z(e,t=300){let s;return(...r)=>{clearTimeout(s),s=setTimeout(()=>{e.apply(this,r)},t)}}function $(e){e.classList.remove("visually-hidden")}function C(e){e.classList.add("visually-hidden")}const _={searchClearBtnEl:document.querySelector(".js-search-form--btn__clear"),searchInputEl:document.querySelector(".js-search-form--input"),searchIconEl:document.querySelector(".js-search-form--btn__search"),searchClearEl:document.querySelector(".js-search-form--btn__clear"),searchFormEl:document.querySelector(".js-search-form")},X=Z(e=>Y(e),400);_.searchClearBtnEl.addEventListener("click",ee);_.searchInputEl.addEventListener("input",X);_.searchFormEl.addEventListener("submit",te);function Y({target:e}){e!=null&&e.value.trim()?($(_.searchClearEl),C(_.searchIconEl)):(C(_.searchClearEl),$(_.searchIconEl))}function ee(){_.searchInputEl.value="",C(_.searchClearEl),$(_.searchIconEl)}function te(e){e.preventDefault()}
//# sourceMappingURL=main-e07e56a9.js.map
