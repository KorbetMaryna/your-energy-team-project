import{t as $,f as V,s as u,a as O,b as G,c as z,d as N,e as U}from"./assets/showPageError-66e12677.js";import{l as k,a as Y}from"./assets/vendor-1133ef0b.js";function g(e){return e[0].toUpperCase()+e.slice(1)}function Z(e,t,s){return`      
<li class="exercises-filter-tile-item" data-name=${t} data-filter=${e.toLowerCase()}>
      <div class="exercises-filter-tile-gradient"></div>
      <img class="exercises-filter-tile-img" src="${s}" alt="${t}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
      <div class="exercises-filter-tile-text-wrapper">
          <h3 class="exercises-filter-tile-headline">${g(t)}</h3>
          <p class="exercises-filter-tile-text">${e}</p>
      </div>
</li>`}function K(e,t,s,i,r,a){return`      
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
        ${g(i)}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        ${g(r)}</li>
    </ul>
</li>`}const n={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let c={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};f(c.filter);w("filters",c);n.filterButtons.forEach(e=>{e.addEventListener("click",()=>{ee(c,e),w("filters",c),H(e)})});async function w(e,t){$(!0),await V(e,t).then(s=>{var a;const{page:i,totalPages:r}=s;if((a=s.results[0])!=null&&a.filter){const o="filters";J(s),L({page:i,totalPages:r,type:o}),I()}else{const o="exercises";B(s),L({page:i,totalPages:r,type:o})}}).catch(s=>{console.log(s.message),u("error","Something went wrong 😔 try again later.")}).finally(()=>$(!1))}function J({results:e}){se();const t=e.map(({filter:s,name:i,imgURL:r})=>Z(s,i,r)).join("");n.tilesFilterList.innerHTML=t}n.tilesFilterList.addEventListener("click",Q);function Q(e){if(e.preventDefault(),e.currentTarget===e.target)return;let{name:t,filter:s}=e.target.parentNode.dataset;te(c,t,s),w("exercises",c),A(t)}function B({results:e}){if(!e.length)return u("warning","Unfortunately, we don't have any exercises in this category");ie(),X();const t=e.map(({rating:s,name:i,burnedCalories:r,bodyPart:a,target:o,_id:l})=>K(s,i,r,a,o,l)).join("");n.tilesCategoryList.innerHTML=t}function I(){n.headlineCategory.innerText="",n.headlineWrapper.classList.add("visually-hidden"),n.searchForm.classList.add("visually-hidden")}function X(){n.headlineWrapper.classList.remove("visually-hidden"),n.searchForm.classList.remove("visually-hidden")}function A(e){n.headlineCategory.innerText=g(e)}function f(e){return e!==""?c.limit=window.innerWidth<768?9:12:c.limit=window.innerWidth<768?8:10,c.limit}function H(e){document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")}function ee(e,t){let s={bodypart:"",muscles:"",equipment:""};f(e.filter),Object.assign(e,s),e.filter=t.innerText,e.page=1}function te(e,t,s){e.filter="",e.keyword="",s==="body"&&(s="bodypart"),Object.assign(e,{[s]:t}),f(e.filter)}function se(){n.tilesCategoryList.innerHTML="",n.tilesCategoryList.classList.add("visually-hidden"),n.tilesFilterList.classList.remove("visually-hidden"),v()&&n.tilesCategoryList.classList.remove("category-desktop"),v()&&n.tilesFilterList.classList.add("filter-desktop")}function ie(){n.tilesFilterList.innerHTML="",n.tilesFilterList.classList.add("visually-hidden"),n.tilesCategoryList.classList.remove("visually-hidden"),v()&&n.tilesFilterList.classList.remove("filter-desktop"),v()&&n.tilesCategoryList.classList.add("category-desktop")}function v(){return window.innerWidth>=1440}function L({page:e,totalPages:t,type:s,keyword:i,customListener:r}){if(n.paginationList.innerHTML="",t<=1)return;t<=6?o(1,t,e,s):e<4?(o(1,4,e,s),l(),M(t,e)):e>t-3?(h(),l(),o(t-3,t,e,s)):(h(),l(),o(e-1,e+1,e,s),l(),M(t,e));function o(m,S,D,R){for(let p=m;p<=S;p++){const y=document.createElement("li");y.classList.add("exercises-pagination-item"),y.textContent=p,p===Number(D)&&y.classList.add("exercises-pagination-item-active"),y.addEventListener("click",()=>{c.page=p,i&&(c.keyword=i,O(c)),r?r(c.page):w(R,c)}),n.paginationList.appendChild(y)}}function l(){const m=document.createElement("span");m.classList.add("exercises-pagination-item"),m.textContent="...",n.paginationList.appendChild(m)}function h(){o(1,1,e,s)}function M(m,S){o(m,m,S,s)}}const q=document.querySelector(".your-choice-button");class re{constructor(){this.id="your-choice-modal",this.bodyPartsOptions=[],this.bodyPartsSelectElem=document.getElementById("you-choice-body-part"),this.musclesOptions=[],this.musclesSelectElem=document.getElementById("your-choice-muscle"),this.equipmentOptions=[],this.equipmentSelectElem=document.getElementById("your-choice-equipment"),this.selectGroups=document.querySelectorAll(`#${this.id} .select-group`),this.submitBtnElem=document.getElementById("search-exercises"),this.submitBtnElem.addEventListener("click",()=>{this.triggerSearchExercises()}),k.init()}async show(){k.show(this.id);try{const[t,s,i]=await Promise.all([G(),z(),N()]);this.musclesOptions=t.results,this.bodyPartsOptions=s.results,this.equipmentOptions=i.results,this.hideLoading(),this.toggleShowSelectGroups(!0),[{filters:this.musclesOptions,elem:this.musclesSelectElem},{filters:this.bodyPartsOptions,elem:this.bodyPartsSelectElem},{filters:this.equipmentOptions,elem:this.equipmentSelectElem}].forEach(({filters:r,elem:a})=>{const o=[];for(let l=0;l<r.length;l++){const{name:h}=r[l];o.push(`<option value=${l}>${h}</option>`)}a.innerHTML=o.join(""),this.hideLoading()})}catch(t){console.log("Could not fetch lists of filters for modal"),u("error",t.message)}}hideLoading(){document.querySelector(`#${this.id} .modal__content-loading`).classList.add("hidden")}toggleShowSelectGroups(t){for(const s of this.selectGroups)t?s.classList.remove("hidden"):s.classList.add("hidden")}getFormValues(){return{bodyPart:this.bodyPartsOptions[this.bodyPartsSelectElem.value].name,muscle:this.musclesOptions[this.musclesSelectElem.value].name,equipment:this.equipmentOptions[this.equipmentSelectElem.value].name}}async triggerSearchExercises(){const{bodyPart:t,muscle:s,equipment:i}=this.getFormValues();if(!(!t||!s||!i)){this.submitBtnElem.disabled=!0;try{if(!await this.getAndRenderExercises({page:1})){u("warning","No exercises found. Try another set of muscle, body part and equipment paramaters."),this.submitBtnElem.disabled=!1;return}A("you choice"),I(),k.close(),H(q)}catch(r){u("error",r.message)}finally{this.submitBtnElem.disabled=!1}}}async getAndRenderExercises({page:t=1}){const{bodyPart:s,muscle:i,equipment:r}=this.getFormValues(),a=f("");console.log("Calling api with",{bodyPart:s,muscle:i,equipment:r,page:t,limit:a});const{totalPages:o,results:l}=await U({bodyPart:s,muscle:i,equipment:r,page:t,limit:a});return console.log({results:l}),(l||[]).length?(B({results:l}),L({page:t,totalPages:o,customListener:h=>{this.getAndRenderExercises({page:h})}}),!0):!1}}if(q){const e=new re;q.addEventListener("click",()=>{e.show()})}const ne=document.querySelector(".footer-sub-form"),oe="https://your-energy.b.goit.study/api/";ne.addEventListener("submit",ce);async function ce(e){e.preventDefault();const t=e.target.email.value;if(!(i=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i))(t)){u("warning","Please enter email in correct format. (test@email.com)");return}try{const{data:i}=await Y.post(`${oe}subscription`,{email:t});u("success",i.message)}catch(i){console.log(i.response.data.message),u("error",i.response.data.message)}finally{e.target.email.value=""}}function le(e,t=300){let s;return(...i)=>{clearTimeout(s),s=setTimeout(()=>{e.apply(this,i)},t)}}function C(e){e.classList.remove("visually-hidden")}function T(e){e.classList.add("visually-hidden")}const d={searchClearBtnEl:document.querySelector(".js-search-form--btn__clear"),searchInputEl:document.querySelector(".js-search-form--input"),searchIconEl:document.querySelector(".js-search-form--btn__search"),searchClearEl:document.querySelector(".js-search-form--btn__clear"),searchFormEl:document.querySelector(".js-search-form")},ae=le(e=>de(e),400);d.searchClearBtnEl.addEventListener("click",P);d.searchInputEl.addEventListener("input",ae);d.searchFormEl.addEventListener("submit",ue);function de({target:e}){e!=null&&e.value.trim()?(C(d.searchClearEl),T(d.searchIconEl)):(T(d.searchClearEl),C(d.searchIconEl))}function P(){d.searchInputEl.value="",T(d.searchClearEl),C(d.searchIconEl)}async function ue(e){e.preventDefault();const t=e.target.elements.search.value;if(t.trim()){const s=f(""),{totalPages:i,results:r}=await O({bodypart:c.bodypart||"",muscles:c.muscles||"",equipment:c.equipment||"",page:1,keyword:t,limit:s});B({results:r}),L({page:1,totalPages:i,type:"exercises",keyword:t})}else u("warning","You should type something before searching!");P()}const E=document.getElementById("scroll-up");E.addEventListener("click",pe);E.style.display="none";window.onscroll=function(){me()};function me(){const e=he();document.body.scrollTop>e||document.documentElement.scrollTop>e?E.style.display="block":E.style.display="none"}function he(){const e=window.innerWidth;return e<375?300:e<768?500:e<1440?800:1e3}function pe(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const ye=document.querySelector(".footer-information-list"),W=document.querySelector(".info-close-btn-id"),b=document.querySelector(".info-backdrop-id");document.querySelector(".info-modal");const F=document.querySelector(".terms-close-btn-id"),x=document.querySelector(".terms-backdrop-id");document.querySelector(".terms-modal");ye.addEventListener("click",fe);F.addEventListener("click",j);function fe(e){switch(e.target.classList.value){case"footer-privacy-policy":ge(),W.addEventListener("click",_);break;case"footer-service-terms":ve(),F.addEventListener("click",j);break}}function ge(){b.style.opacity="1",b.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function _(){b.style.opacity="0",b.classList.add("is-hidden"),document.body.style.overflow="",W.removeEventListener("click",_)}function ve(){x.style.opacity="1",x.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function j(){x.style.opacity="0",x.classList.add("is-hidden"),document.body.style.overflow="",F.removeEventListener("click",j)}
//# sourceMappingURL=commonHelpers2.js.map
