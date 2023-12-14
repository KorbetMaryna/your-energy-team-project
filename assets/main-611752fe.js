import{a as L,i as y}from"./vendor-f9c1c104.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();function _(e){const s=document.querySelector(".loader-container");e&&s.classList.remove("hidden"),s.classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){_(!0);const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(a){const t=a.getAttribute("href").split("/").pop();e===t||e===""&&t==="index.html"?(a.classList.add("header-nav-current"),_(!1)):(a.classList.remove("header-nav-current"),_(!1))})});(()=>{const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),t=()=>{const i=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!i),e.classList.toggle("is-open")};s.addEventListener("click",t),a.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();function M(){const e=document.getElementsByClassName("exercises-tiles-category-list"),s=document.getElementById("myModal"),a=document.getElementsByClassName("main-modal__close")[0];let t=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];a&&(a.onclick=function(){s.style.display="none",localStorage.removeItem("currentExercise")}),window.onclick=function(r){r.target==s&&(s.style.display="none",localStorage.removeItem("currentExercise"))};for(let r=0;r<e.length;r+=1)e[r].addEventListener("click",function(p){const f=p.target.closest(".exercises-category-tile-button"),v=p.target.closest(".exercises-category-tile-item");if(f){const c=v.dataset.id;s.style.display="flex";const l=`https://your-energy.b.goit.study/api/exercises/${c}`;L.get(l).then(n=>{if(n)return localStorage.setItem("currentExercise",JSON.stringify(n.data)),n.data}).then(n=>{i(n);const m=document.getElementById("fav-btn");if(m){const b=t.some(h=>h._id===n._id);m.querySelector(".main-modal__heart-icon use").setAttribute("href",b?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),m.querySelector(".main-modal__btn-text").textContent=b?"Unfavorite":"Add to favorites",m.addEventListener("click",function(){const h=t.some(w=>w._id===n._id);h?t=t.filter(w=>w._id!==n._id):t.push(n),localStorage.setItem("savedExercises",JSON.stringify(t)),m.querySelector(".main-modal__btn-text").textContent=h?"Add to favorites":"Unfavorite",m.querySelector(".main-modal__heart-icon use").setAttribute("href",h?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(n=>{console.error("There was a problem with the Axios request:",n)})}});function i(r){const u=document.getElementById("exerciseDetails");let p=null;r.gifUrl?p=`<div class="main-modal__gif-wrapper">
        <img class="gif" src="${r.gifUrl}" alt="Exercise GIF">
        <div class="gif-overlay"></div>
        </div>`:p=`<div class="main-modal__gif-wrapper">
        <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
        <div class="main-modal__gif-overlay"></div>
        </div>`;const f=`<p class='main-modal__card-title'>${r.name.charAt(0).toUpperCase()+r.name.slice(1)}</p>`,v=o(Math.round(r.rating*10)/10),c=`<div class='main-modal__rating-container'>
      <span class="main-modal__rating">${r.rating.toString().includes(".")?Math.round(r.rating*10)/10:r.rating+".0"}</span>
      ${v}
      </div>`,l=`<div class="main-modal__details-container">
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
      </div>`,n=`<div class="main-modal__description">${r.description}</div>`,m=`<div class="main-modal__btns-wrapper">
      <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
      <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
      <svg class="main-modal__heart-icon" aria-label="logo icon">
      <use href="./img/icons.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="main-modal__btn main-modal__rating-btn">
      <span class="main-modal__btn-text">Give a rating</span>
      </button>
      </div>`;u.innerHTML=`${p+`<div class="main-modal__content-wrapper">${f+c+l+n+m}</div>`}`}function o(r){const u=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`,p=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;let f="",v=Math.floor(r),c=r-v;for(let l=0;l<5;l++)if(l<v)f+=u;else if(l===v&&c>0){const n=Math.round(c*100);f+=`<div class="main-modal__star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${n}%, rgba(244, 244, 244, 0.2) ${n}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${n}%, rgba(244, 244, 244, 0.2) ${n}%);"><svg class="main-modal__star-icon main-modal__colored-star" >
          <use href="./img/icons.svg#icon-star"></use>
          </svg></div>`}else f+=p;return`${f}`}}window.onload=function(){document.querySelector(".exercises-container")&&M()};y.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#myModal");e.addEventListener("click",function(s){if(s.target.closest(".main-modal__rating-btn")){const t={backdrop:document.querySelector(".rating-backdrop"),closeButton:document.querySelector(".rating__close-btn"),submitButton:document.querySelector(".rating__submit-btn"),starsContainer:document.querySelectorAll(".rating__input"),emailInput:document.querySelector(".rating__input-email"),commentInput:document.querySelector(".rating__input-comment"),ratingValue:document.querySelector(".rating__value")};let i=null,o=JSON.parse(localStorage.getItem("currentExercise"))||{};t.ratingValue.innerHTML=o.rating.toString().includes(".")?Math.round(o.rating*10)/10:o.rating+".0";const r=()=>{e.style.display="none",t.backdrop.classList.add("modal-open"),t.closeButton.addEventListener("click",u)},u=()=>{t.backdrop.classList.remove("modal-open"),t.closeButton.removeEventListener("click",u),e.style.display="flex"},p=()=>{const c=Array.from(t.starsContainer);c.forEach((l,n)=>{const m=l.nextElementSibling.querySelector(".rating__icon-star");l===i||i&&n<c.indexOf(i)?(m.style.fill="var(--stars-color-activ)",m.style.opacity=1):(m.style.fill="var(--second-color-light-theme)",m.style.opacity=.2)})},f=c=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(c),v=async c=>{c.preventDefault();const l=i==null?void 0:i.id,n=parseInt(l==null?void 0:l.replace("star",""),10);if(!n||isNaN(n)){y.show({title:"Error",message:"Please add your rating"});return}if(!f(t.emailInput.value)){y.show({title:"Error",message:"Please enter a valid email address"});return}if(t.commentInput.value.length<=3){y.show({title:"Error",message:"Please leave your comment"});return}const m=`https://your-energy.b.goit.study/api/exercises/${o._id}/rating`;try{(await L.patch(m,{rate:n,email:t.emailInput.value,review:t.commentInput.value})).status===200?y.success({title:"Success",message:"Rating submitted successfully!"}):y.error({title:"Error",message:"Failed to submit rating"})}catch{y.error({title:"Error",message:"Failed to submit rating"})}u()};t.starsContainer.forEach(c=>{c.addEventListener("click",function(l){i=l.target,p()})}),t.backdrop.addEventListener("click",function(c){c.target===t.backdrop&&!c.target.closest(".rating__close-btn")&&!c.target.closest(".rating__submit-btn")&&u()}),t.closeButton.addEventListener("click",u),t.submitButton.addEventListener("click",v),document.addEventListener("keydown",c=>{c.key==="Escape"&&u()}),r()}})});const C="https://your-energy.b.goit.study/api/";_(!0);async function $(e,s){for(const i of Object.keys(s))s[i]===""&&delete s[i];const a=new URLSearchParams(s),{data:t}=await L(`${C}${e}?${a}`);return _(!1),t}y.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const d={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let g={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};function S(e,s){e!==""?g.limit=s<768?9:12:g.limit=s<768?8:10}S(g.filter,window.innerWidth);E("filters",g);d.filterButtons.forEach(e=>{e.addEventListener("click",()=>{Object.assign(g,{bodypart:"",muscles:"",equipment:""}),g.filter=e.innerText,g.page=1,E("filters",g),document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")})});async function E(e,s){await $(e,s).then(a=>{var t;(t=a.results[0])!=null&&t.filter?(S(g.filter,window.innerWidth),A("filters",a),d.headlineCategory.innerText="",d.headlineWrapper.classList.add("visually-hidden"),d.searchForm.classList.add("visually-hidden")):(S(g.filter,window.innerWidth),B("exercises",a))}).catch(a=>{console.log(a),y.error({message:"Something went wrong :-( try again later."})})}function A(e,s){d.tilesCategoryList.innerHTML="",d.tilesCategoryList.classList.add("visually-hidden"),d.tilesFilterList.classList.remove("visually-hidden");const{page:a,totalPages:t,results:i}=s,o=i.map(({filter:r,name:u,imgURL:p})=>`      
        <li class="exercises-filter-tile-item" data-name=${u} data-filter=${r.toLowerCase()}>
              <div class="exercises-filter-tile-gradient"></div>
              <img class="exercises-filter-tile-img" src="${p}" alt="${u}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
              <div class="exercises-filter-tile-text-wrapper">
                  <h3 class="exercises-filter-tile-headline">${x(u)}</h3>
                  <p class="exercises-filter-tile-text">${r}</p>
              </div>
        </li>`).join("");d.tilesFilterList.innerHTML=o,k(a,t,e)}d.tilesFilterList.addEventListener("click",O);function O(e){if(e.preventDefault(),Object.assign(g,{filter:"",bodypart:"",muscles:"",equipment:""}),e.currentTarget===e.target)return;let{name:a,filter:t}=e.target.parentNode.dataset;t==="body"&&(t="bodypart"),Object.assign(g,{[t]:a}),E("exercises",g),d.headlineWrapper.classList.remove("visually-hidden"),d.headlineCategory.innerText=x(a),d.searchForm.classList.remove("visually-hidden")}function B(e,{page:s,totalPages:a,results:t}){if(!t.length)return y.warning({message:"Unfortunately, we don't have any exercises in this category"});d.tilesFilterList.innerHTML="",d.tilesFilterList.classList.add("visually-hidden"),d.tilesCategoryList.classList.remove("visually-hidden");const i=t.map(({rating:o,name:r,burnedCalories:u,bodyPart:p,target:f,_id:v})=>`      
        <li class="exercises-category-tile-item" data-id=${v}>
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
                ${u}</li>
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Body part:</span>
                ${x(p)}</li>
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Target:</span>
                ${x(f)}</li>
            </ul>
        </li>`).join("");d.tilesCategoryList.innerHTML=i,k(s,a,e)}function k(e,s,a){console.log("totalPages:",s),d.paginationList.innerHTML="";for(let t=1;t<=s;t++){const i=document.createElement("span");i.classList.add("exercises-pagination-item"),i.textContent=t,t==e&&i.classList.add("exercises-pagination-item-active"),i.addEventListener("click",()=>{g.page=t,E(a,g)}),d.paginationList.appendChild(i)}}function x(e){return e[0].toUpperCase()+e.slice(1)}const P=document.querySelector(".quote-wrapper");async function j(){const e=new Date().toLocaleDateString(),s=D(),a=JSON.parse(s);if(!a||a.date!=e){let{quote:t,author:i}=await F();q(t,i),T(t,i,e)}else q(a.quote,a.author)}function T(e,s,a){const t={quote:e,author:s,date:a};localStorage.setItem("quoteOfDay",JSON.stringify(t))}function D(){return localStorage.getItem("quoteOfDay")}async function F(){try{const{quote:e,author:s}=await $("quote","");return{quote:e,author:s}}catch(e){I(e.message)}}function q(e,s){const a=`<p class="quote quote-text">${e}</p>
    <p class="qoute-author">${s}</p>`;P.insertAdjacentHTML("beforeend",a)}function I(e){y.error({message:`${e}`})}j();const U=document.querySelector(".footer-sub-form"),N="https://your-energy.b.goit.study/api/";U.addEventListener("submit",H);async function H(e){e.preventDefault();const s=e.target.email.value;try{const{data:a}=await L.post(`${N}subscription`,{email:s});R(a.message)}catch(a){I(a.response.data.message)}}function R(e){y.success({message:`${e}`})}
//# sourceMappingURL=main-611752fe.js.map
