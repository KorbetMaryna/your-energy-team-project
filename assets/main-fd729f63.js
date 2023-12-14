import{a as q,i as x}from"./vendor-f9c1c104.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(i){const s=i.getAttribute("href").split("/").pop();e===s||e===""&&s==="index.html"?i.classList.add("header-nav-current"):i.classList.remove("header-nav-current")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),s=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open")};t.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();function P(){const e=document.getElementsByClassName("exercises-tiles-category-list"),t=document.getElementById("myModal"),i=document.getElementsByClassName("main-modal__close")[0];let s=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];i&&(i.onclick=function(){t.style.display="none"}),window.onclick=function(r){r.target==t&&(t.style.display="none")};for(let r=0;r<e.length;r+=1)e[r].addEventListener("click",function(m){const u=m.target.closest(".exercises-category-tile-item");if(u){const p=u.dataset.id;t.style.display="flex";const y=`https://your-energy.b.goit.study/api/exercises/${p}`;q.get(y).then(c=>{if(c)return c.data}).then(c=>{a(c);const d=document.getElementById("fav-btn");if(d){const _=s.some(v=>v._id===c._id);d.querySelector(".main-modal__heart-icon use").setAttribute("href",_?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),d.querySelector(".main-modal__btn-text").textContent=_?"Unfavorite":"Add to favorites",d.addEventListener("click",function(){const v=s.some(w=>w._id===c._id);v?s=s.filter(w=>w._id!==c._id):s.push(c),localStorage.setItem("savedExercises",JSON.stringify(s)),d.querySelector(".main-modal__btn-text").textContent=v?"Add to favorites":"Unfavorite",d.querySelector(".main-modal__heart-icon use").setAttribute("href",v?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(c=>{console.error("There was a problem with the Axios request:",c)})}});function a(r){const g=document.getElementById("exerciseDetails");let m=null;r.gifUrl?m=`<div class="main-modal__gif-wrapper">
        <img class="gif" src="${r.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:m=`<div class="main-modal__gif-wrapper">
        <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
        <div class="main-modal__gif-overlay"></div>
        </div>`;const u=`<p class='main-modal__card-title'>${r.name.charAt(0).toUpperCase()+r.name.slice(1)}</p>`,p=o(Math.round(r.rating*10)/10),y=`<div class='main-modal__rating-container'>
      <span class="main-modal__rating">${r.rating.toString().includes(".")?Math.round(r.rating*10)/10:r.rating+".0"}</span>
      ${p}
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
      </div>`,d=`<div class="main-modal__description">${r.description}</div>`,_=`<div class="main-modal__btns-wrapper">
      <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
      <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
      <svg class="main-modal__heart-icon" aria-label="logo icon">
      <use href="./img/icons.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="main-modal__btn main-modal__rating-btn">
      <span class="main-modal__btn-text">Give a rating</span>
      </button>
      </div>`;g.innerHTML=`${m+`<div class="main-modal__content-wrapper">${u+y+c+d+_}</div>`}`}function o(r){const g=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`,m=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;let u="",p=Math.floor(r),y=r-p;for(let c=0;c<5;c++)if(c<p)u+=g;else if(c===p&&y>0){const d=Math.round(y*100);u+=`<div class="main-modal__star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${d}%, rgba(244, 244, 244, 0.2) ${d}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${d}%, rgba(244, 244, 244, 0.2) ${d}%);"><svg class="main-modal__star-icon main-modal__colored-star" >
          <use href="./img/icons.svg#icon-star"></use>
          </svg></div>`}else u+=m;return`${u}`}}window.onload=function(){document.querySelector(".exercises-container")&&P()};const E=document.querySelector(".rating-backdrop"),I=document.querySelector(".rating__close-btn"),T=document.querySelector(".rating__submit-btn"),M=document.querySelectorAll(".rating__input"),$=document.querySelector(".rating__input-email"),k=document.querySelector(".rating__input-comment");let f=null;const h=()=>{E.classList.remove("modal-open"),I.removeEventListener("click",h)},j=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),B=async()=>{const e=f==null?void 0:f.id,t=parseInt(e==null?void 0:e.replace("star",""),10);if(!t||isNaN(t)){console.log("Please add a rate");return}if(j($.value)){console.log("Please enter your email");return}if(k.value.length<=3){console.log("Please leave your review");return}const s="https://your-energy.b.goit.study/api/exercises/EXERCISE_ID/rating";try{(await q.patch(s,{rate:t,email:$.value,review:k.value})).status===200?iziToast.success({title:"Success",message:"Rating submitted successfully!"}):iziToast.error({title:"Error",message:"Failed to submit rating"})}catch{iziToast.error({title:"Error",message:"Failed to submit rating"})}h()},D=()=>{const e=Array.from(M);e.forEach((t,i)=>{const s=t.nextElementSibling.querySelector(".rating__icon-star");t===f||f&&i<e.indexOf(f)?(s.style.fill="var(--stars-color-activ)",s.style.opacity=1):(s.style.fill="var(--second-color-light-theme)",s.style.opacity=.2)})};M.forEach(e=>{e.addEventListener("click",function(t){f=t.target,D()})});E.addEventListener("click",function(e){e.target===E&&!e.target.closest(".rating__close-btn")&&!e.target.closest(".rating__submit-btn")&&h()});I.addEventListener("click",h);document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});T.addEventListener("click",B);const F="https://your-energy.b.goit.study/api/";async function A(e,t){for(const a of Object.keys(t))t[a]===""&&delete t[a];const i=new URLSearchParams(t),{data:s}=await q(`${F}${e}?${i}`);return s}x.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const n={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let l={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};function S(e,t){e!==""?l.limit=t<768?9:12:l.limit=t<768?8:10}S(l.filter,window.innerWidth);L("filters",l);n.filterButtons.forEach(e=>{e.addEventListener("click",()=>{Object.assign(l,{bodypart:"",muscles:"",equipment:""}),l.filter=e.innerText,l.page=1,L("filters",l),document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")})});async function L(e,t){await A(e,t).then(i=>{var s;(s=i.results[0])!=null&&s.filter?(S(l.filter,window.innerWidth),U("filters",i),n.headlineCategory.innerText="",n.headlineWrapper.classList.add("visually-hidden"),n.searchForm.classList.add("visually-hidden")):(S(l.filter,window.innerWidth),R("exercises",i))}).catch(i=>{console.log(i),x.error({message:"Something went wrong :-( try again later."})})}function U(e,t){n.tilesCategoryList.innerHTML="",n.tilesCategoryList.classList.add("visually-hidden"),n.tilesFilterList.classList.remove("visually-hidden");const{page:i,totalPages:s,results:a}=t,o=a.map(({filter:r,name:g,imgURL:m})=>`      
        <li class="exercises-filter-tile-item" data-name=${g} data-filter=${r.toLowerCase()}>
              <div class="exercises-filter-tile-gradient"></div>
              <img class="exercises-filter-tile-img" src="${m}" alt="${g}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
              <div class="exercises-filter-tile-text-wrapper">
                  <h3 class="exercises-filter-tile-headline">${b(g)}</h3>
                  <p class="exercises-filter-tile-text">${r}</p>
              </div>
        </li>`).join("");n.tilesFilterList.innerHTML=o,O(i,s,e)}n.tilesFilterList.addEventListener("click",N);function N(e){if(e.preventDefault(),Object.assign(l,{filter:"",bodypart:"",muscles:"",equipment:""}),e.currentTarget===e.target)return;let{name:i,filter:s}=e.target.parentNode.dataset;s==="body"&&(s="bodypart"),Object.assign(l,{[s]:i}),L("exercises",l),n.headlineWrapper.classList.remove("visually-hidden"),n.headlineCategory.innerText=b(i),n.searchForm.classList.remove("visually-hidden")}function R(e,{page:t,totalPages:i,results:s}){if(!s.length)return x.warning({message:"Unfortunately, we don't have any exercises in this category"});n.tilesFilterList.innerHTML="",n.tilesFilterList.classList.add("visually-hidden"),n.tilesCategoryList.classList.remove("visually-hidden");const a=s.map(({rating:o,name:r,burnedCalories:g,bodyPart:m,target:u,_id:p})=>`      
        <li class="exercises-category-tile-item" data-id=${p}>
            <div class="exercises-category-tile-top">
              <div class="exercises-category-tile-workout-wrapper">
                <span class="exercises-category-tile-badge">WORKOUT</span>
                <div class="exercises-category-tile-rating-wrapper">
                  <span class="exercises-category-tile-rating">${o.toFixed(1)}</span>
                  <svg
                  class="exercises-category-tile-star-icon"
                  width="18"
                  height="18">
                    <use href="./../img/icons.svg#icon-star"></use>
                  </svg>
                </div>
              </div>
              <button class="exercises-category-tile-button">Start 
                <svg 
                class="exercises-category-tile-arrow-icon"
                width="36" 
                height="36">
                  <use xlink:href="./../img/icons.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercises-category-tile-middle">
              <svg 
              class="exercises-category-tile-man-icon"
              width="24" 
              height="24">
                <use href="./../img/icons.svg#icon-running-man"></use>
              </svg>
              <h3 class="exercises-category-tile-name">${r}</h3>
            </div>
            <ul class="exercises-category-tile-bottom">
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Burned calories:</span>
                ${g}</li>
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Body part:</span>
                ${b(m)}</li>
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Target:</span>
                ${b(u)}</li>
            </ul>
        </li>`).join("");n.tilesCategoryList.innerHTML=a,O(t,i,e)}function O(e,t,i){console.log("totalPages:",t),n.paginationList.innerHTML="";for(let s=1;s<=t;s++){const a=document.createElement("span");a.classList.add("exercises-pagination-item"),a.textContent=s,s==e&&a.classList.add("exercises-pagination-item-active"),a.addEventListener("click",()=>{l.page=s,L(i,l)}),n.paginationList.appendChild(a)}}function b(e){return e[0].toUpperCase()+e.slice(1)}const H=document.querySelector(".quote-wrapper");async function W(){const e=new Date().toLocaleDateString(),t=Q(),i=JSON.parse(t);if(!i||i.date!=e){let{quote:s,author:a}=await J();C(s,a),z(s,a,e)}else C(i.quote,i.author)}function z(e,t,i){const s={quote:e,author:t,date:i};localStorage.setItem("quoteOfDay",JSON.stringify(s))}function Q(){return localStorage.getItem("quoteOfDay")}async function J(){try{const{quote:e,author:t}=await A("quote","");return{quote:e,author:t}}catch(e){G(e.message)}}function C(e,t){const i=`<p class="quote quote-text">${e}</p>
    <p class="qoute-author">${t}</p>`;H.insertAdjacentHTML("beforeend",i)}function G(e){x.error({message:`${e}`})}W();
//# sourceMappingURL=main-fd729f63.js.map
