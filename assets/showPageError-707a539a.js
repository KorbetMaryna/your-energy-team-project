import{a as p,i as T}from"./vendor-1133ef0b.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(t){const o=t.getAttribute("href").split("/").pop();e===o||e===""&&o==="index.html"?t.classList.add("header-nav-current"):t.classList.remove("header-nav-current")})});function z(){const e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),t=document.querySelector(".js-menu-container");e.addEventListener("click",()=>{t.classList.add("is-open")}),n.addEventListener("click",()=>{t.classList.remove("is-open")});const o=window.matchMedia("(min-width: 768px)"),a=i=>{i.matches&&t.classList.remove("is-open")};o.addEventListener("change",a)}z();const L="https://your-energy.b.goit.study/api";async function H(e,n){for(const a of Object.keys(n))n[a]===""&&delete n[a];const t=new URLSearchParams(n),{data:o}=await p(`${L}/${e}?${t}`);return o}async function ne(e){for(const o of Object.keys(e))e[o]===""&&delete e[o];const n=new URLSearchParams(e),{data:t}=await p(`${L}/exercises?${n}`);return t}const se=async({page:e=1,limit:n=100}={})=>{const{data:t}=await p.get(`${L}/filters?filter=Muscles&page=${e}&limit=${n}`);return t},ae=async({page:e=1,limit:n=100}={})=>{const{data:t}=await p.get(`${L}/filters?filter=Body+parts&page=${e}&limit=${n}`);return t},ie=async({page:e=1,limit:n=100}={})=>{const{data:t}=await p.get(`${L}/filters?filter=Equipment&page=${e}&limit=${n}`);return t},re=async({bodyPart:e,muscle:n,equipment:t,page:o=1,limit:a=100})=>{const i=new URLSearchParams({bodypart:e,muscles:n,equipment:t,page:o,limit:a}),{data:m}=await p.get(`${L}/exercises?${i}`);return m},A={colorSuccess:"#0ecc2e",colorError:"#f58e82",colorInfo:"#9dfab5"};function g(e,n){let t;e==="error"?t=A.colorError:e==="success"?t=A.colorSuccess:t=A.colorInfo,T.show({messageColor:"#262121",backgroundColor:t,messageSize:"18px",position:"bottomRight",progressBar:!1,animateInside:!1,timeout:3e3,targetFirst:!1,message:n})}const G=document.querySelector(".quote-wrapper");async function K(){const e=new Date().toLocaleDateString(),n=Z();if(Y(n,e))U(n.quote,n.author);else{let{quote:t,author:o}=await X();U(t,o),V(t,o,e)}}function V(e,n,t){const o={quote:e,author:n,date:t};localStorage.setItem("quoteOfDay",JSON.stringify(o))}function Z(){const e=localStorage.getItem("quoteOfDay");return JSON.parse(e)}async function X(){try{const{quote:e,author:n}=await H("quote","");return{quote:e,author:n}}catch(e){console.log(e.message),g("error","Something went wrong 😔 try again later.")}}function U(e,n){const t=`<p class="quote quote-text">${e}</p>
    <p class="qoute-author">${n}</p>`;G.insertAdjacentHTML("beforeend",t)}function Y(e,n){return!(!e||!e.quote||!e.date||!e.author||e.date!=n)}K();const P=document.querySelector(".js-tiles-category-list");let C=null;window.onload=function(){P?C=document.getElementsByClassName("exercises-tiles-category-list"):C=document.getElementsByClassName("fav-workouts-list");for(let e=0;e<C.length;e+=1)C[e].addEventListener("click",function(t){const o=P?t.target.closest(".exercises-category-tile-button"):t.target.closest(".fav-workouts-start-button"),a=P?t.target.closest(".exercises-category-tile-item"):t.target.closest(".fav-workouts-list-item");if(o){let y=function(){i.style.display="none",localStorage.removeItem("currentExercise"),document.body.style.overflow="auto",document.removeEventListener("keydown",q),m.removeEventListener("click",y),window.removeEventListener("click",k)},q=function(s){(s.key==="Escape"||s.keyCode===27)&&y()},k=function(s){s.target===i&&y()},u=function(s){const d=document.getElementById("exerciseDetails");let b=null;s.gifUrl?b=`<div class="main-modal__gif-wrapper">
              <img class="gif" src="${s.gifUrl}" alt="Exercise GIF">
              <div class="gif-overlay"></div>
              </div>`:b=`<div class="main-modal__gif-wrapper">
              <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
              <div class="main-modal__gif-overlay"></div>
              </div>`;const N=`<p class='main-modal__card-title'>${s.name.charAt(0).toUpperCase()+s.name.slice(1)}</p>`,v=Q(Math.round(s.rating*10)/10),R=`<div class='main-modal__rating-container'>
            <span class="main-modal__rating">${s.rating.toString().includes(".")?Math.round(s.rating*10)/10:s.rating+".0"}</span>
            ${v}
            </div>`,x=`<div class="main-modal__details-container">
            <div class="main-modal__details-wrapper">
            <p class="main-modal__details-title">Target</p>
            <p class="main-modal__details-info">${s.target.charAt(0).toUpperCase()+s.target.slice(1)}</p>
            </div>
            <div class="main-modal__details-wrapper">
            <p class="main-modal__details-title body-part">Body Part</p>
            <p class="main-modal__details-info">${s.bodyPart.charAt(0).toUpperCase()+s.bodyPart.slice(1)}</p>
            </div>
            <div class="main-modal__details-wrapper">
            <p class="main-modal__details-title">Equipment</p>
            <p class="main-modal__details-info">${s.equipment.charAt(0).toUpperCase()+s.equipment.slice(1)}</p>
            </div>
            <div class="main-modal__details-wrapper">
            <p class="main-modal__details-title">Popular</p>
            <p class="main-modal__details-info">${s.popularity}</p>
            </div>
            </div>
            <div class="main-modal__bottom-details-container">
            <div class="main-modal__details-wrapper main-modal__calories">
            <p class="main-modal__details-title">Burned Calories</p>
            <p class="main-modal__details-info">${s.burnedCalories+"/3 min"}</p>
            </div>
            </div>`,j=`<div class="main-modal__description">${s.description}</div>`,F=`<div class="main-modal__btns-wrapper">
            <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
            <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
            <svg class="main-modal__heart-icon" aria-label="logo icon">
            <use href="./img/icons.svg#icon-heart"></use>
            </svg>
            </button>
            <button class="main-modal__btn main-modal__rating-btn">
            <span class="main-modal__btn-text">Give a rating</span>
            </button>
            </div>`;d.innerHTML=`${`<div class="main-modal__content-container">${b+`<div class="main-modal__content-wrapper">${N+R+x+j} </div> `}</div> ${F}`}`;function Q(f){const _=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star">
              <use href="./img/icons.svg#icon-star"></use>
              </svg></div>`,E=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon">
              <use href="./img/icons.svg#icon-star"></use>
              </svg></div>`;let h="",S=Math.floor(f),w=f-S;for(let I=0;I<5;I++)if(I<S)h+=_;else if(I===S&&w>0){const $=Math.round(w*100);h+=`<div class="main-modal__star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${$}%, rgba(244, 244, 244, 0.2) ${$}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${$}%, rgba(244, 244, 244, 0.2) ${$}%);"><svg class="main-modal__star-icon main-modal__colored-star" >
                  <use href="./img/icons.svg#icon-star"></use>
                  </svg></div>`}else h+=E;return`${h}`}function J(){const f=document.querySelectorAll(".main-modal__details-wrapper");let _=0;return f.forEach(E=>{_+=E.offsetWidth}),_}function W(){const f=document.querySelector(".main-modal__bottom-details-container"),_=document.querySelector(".main-modal__details-wrapper:nth-child(4)"),E=J();function h(w){w?E>364&&f.insertBefore(_,f.firstChild):E>315&&f.insertBefore(_,f.firstChild)}const S=window.matchMedia("(min-width: 768px)");h(S.matches),S.addEventListener("change",w=>{h(w.matches)})}W()};const i=document.getElementById("myModal"),m=document.getElementsByClassName("main-modal__close")[0],B=document.querySelector("body");let l=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];m&&m.addEventListener("click",y),document.addEventListener("keydown",q),window.addEventListener("click",k);const r=a.dataset.id;i.style.display="flex",B.style.overflow="hidden";const c=`https://your-energy.b.goit.study/api/exercises/${r}`;p.get(c).then(s=>{if(s)return localStorage.setItem("currentExercise",JSON.stringify(s.data)),s.data}).then(s=>{u(s);const d=document.getElementById("fav-btn");if(d){const b=l.some(v=>v._id===s._id);d.querySelector(".main-modal__heart-icon use").setAttribute("href",b?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),d.querySelector(".main-modal__btn-text").textContent=b?"Remove from favorites":"Add to favorites",d.addEventListener("click",function(){const v=l.some(x=>x._id===s._id);v?l=l.filter(x=>x._id!==s._id):l.push(s),localStorage.setItem("savedExercises",JSON.stringify(l)),d.querySelector(".main-modal__btn-text").textContent=v?"Add to favorites":"Remove from favorites",d.querySelector(".main-modal__heart-icon use").setAttribute("href",v?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(s=>{console.error("There was a problem with the Axios request:",s)})}})};T.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#myModal");e.addEventListener("click",function(n){if(n.target.closest(".main-modal__rating-btn")){const o={backdrop:document.querySelector(".rating-backdrop"),closeButton:document.querySelector(".rating__close-btn"),submitButton:document.querySelector(".rating__submit-btn"),starsContainer:document.querySelectorAll(".rating__input"),emailInput:document.querySelector(".rating__input-email"),commentInput:document.querySelector(".rating__input-comment"),ratingValue:document.querySelector(".rating__value")};let a=null,i=JSON.parse(localStorage.getItem("currentExercise"))||{};o.ratingValue.innerHTML=i.rating.toString().includes(".")?Math.round(i.rating*10)/10:i.rating+".0";const m=()=>{a=null,o.emailInput.value="",o.commentInput.value="",Array.from(o.starsContainer).forEach(c=>{const u=c.nextElementSibling.querySelector(".rating__icon-star");u.style.fill="var(--second-color-light-theme)",u.style.opacity=.2})},B=()=>{e.style.display="none",o.backdrop.classList.add("modal-open"),o.closeButton.addEventListener("click",l)},l=()=>{m(),o.backdrop.classList.remove("modal-open"),o.closeButton.removeEventListener("click",l),e.style.display="flex",o.submitButton.removeEventListener("click",k),o.starsContainer.forEach(r=>{r.removeEventListener("click",function(c){a=c.target,y()})}),o.backdrop.removeEventListener("click",function(r){r.target===o.backdrop&&!r.target.closest(".rating__close-btn")&&!r.target.closest(".rating__submit-btn")&&l()})},y=()=>{const r=Array.from(o.starsContainer);r.forEach((c,u)=>{const s=c.nextElementSibling.querySelector(".rating__icon-star");c===a||a&&u<r.indexOf(a)?(s.style.fill="var(--stars-color-activ)",s.style.opacity=1):(s.style.fill="var(--second-color-light-theme)",s.style.opacity=.2)})},q=r=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r),k=async r=>{r.preventDefault();const c=a==null?void 0:a.id,u=parseInt(c==null?void 0:c.replace("star",""),10);if(!u||isNaN(u)){g("info","Please add your rating");return}if(!q(o.emailInput.value)){g("info","Please enter a valid email address");return}if(o.commentInput.value.length<=3){g("info","Please leave your comment");return}const s=`https://your-energy.b.goit.study/api/exercises/${i._id}/rating`;try{(await p.patch(s,{rate:u,email:o.emailInput.value,review:o.commentInput.value})).status===200?g("success","Rating submitted successfully!"):g("error","Failed to submit rating")}catch(d){d.response.status===409?g("message","Such email already exists"):d.response.status===404?g("warning","Such exercise not found"):g("error","Failed to submit rating")}l()};o.starsContainer.forEach(r=>{r.addEventListener("click",function(c){a=c.target,y()})}),o.backdrop.addEventListener("click",function(r){r.target===o.backdrop&&!r.target.closest(".rating__close-btn")&&!r.target.closest(".rating__submit-btn")&&l()}),o.closeButton.addEventListener("click",l),o.submitButton.addEventListener("click",k),document.addEventListener("keydown",r=>{r.key==="Escape"&&l()}),B()}})});const D=document.querySelector(".loader-backdrop"),ee={filters:document.getElementById("loader-filters"),exercises:document.querySelector(".js-button")},O={filters:!1,exercises:!1};D.style.display="none";function ce(e,n){const t=ee[e];n&&!O[e]&&t?(O[e]=!0,t.style.display="block",D.style.display="block"):(O[e]=!1,t&&(t.style.display="none",D.style.display="none"))}document.addEventListener("DOMContentLoaded",function(){te(),window.addEventListener("online",function(){M(!0)}),window.addEventListener("offline",function(){M(!1)})});function te(){navigator.onLine?M(!0):M(!1)}function M(e){const n=document.querySelector(".page-error-container");if(e)n&&(n.remove(),document.body.classList.remove("page-error-open"));else if(!n){const t=document.createElement("div");t.classList.add("page-error-container");const o=document.createElement("p");o.textContent="Sorry, the page did not load.",t.appendChild(o),document.body.appendChild(t),document.body.classList.toggle("page-error-open")}}export{ne as a,se as b,ae as c,ie as d,re as e,H as f,g as s,ce as t};
//# sourceMappingURL=showPageError-707a539a.js.map