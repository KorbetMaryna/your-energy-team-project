import{a as p,i as J}from"./vendor-1133ef0b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&t(m)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname.split("/").pop();document.querySelectorAll(".header-nav-list-item a").forEach(function(n){const t=n.getAttribute("href").split("/").pop();e===t||e===""&&t==="index.html"?n.classList.add("header-nav-current"):n.classList.remove("header-nav-current")})});function W(){const e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelector(".js-menu-container");e.addEventListener("click",()=>{n.classList.add("is-open")}),o.addEventListener("click",()=>{n.classList.remove("is-open")});const t=window.matchMedia("(min-width: 768px)"),s=i=>{i.matches&&n.classList.remove("is-open")};t.addEventListener("change",s)}W();const L="https://your-energy.b.goit.study/api";async function z(e,o){for(const s of Object.keys(o))o[s]===""&&delete o[s];const n=new URLSearchParams(o),{data:t}=await p(`${L}/${e}?${n}`);return t}async function te(e){for(const t of Object.keys(e))e[t]===""&&delete e[t];const o=new URLSearchParams(e),{data:n}=await p(`${L}/exercises?${o}`);return n}const oe=async({page:e=1,limit:o=100}={})=>{const{data:n}=await p.get(`${L}/filters?filter=Muscles&page=${e}&limit=${o}`);return n},ne=async({page:e=1,limit:o=100}={})=>{const{data:n}=await p.get(`${L}/filters?filter=Body+parts&page=${e}&limit=${o}`);return n},ae=async({page:e=1,limit:o=100}={})=>{const{data:n}=await p.get(`${L}/filters?filter=Equipment&page=${e}&limit=${o}`);return n},se=async({bodyPart:e,muscle:o,equipment:n,page:t=1,limit:s=100})=>{const i=new URLSearchParams({bodypart:e,muscles:o,equipment:n,page:t,limit:s}),{data:m}=await p.get(`${L}/exercises?${i}`);return m},A={colorSuccess:"#0ecc2e",colorError:"#f58e82",colorInfo:"#9dfab5"};function g(e,o){let n;e==="error"?n=A.colorError:e==="success"?n=A.colorSuccess:n=A.colorInfo,J.show({messageColor:n,backgroundColor:"rgba(36, 36, 36, 0.8)",messageSize:"18px",position:"bottomRight",progressBar:!1,animateInside:!1,timeout:3e3,targetFirst:!1,message:o,position:"topRight",animateInside:!0})}const H=document.querySelector(".quote-wrapper");async function G(){const e=new Date().toLocaleDateString(),o=V();if(X(o,e))R(o.quote,o.author);else{let{quote:n,author:t}=await Z();R(n,t),K(n,t,e)}}function K(e,o,n){const t={quote:e,author:o,date:n};localStorage.setItem("quoteOfDay",JSON.stringify(t))}function V(){const e=localStorage.getItem("quoteOfDay");return JSON.parse(e)}async function Z(){try{const{quote:e,author:o}=await z("quote","");return{quote:e,author:o}}catch(e){console.log(e.message),g("error","Something went wrong 😔 try again later.")}}function R(e,o){const n=`<p class="quote quote-text">${e}</p>
    <p class="qoute-author">${o}</p>`;H.insertAdjacentHTML("beforeend",n)}function X(e,o){return!(!e||!e.quote||!e.date||!e.author||e.date!=o)}G();const P=document.querySelector(".js-tiles-category-list");let C=null;window.onload=function(){P?C=document.getElementsByClassName("exercises-tiles-category-list"):C=document.getElementsByClassName("fav-workouts-list");for(let e=0;e<C.length;e+=1)C[e].addEventListener("click",function(n){const t=P?n.target.closest(".exercises-category-tile-button"):n.target.closest(".fav-workouts-start-button"),s=P?n.target.closest(".exercises-category-tile-item"):n.target.closest(".fav-workouts-list-item");if(t){let v=function(){i.style.display="none",localStorage.removeItem("currentExercise"),document.body.style.overflow="auto",document.removeEventListener("keydown",q),m.removeEventListener("click",v),window.removeEventListener("click",k)},q=function(a){(a.key==="Escape"||a.keyCode===27)&&v()},k=function(a){a.target===i&&v()},u=function(a){const d=document.getElementById("exerciseDetails");let b=null;a.gifUrl?b=`<div class="main-modal__gif-wrapper">
              <img class="gif" src="${a.gifUrl}" alt="Exercise GIF">
              <div class="gif-overlay"></div>
              </div>`:b=`<div class="main-modal__gif-wrapper">
              <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
              <div class="main-modal__gif-overlay"></div>
              </div>`;const D=`<p class='main-modal__card-title'>${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</p>`,y=F(Math.round(a.rating*10)/10),N=`<div class='main-modal__rating-container'>
            <span class="main-modal__rating">${a.rating.toString().includes(".")?Math.round(a.rating*10)/10:a.rating+".0"}</span>
            ${y}
            </div>`,x=`<div class="main-modal__details-container">
            <div class="main-modal__details-wrapper">
            <p class="main-modal__details-title">Target</p>
            <p class="main-modal__details-info">${a.target.charAt(0).toUpperCase()+a.target.slice(1)}</p>
            </div>
            <div class="main-modal__details-wrapper">
            <p class="main-modal__details-title body-part">Body Part</p>
            <p class="main-modal__details-info">${a.bodyPart.charAt(0).toUpperCase()+a.bodyPart.slice(1)}</p>
            </div>
            <div class="main-modal__details-wrapper">
            <p class="main-modal__details-title">Equipment</p>
            <p class="main-modal__details-info">${a.equipment.charAt(0).toUpperCase()+a.equipment.slice(1)}</p>
            </div>
            <div class="main-modal__details-wrapper">
            <p class="main-modal__details-title">Popular</p>
            <p class="main-modal__details-info">${a.popularity}</p>
            </div>
            </div>
            <div class="main-modal__bottom-details-container">
            <div class="main-modal__details-wrapper main-modal__calories">
            <p class="main-modal__details-title">Burned Calories</p>
            <p class="main-modal__details-info">${a.burnedCalories+"/3 min"}</p>
            </div>
            </div>`,U=`<div class="main-modal__description">${a.description}</div>`,T=`<div class="main-modal__btns-wrapper">
            <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
            <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
            <svg class="main-modal__heart-icon" aria-label="logo icon">
            <use href="./img/icons.svg#icon-heart"></use>
            </svg>
            </button>
            <button class="main-modal__btn main-modal__rating-btn">
            <span class="main-modal__btn-text">Give a rating</span>
            </button>
            </div>`;d.innerHTML=`${`<div class="main-modal__content-container">${b+`<div class="main-modal__content-wrapper">${D+N+x+U} </div> `}</div> ${T}`}`;function F(f){const _=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star">
              <use href="./img/icons.svg#icon-star"></use>
              </svg></div>`,E=`<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon">
              <use href="./img/icons.svg#icon-star"></use>
              </svg></div>`;let h="",S=Math.floor(f),w=f-S;for(let $=0;$<5;$++)if($<S)h+=_;else if($===S&&w>0){const I=Math.round(w*100);h+=`<div class="main-modal__star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${I}%, rgba(244, 244, 244, 0.2) ${I}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${I}%, rgba(244, 244, 244, 0.2) ${I}%);"><svg class="main-modal__star-icon main-modal__colored-star" >
                  <use href="./img/icons.svg#icon-star"></use>
                  </svg></div>`}else h+=E;return`${h}`}function j(){const f=document.querySelectorAll(".main-modal__details-wrapper");let _=0;return f.forEach(E=>{_+=E.offsetWidth}),_}function Q(){const f=document.querySelector(".main-modal__bottom-details-container"),_=document.querySelector(".main-modal__details-wrapper:nth-child(4)"),E=j();function h(w){w?E>364&&f.insertBefore(_,f.firstChild):E>315&&f.insertBefore(_,f.firstChild)}const S=window.matchMedia("(min-width: 768px)");h(S.matches),S.addEventListener("change",w=>{h(w.matches)})}Q()};const i=document.getElementById("myModal"),m=document.getElementsByClassName("main-modal__close")[0],B=document.querySelector("body");let l=localStorage.getItem("savedExercises")?JSON.parse(localStorage.getItem("savedExercises")):[];m&&m.addEventListener("click",v),document.addEventListener("keydown",q),window.addEventListener("click",k);const r=s.dataset.id;i.style.display="flex",B.style.overflow="hidden";const c=`https://your-energy.b.goit.study/api/exercises/${r}`;p.get(c).then(a=>{if(a)return localStorage.setItem("currentExercise",JSON.stringify(a.data)),a.data}).then(a=>{u(a);const d=document.getElementById("fav-btn");if(d){const b=l.some(y=>y._id===a._id);d.querySelector(".main-modal__heart-icon use").setAttribute("href",b?"./img/icons.svg#icon-trash":"./img/icons.svg#icon-heart"),d.querySelector(".main-modal__btn-text").textContent=b?"Remove from favorites":"Add to favorites",d.addEventListener("click",function(){const y=l.some(x=>x._id===a._id);y?l=l.filter(x=>x._id!==a._id):l.push(a),localStorage.setItem("savedExercises",JSON.stringify(l)),d.querySelector(".main-modal__btn-text").textContent=y?"Add to favorites":"Remove from favorites",d.querySelector(".main-modal__heart-icon use").setAttribute("href",y?"./img/icons.svg#icon-heart":"./img/icons.svg#icon-trash")})}}).catch(a=>{console.error("There was a problem with the Axios request:",a)})}})};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#myModal");e.addEventListener("click",function(o){if(o.target.closest(".main-modal__rating-btn")){const t={backdrop:document.querySelector(".rating-backdrop"),closeButton:document.querySelector(".rating__close-btn"),submitButton:document.querySelector(".rating__submit-btn"),starsContainer:document.querySelectorAll(".rating__input"),emailInput:document.querySelector(".rating__input-email"),commentInput:document.querySelector(".rating__input-comment"),ratingValue:document.querySelector(".rating__value")};let s=null,i=JSON.parse(localStorage.getItem("currentExercise"))||{};t.ratingValue.innerHTML=i.rating.toString().includes(".")?Math.round(i.rating*10)/10:i.rating+".0";const m=()=>{s=null,t.emailInput.value="",t.commentInput.value="",Array.from(t.starsContainer).forEach(c=>{const u=c.nextElementSibling.querySelector(".rating__icon-star");u.style.fill="var(--second-color-light-theme)",u.style.opacity=.2})},B=()=>{e.style.display="none",t.backdrop.classList.add("modal-open"),t.closeButton.addEventListener("click",l)},l=()=>{m(),t.backdrop.classList.remove("modal-open"),t.closeButton.removeEventListener("click",l),e.style.display="flex",t.submitButton.removeEventListener("click",k),t.starsContainer.forEach(r=>{r.removeEventListener("click",function(c){s=c.target,v()})}),t.backdrop.removeEventListener("click",function(r){r.target===t.backdrop&&!r.target.closest(".rating__close-btn")&&!r.target.closest(".rating__submit-btn")&&l()})},v=()=>{const r=Array.from(t.starsContainer);r.forEach((c,u)=>{const a=c.nextElementSibling.querySelector(".rating__icon-star");c===s||s&&u<r.indexOf(s)?(a.style.fill="var(--stars-color-activ)",a.style.opacity=1):(a.style.fill="var(--second-color-light-theme)",a.style.opacity=.2)})},q=r=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r),k=async r=>{r.preventDefault();const c=s==null?void 0:s.id,u=parseInt(c==null?void 0:c.replace("star",""),10);if(!u||isNaN(u)){g("info","Please add your rating");return}if(!q(t.emailInput.value)){g("info","Please enter a valid email address");return}if(t.commentInput.value.length<=3){g("info","Please leave your comment");return}const a=`https://your-energy.b.goit.study/api/exercises/${i._id}/rating`;try{(await p.patch(a,{rate:u,email:t.emailInput.value,review:t.commentInput.value})).status===200?g("success","Rating submitted successfully!"):g("error","Failed to submit rating")}catch(d){d.response.status===409?g("message","Such email already exists"):d.response.status===404?g("warning","Such exercise not found"):g("error","Failed to submit rating")}l()};t.starsContainer.forEach(r=>{r.addEventListener("click",function(c){s=c.target,v()})}),t.backdrop.addEventListener("click",function(r){r.target===t.backdrop&&!r.target.closest(".rating__close-btn")&&!r.target.closest(".rating__submit-btn")&&l()}),t.closeButton.addEventListener("click",l),t.submitButton.addEventListener("click",k),document.addEventListener("keydown",r=>{r.key==="Escape"&&l()}),B()}})});const O=document.querySelector(".loader-backdrop");function ie(e){e&&!O.classList.contains("loader-backdrop-open")?(document.body.style.overflow="hidden",O.classList.add("loader-backdrop-open")):e||setTimeout(()=>{document.body.style.overflow="",O.classList.remove("loader-backdrop-open")},1e3)}document.addEventListener("DOMContentLoaded",function(){Y(),window.addEventListener("online",function(){M(!0)}),window.addEventListener("offline",function(){M(!1)})});function Y(){navigator.onLine?M(!0):M(!1)}function M(e){const o=document.querySelector(".page-error-container");if(e)o&&(o.remove(),document.body.classList.remove("page-error-open"));else if(!o){const n=document.createElement("div");n.classList.add("page-error-container");const t=document.createElement("p");t.textContent="Sorry, the page did not load.",n.appendChild(t),document.body.appendChild(n),document.body.classList.toggle("page-error-open")}}export{te as a,oe as b,ne as c,ae as d,se as e,z as f,g as s,ie as t};
//# sourceMappingURL=showPageError-35795e77.js.map
