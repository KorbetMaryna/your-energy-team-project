import{t as q,f as O,a as I,b as P,c as M,d as H,e as _}from"./assets/quote-ff5326c2.js";import{i as m,l as E,a as A}from"./assets/vendor-09c79f2e.js";function f(e){return e[0].toUpperCase()+e.slice(1)}function W(e,s,t){return`      
<li class="exercises-filter-tile-item" data-name=${s} data-filter=${e.toLowerCase()}>
      <div class="exercises-filter-tile-gradient"></div>
      <img class="exercises-filter-tile-img" src="${t}" alt="${s}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
      <div class="exercises-filter-tile-text-wrapper">
          <h3 class="exercises-filter-tile-headline">${f(s)}</h3>
          <p class="exercises-filter-tile-text">${e}</p>
      </div>
</li>`}function D(e,s,t,i,n,r){return`      
<li class="exercises-category-tile-item" data-id=${r}>
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
      <h3 class="exercises-category-tile-name">${s}</h3>
    </div>
    <ul class="exercises-category-tile-bottom">
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        ${t}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        ${f(i)}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        ${f(n)}</li>
    </ul>
</li>`}m.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const o={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let c={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};function y(e,s){return e!==""?c.limit=s<768?9:12:c.limit=s<768?8:10,c.limit}y(c.filter,window.innerWidth);b("filters",c);o.filterButtons.forEach(e=>{e.addEventListener("click",()=>{Object.assign(c,{bodypart:"",muscles:"",equipment:""}),c.filter=e.innerText,c.page=1,b("filters",c),j(e)})});function j(e){document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")}async function b(e,s){q(!0),await O(e,s).then(t=>{var r;const{page:i,totalPages:n}=t;if((r=t.results[0])!=null&&r.filter){y(c.filter,window.innerWidth);const l="filters";R(t),L({page:i,totalPages:n,markupType:l}),o.headlineCategory.innerText="",o.headlineWrapper.classList.add("visually-hidden"),T()}else{y(c.filter,window.innerWidth);const l="exercises";k(t),L({page:i,totalPages:n,markupType:l})}}).catch(t=>{console.log(t),m.error({message:"Something went wrong :-( try again later."})}).finally(q(!1))}function R({results:e}){o.tilesCategoryList.innerHTML="",o.tilesCategoryList.classList.add("visually-hidden"),o.tilesFilterList.classList.remove("visually-hidden");const s=e.map(({filter:t,name:i,imgURL:n})=>W(t,i,n)).join("");o.tilesFilterList.innerHTML=s}var C;(C=o.tilesFilterList)==null||C.addEventListener("click",U);function U(e){if(e.preventDefault(),Object.assign(c,{filter:"",bodypart:"",muscles:"",equipment:""}),e.currentTarget===e.target)return;let{name:t,filter:i}=e.target.parentNode.dataset;i==="body"&&(i="bodypart"),Object.assign(c,{[i]:t}),b("exercises",c),F(t),o.searchForm.classList.remove("visually-hidden")}function F(e){o.headlineWrapper.classList.remove("visually-hidden"),o.headlineCategory.innerText=f(e)}function T(){o.searchForm.classList.add("visually-hidden")}function k({results:e}){if(!e.length)return m.warning({message:"Unfortunately, we don't have any exercises in this category"});o.tilesFilterList.innerHTML="",o.tilesFilterList.classList.add("visually-hidden"),o.tilesCategoryList.classList.remove("visually-hidden");const s=e.map(({rating:t,name:i,burnedCalories:n,bodyPart:r,target:l,_id:a})=>D(t,i,n,r,l,a)).join("");o.tilesCategoryList.innerHTML=s}function L({page:e,totalPages:s,type:t,customListener:i}){o.paginationList.innerHTML="",s<=6?r(1,s,e,t):e<4?(r(1,4,e,t),l(),h(s,e)):e>s-3?(a(),l(),r(s-3,s,e,t)):(a(),l(),r(e-1,e+1,e,t),l(),h(s,e));function r(d,v,B,$){for(let p=d;p<=v;p++){const g=document.createElement("span");g.classList.add("exercises-pagination-item"),g.textContent=p,p===Number(B)&&g.classList.add("exercises-pagination-item-active"),g.addEventListener("click",()=>{c.page=p,i?i(c.page):b($,c)}),o.paginationList.appendChild(g)}}function l(){const d=document.createElement("span");d.classList.add("exercises-pagination-item"),d.textContent="...",o.paginationList.appendChild(d)}function a(){r(1,1,e,t)}function h(d,v){r(d,d,v,t)}}const x=document.querySelector(".your-choice-button");class G{constructor(){this.id="your-choice-modal",this.bodyPartsOptions=[],this.bodyPartsSelectElem=document.getElementById("you-choice-body-part"),this.musclesOptions=[],this.musclesSelectElem=document.getElementById("your-choice-muscle"),this.equipmentOptions=[],this.equipmentSelectElem=document.getElementById("your-choice-equipment"),this.selectGroups=document.querySelectorAll(`#${this.id} .select-group`),this.submitBtnElem=document.getElementById("search-exercises"),this.submitBtnElem.addEventListener("click",()=>{this.triggerSearchExercises()}),E.init()}async show(){E.show(this.id);try{const[s,t,i]=await Promise.all([I(),P(),M()]);this.musclesOptions=s.results,this.bodyPartsOptions=t.results,this.equipmentOptions=i.results,console.log({muscles:s,bodyParts:t,equipment:i}),this.hideLoading(),this.toggleShowSelectGroups(!0),[{filters:this.musclesOptions,elem:this.musclesSelectElem},{filters:this.bodyPartsOptions,elem:this.bodyPartsSelectElem},{filters:this.equipmentOptions,elem:this.equipmentSelectElem}].forEach(({filters:n,elem:r})=>{console.log({filters:n,elem:r});const l=[];for(let a=0;a<n.length;a++){const{name:h}=n[a];l.push(`<option value=${a}>${h}</option>`)}r.innerHTML=l.join(""),this.hideLoading()})}catch(s){const t="Could not fetch lists of filters for modal";console.error(t,s),m.error({message:t})}}hideLoading(){document.querySelector(`#${this.id} .modal__content-loading`).classList.add("hidden")}toggleShowSelectGroups(s){for(const t of this.selectGroups)s?t.classList.remove("hidden"):t.classList.add("hidden")}getFormValues(){return{bodyPart:this.bodyPartsOptions[this.bodyPartsSelectElem.value].name,muscle:this.musclesOptions[this.musclesSelectElem.value].name,equipment:this.equipmentOptions[this.equipmentSelectElem.value].name}}async triggerSearchExercises(){const{bodyPart:s,muscle:t,equipment:i}=this.getFormValues();if(!(!s||!t||!i)){this.submitBtnElem.disabled=!0;try{if(!await this.getAndRenderExercises({page:1})){m.warning({message:"No exercises found. Try another set of muscle, body part and equipment paramaters."}),this.submitBtnElem.disabled=!1;return}F("you choice"),T(),E.close(),j(x)}catch(n){const r="Could not fetch exercises because of error";console.error(r,n),m.error({message:r})}finally{this.submitBtnElem.disabled=!1}}}async getAndRenderExercises({page:s=1}){const{bodyPart:t,muscle:i,equipment:n}=this.getFormValues(),r=y();console.log("Calling api with",{bodyPart:t,muscle:i,equipment:n,page:s,limit:r});const{totalPages:l,results:a}=await H({bodyPart:t,muscle:i,equipment:n,page:s,limit:r});return console.log({results:a}),(a||[]).length?(k({results:a}),L({page:s,totalPages:l,customListener:h=>{this.getAndRenderExercises({page:h})}}),!0):!1}}if(x){const e=new G;x.addEventListener("click",()=>{e.show()})}const N=document.querySelector(".footer-sub-form"),V="https://your-energy.b.goit.study/api/";N.addEventListener("submit",z);async function z(e){e.preventDefault();const s=e.target.email.value;try{const{data:t}=await A.post(`${V}subscription`,{email:s});K(t.message)}catch(t){_(t.response.data.message)}}function K(e){m.success({message:`${e}`})}function Y(e,s=300){let t;return(...i)=>{clearTimeout(t),t=setTimeout(()=>{e.apply(this,i)},s)}}function S(e){e.classList.remove("visually-hidden")}function w(e){e.classList.add("visually-hidden")}const u={searchClearBtnEl:document.querySelector(".js-search-form--btn__clear"),searchInputEl:document.querySelector(".js-search-form--input"),searchIconEl:document.querySelector(".js-search-form--btn__search"),searchClearEl:document.querySelector(".js-search-form--btn__clear"),searchFormEl:document.querySelector(".js-search-form")},J=Y(e=>Q(e),400);u.searchClearBtnEl.addEventListener("click",X);u.searchInputEl.addEventListener("input",J);u.searchFormEl.addEventListener("submit",Z);function Q({target:e}){e!=null&&e.value.trim()?(S(u.searchClearEl),w(u.searchIconEl)):(w(u.searchClearEl),S(u.searchIconEl))}function X(){u.searchInputEl.value="",w(u.searchClearEl),S(u.searchIconEl)}function Z(e){e.preventDefault()}
//# sourceMappingURL=commonHelpers2.js.map
