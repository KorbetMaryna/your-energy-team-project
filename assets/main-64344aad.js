import{a as w,i as b}from"./vendor-f9c1c104.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();function _(e){const t=document.querySelector(".loader-container");e&&t.classList.remove("hidden"),t.classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){_(!0);const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(i){const s=i.getAttribute("href").split("/").pop();e===s||e===""&&s==="index.html"?(i.classList.add("header-nav-current"),_(!1)):(i.classList.remove("header-nav-current"),_(!1))})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),s=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open")};t.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();function B(){const e=document.getElementsByClassName("exercises-tiles-category-list"),t=document.getElementById("myModal"),i=document.getElementsByClassName("main-modal__close")[0];let s=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];i&&(i.onclick=function(){t.style.display="none",localStorage.removeItem("currentExercise")}),window.onclick=function(r){r.target==t&&(t.style.display="none",localStorage.removeItem("currentExercise"))};for(let r=0;r<e.length;r+=1)e[r].addEventListener("click",function(d){const m=d.target.closest(".exercises-category-tile-button"),g=d.target.closest(".exercises-category-tile-item");if(m){const v=g.dataset.id;t.style.display="flex";const p=`https://your-energy.b.goit.study/api/exercises/${v}`;w.get(p).then(n=>{if(n)return localStorage.setItem("currentExercise",JSON.stringify(n.data)),n.data}).then(n=>{a(n);const f=document.getElementById("fav-btn");if(f){const k=s.some(h=>h._id===n._id);f.querySelector(".main-modal__heart-icon use").setAttribute("href",k?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),f.querySelector(".main-modal__btn-text").textContent=k?"Unfavorite":"Add to favorites",f.addEventListener("click",function(){const h=s.some(E=>E._id===n._id);h?s=s.filter(E=>E._id!==n._id):s.push(n),localStorage.setItem("savedExercises",JSON.stringify(s)),f.querySelector(".main-modal__btn-text").textContent=h?"Add to favorites":"Unfavorite",f.querySelector(".main-modal__heart-icon use").setAttribute("href",h?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(n=>{console.error("There was a problem with the Axios request:",n)})}});function a(r){const u=document.getElementById("exerciseDetails");let d=null;r.gifUrl?d=`<div class="main-modal__gif-wrapper">
        <img class="gif" src="${r.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:d=`<div class="main-modal__gif-wrapper">
        <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
        <div class="main-modal__gif-overlay"></div>
        </div>`;const m=`<p class='main-modal__card-title'>${r.name.charAt(0).toUpperCase()+r.name.slice(1)}</p>`,g=c(Math.round(r.rating*10)/10),v=`<div class='main-modal__rating-container'>
      <span class="main-modal__rating">${r.rating.toString().includes(".")?Math.round(r.rating*10)/10:r.rating+".0"}</span>
      ${g}
      </div>`,p=`<div class="main-modal__details-container">
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
      </div>`,n=`<div class="main-modal__description">${r.description}</div>`,f=`<div class="main-modal__btns-wrapper">
      <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
      <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
      <svg class="main-modal__heart-icon" aria-label="logo icon">
      <use href="./img/icons.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="main-modal__btn main-modal__rating-btn">
      <span class="main-modal__btn-text">Give a rating</span>
      </button>
      </div>`;u.innerHTML=`${d+`<div class="main-modal__content-wrapper">${m+v+p+n+f}</div>`}`}function c(r){const u=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`,d=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;let m="",g=Math.floor(r),v=r-g;for(let p=0;p<5;p++)if(p<g)m+=u;else if(p===g&&v>0){const n=Math.round(v*100);m+=`<div class="main-modal__star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${n}%, rgba(244, 244, 244, 0.2) ${n}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${n}%, rgba(244, 244, 244, 0.2) ${n}%);"><svg class="main-modal__star-icon main-modal__colored-star" >
          <use href="./img/icons.svg#icon-star"></use>
          </svg></div>`}else m+=d;return`${m}`}}window.onload=function(){document.querySelector(".exercises-container")&&B()};const q=document.querySelector(".rating-backdrop"),A=document.querySelector(".rating__close-btn"),D=document.querySelector(".rating__submit-btn"),O=document.querySelectorAll(".rating__input"),I=document.querySelector(".rating__input-email"),C=document.querySelector(".rating__input-comment");let y=null;const x=()=>{q.classList.remove("modal-open"),A.removeEventListener("click",x)},F=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),U=async()=>{const e=y==null?void 0:y.id,t=parseInt(e==null?void 0:e.replace("star",""),10);if(!t||isNaN(t)){console.log("Please add a rate");return}if(F(I.value)){console.log("Please enter your email");return}if(C.value.length<=3){console.log("Please leave your review");return}const s="https://your-energy.b.goit.study/api/exercises/EXERCISE_ID/rating";try{(await w.patch(s,{rate:t,email:I.value,review:C.value})).status===200?iziToast.success({title:"Success",message:"Rating submitted successfully!"}):iziToast.error({title:"Error",message:"Failed to submit rating"})}catch{iziToast.error({title:"Error",message:"Failed to submit rating"})}x()},N=()=>{const e=Array.from(O);e.forEach((t,i)=>{const s=t.nextElementSibling.querySelector(".rating__icon-star");t===y||y&&i<e.indexOf(y)?(s.style.fill="var(--stars-color-activ)",s.style.opacity=1):(s.style.fill="var(--second-color-light-theme)",s.style.opacity=.2)})};O.forEach(e=>{e.addEventListener("click",function(t){y=t.target,N()})});q.addEventListener("click",function(e){e.target===q&&!e.target.closest(".rating__close-btn")&&!e.target.closest(".rating__submit-btn")&&x()});A.addEventListener("click",x);document.addEventListener("keydown",e=>{e.key==="Escape"&&x()});D.addEventListener("click",U);const R="https://your-energy.b.goit.study/api/";_(!0);async function P(e,t){for(const a of Object.keys(t))t[a]===""&&delete t[a];const i=new URLSearchParams(t),{data:s}=await w(`${R}${e}?${i}`);return _(!1),s}b.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const o={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let l={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};function $(e,t){e!==""?l.limit=t<768?9:12:l.limit=t<768?8:10}$(l.filter,window.innerWidth);S("filters",l);o.filterButtons.forEach(e=>{e.addEventListener("click",()=>{Object.assign(l,{bodypart:"",muscles:"",equipment:""}),l.filter=e.innerText,l.page=1,S("filters",l),document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")})});async function S(e,t){await P(e,t).then(i=>{var s;(s=i.results[0])!=null&&s.filter?($(l.filter,window.innerWidth),H("filters",i),o.headlineCategory.innerText="",o.headlineWrapper.classList.add("visually-hidden"),o.searchForm.classList.add("visually-hidden")):($(l.filter,window.innerWidth),z("exercises",i))}).catch(i=>{console.log(i),b.error({message:"Something went wrong :-( try again later."})})}function H(e,t){o.tilesCategoryList.innerHTML="",o.tilesCategoryList.classList.add("visually-hidden"),o.tilesFilterList.classList.remove("visually-hidden");const{page:i,totalPages:s,results:a}=t,c=a.map(({filter:r,name:u,imgURL:d})=>`      
        <li class="exercises-filter-tile-item" data-name=${u} data-filter=${r.toLowerCase()}>
              <div class="exercises-filter-tile-gradient"></div>
              <img class="exercises-filter-tile-img" src="${d}" alt="${u}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
              <div class="exercises-filter-tile-text-wrapper">
                  <h3 class="exercises-filter-tile-headline">${L(u)}</h3>
                  <p class="exercises-filter-tile-text">${r}</p>
              </div>
        </li>`).join("");o.tilesFilterList.innerHTML=c,T(i,s,e)}o.tilesFilterList.addEventListener("click",W);function W(e){if(e.preventDefault(),Object.assign(l,{filter:"",bodypart:"",muscles:"",equipment:""}),e.currentTarget===e.target)return;let{name:i,filter:s}=e.target.parentNode.dataset;s==="body"&&(s="bodypart"),Object.assign(l,{[s]:i}),S("exercises",l),o.headlineWrapper.classList.remove("visually-hidden"),o.headlineCategory.innerText=L(i),o.searchForm.classList.remove("visually-hidden")}function z(e,{page:t,totalPages:i,results:s}){if(!s.length)return b.warning({message:"Unfortunately, we don't have any exercises in this category"});o.tilesFilterList.innerHTML="",o.tilesFilterList.classList.add("visually-hidden"),o.tilesCategoryList.classList.remove("visually-hidden");const a=s.map(({rating:c,name:r,burnedCalories:u,bodyPart:d,target:m,_id:g})=>`      
        <li class="exercises-category-tile-item" data-id=${g}>
            <div class="exercises-category-tile-top">
              <div class="exercises-category-tile-workout-wrapper">
                <span class="exercises-category-tile-badge">WORKOUT</span>
                <div class="exercises-category-tile-rating-wrapper">
                  <span class="exercises-category-tile-rating">${c.toFixed(1)}</span>
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
                ${u}</li>
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Body part:</span>
                ${L(d)}</li>
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Target:</span>
                ${L(m)}</li>
            </ul>
        </li>`).join("");o.tilesCategoryList.innerHTML=a,T(t,i,e)}function T(e,t,i){console.log("totalPages:",t),o.paginationList.innerHTML="";for(let s=1;s<=t;s++){const a=document.createElement("span");a.classList.add("exercises-pagination-item"),a.textContent=s,s==e&&a.classList.add("exercises-pagination-item-active"),a.addEventListener("click",()=>{l.page=s,S(i,l)}),o.paginationList.appendChild(a)}}function L(e){return e[0].toUpperCase()+e.slice(1)}const Q=document.querySelector(".quote-wrapper");async function J(){const e=new Date().toLocaleDateString(),t=K(),i=JSON.parse(t);if(!i||i.date!=e){let{quote:s,author:a}=await X();M(s,a),G(s,a,e)}else M(i.quote,i.author)}function G(e,t,i){const s={quote:e,author:t,date:i};localStorage.setItem("quoteOfDay",JSON.stringify(s))}function K(){return localStorage.getItem("quoteOfDay")}async function X(){try{const{quote:e,author:t}=await P("quote","");return{quote:e,author:t}}catch(e){j(e.message)}}function M(e,t){const i=`<p class="quote quote-text">${e}</p>
    <p class="qoute-author">${t}</p>`;Q.insertAdjacentHTML("beforeend",i)}function j(e){b.error({message:`${e}`})}J();const V=document.querySelector(".footer-sub-form"),Z="https://your-energy.b.goit.study/api/";V.addEventListener("submit",Y);async function Y(e){e.preventDefault();const t=e.target.email.value;try{const{data:i}=await w.post(`${Z}subscription`,{email:t});ee(i.message)}catch(i){j(i.response.data.message)}}function ee(e){b.success({message:`${e}`})}
//# sourceMappingURL=main-64344aad.js.map
