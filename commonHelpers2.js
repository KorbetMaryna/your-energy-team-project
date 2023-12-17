import{t as $,f as z,s as m,a as O,b as G,c as V,d as N,e as U}from"./assets/showPageError-77b45944.js";import{l as k,a as Y,i as Z}from"./assets/vendor-09c79f2e.js";function g(e){return e[0].toUpperCase()+e.slice(1)}function K(e,s,t){return`      
<li class="exercises-filter-tile-item" data-name=${s} data-filter=${e.toLowerCase()}>
      <div class="exercises-filter-tile-gradient"></div>
      <img class="exercises-filter-tile-img" src="${t}" alt="${s}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
      <div class="exercises-filter-tile-text-wrapper">
          <h3 class="exercises-filter-tile-headline">${g(s)}</h3>
          <p class="exercises-filter-tile-text">${e}</p>
      </div>
</li>`}function J(e,s,t,i,r,a){return`      
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
      <h3 class="exercises-category-tile-name">${s}</h3>
    </div>
    <ul class="exercises-category-tile-bottom">
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        ${t}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        ${g(i)}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        ${g(r)}</li>
    </ul>
</li>`}const o={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let c={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};f(c.filter);w("filters",c);o.filterButtons.forEach(e=>{e.addEventListener("click",()=>{te(c,e),w("filters",c),H(e)})});async function w(e,s){$(!0),await z(e,s).then(t=>{var a;const{page:i,totalPages:r}=t;if((a=t.results[0])!=null&&a.filter){const n="filters";Q(t),L({page:i,totalPages:r,type:n}),I()}else{const n="exercises";B(t),L({page:i,totalPages:r,type:n})}}).catch(t=>{console.log(t.message),m("error","Something went wrong 😔 try again later.")}).finally($(!1))}function Q({results:e}){ie();const s=e.map(({filter:t,name:i,imgURL:r})=>K(t,i,r)).join("");o.tilesFilterList.innerHTML=s}o.tilesFilterList.addEventListener("click",X);function X(e){if(e.preventDefault(),e.currentTarget===e.target)return;let{name:s,filter:t}=e.target.parentNode.dataset;se(c,s,t),w("exercises",c),A(s)}function B({results:e}){if(!e.length)return m("warning","Unfortunately, we don't have any exercises in this category");re(),ee();const s=e.map(({rating:t,name:i,burnedCalories:r,bodyPart:a,target:n,_id:l})=>J(t,i,r,a,n,l)).join("");o.tilesCategoryList.innerHTML=s}function I(){o.headlineCategory.innerText="",o.headlineWrapper.classList.add("visually-hidden"),o.searchForm.classList.add("visually-hidden")}function ee(){o.headlineWrapper.classList.remove("visually-hidden"),o.searchForm.classList.remove("visually-hidden")}function A(e){o.headlineCategory.innerText=g(e)}function f(e){return e!==""?c.limit=window.innerWidth<768?9:12:c.limit=window.innerWidth<768?8:10,c.limit}function H(e){document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")}function te(e,s){let t={bodypart:"",muscles:"",equipment:""};f(e.filter),Object.assign(e,t),e.filter=s.innerText,e.page=1}function se(e,s,t){e.filter="",e.keyword="",t==="body"&&(t="bodypart"),Object.assign(e,{[t]:s}),f(e.filter)}function ie(){o.tilesCategoryList.innerHTML="",o.tilesCategoryList.classList.add("visually-hidden"),o.tilesFilterList.classList.remove("visually-hidden"),v()&&o.tilesCategoryList.classList.remove("category-desktop"),v()&&o.tilesFilterList.classList.add("filter-desktop")}function re(){o.tilesFilterList.innerHTML="",o.tilesFilterList.classList.add("visually-hidden"),o.tilesCategoryList.classList.remove("visually-hidden"),v()&&o.tilesFilterList.classList.remove("filter-desktop"),v()&&o.tilesCategoryList.classList.add("category-desktop")}function v(){return window.innerWidth>=1440}function L({page:e,totalPages:s,type:t,keyword:i,customListener:r}){o.paginationList.innerHTML="",s<=6?n(1,s,e,t):e<4?(n(1,4,e,t),l(),M(s,e)):e>s-3?(h(),l(),n(s-3,s,e,t)):(h(),l(),n(e-1,e+1,e,t),l(),M(s,e));function n(u,S,D,R){for(let p=u;p<=S;p++){const y=document.createElement("span");y.classList.add("exercises-pagination-item"),y.textContent=p,p===Number(D)&&y.classList.add("exercises-pagination-item-active"),y.addEventListener("click",()=>{c.page=p,i&&(c.keyword=i,O(c)),r?r(c.page):w(R,c)}),o.paginationList.appendChild(y)}}function l(){const u=document.createElement("span");u.classList.add("exercises-pagination-item"),u.textContent="...",o.paginationList.appendChild(u)}function h(){n(1,1,e,t)}function M(u,S){n(u,u,S,t)}}const q=document.querySelector(".your-choice-button");class oe{constructor(){this.id="your-choice-modal",this.bodyPartsOptions=[],this.bodyPartsSelectElem=document.getElementById("you-choice-body-part"),this.musclesOptions=[],this.musclesSelectElem=document.getElementById("your-choice-muscle"),this.equipmentOptions=[],this.equipmentSelectElem=document.getElementById("your-choice-equipment"),this.selectGroups=document.querySelectorAll(`#${this.id} .select-group`),this.submitBtnElem=document.getElementById("search-exercises"),this.submitBtnElem.addEventListener("click",()=>{this.triggerSearchExercises()}),k.init()}async show(){k.show(this.id);try{const[s,t,i]=await Promise.all([G(),V(),N()]);this.musclesOptions=s.results,this.bodyPartsOptions=t.results,this.equipmentOptions=i.results,console.log({muscles:s,bodyParts:t,equipment:i}),this.hideLoading(),this.toggleShowSelectGroups(!0),[{filters:this.musclesOptions,elem:this.musclesSelectElem},{filters:this.bodyPartsOptions,elem:this.bodyPartsSelectElem},{filters:this.equipmentOptions,elem:this.equipmentSelectElem}].forEach(({filters:r,elem:a})=>{console.log({filters:r,elem:a});const n=[];for(let l=0;l<r.length;l++){const{name:h}=r[l];n.push(`<option value=${l}>${h}</option>`)}a.innerHTML=n.join(""),this.hideLoading()})}catch(s){console.log("Could not fetch lists of filters for modal"),m("error",s.message)}}hideLoading(){document.querySelector(`#${this.id} .modal__content-loading`).classList.add("hidden")}toggleShowSelectGroups(s){for(const t of this.selectGroups)s?t.classList.remove("hidden"):t.classList.add("hidden")}getFormValues(){return{bodyPart:this.bodyPartsOptions[this.bodyPartsSelectElem.value].name,muscle:this.musclesOptions[this.musclesSelectElem.value].name,equipment:this.equipmentOptions[this.equipmentSelectElem.value].name}}async triggerSearchExercises(){const{bodyPart:s,muscle:t,equipment:i}=this.getFormValues();if(!(!s||!t||!i)){this.submitBtnElem.disabled=!0;try{if(!await this.getAndRenderExercises({page:1})){m("warning","No exercises found. Try another set of muscle, body part and equipment paramaters."),this.submitBtnElem.disabled=!1;return}A("you choice"),I(),k.close(),H(q)}catch(r){m("error",r.message)}finally{this.submitBtnElem.disabled=!1}}}async getAndRenderExercises({page:s=1}){const{bodyPart:t,muscle:i,equipment:r}=this.getFormValues(),a=f("");console.log("Calling api with",{bodyPart:t,muscle:i,equipment:r,page:s,limit:a});const{totalPages:n,results:l}=await U({bodyPart:t,muscle:i,equipment:r,page:s,limit:a});return console.log({results:l}),(l||[]).length?(B({results:l}),L({page:s,totalPages:n,customListener:h=>{this.getAndRenderExercises({page:h})}}),!0):!1}}if(q){const e=new oe;q.addEventListener("click",()=>{e.show()})}const ne=document.querySelector(".footer-sub-form"),ce="https://your-energy.b.goit.study/api/";ne.addEventListener("submit",le);async function le(e){e.preventDefault();const s=e.target.email.value;ae(s)||m("warning","Please enter email in correct format. (test@email.com)");try{const{data:t}=await Y.post(`${ce}subscription`,{email:s});m("success",t.message)}catch(t){console.log(t.response.data.message),m("error",t.response.data.message)}finally{e.target.email.value=""}}const ae=e=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e);function de(e,s=300){let t;return(...i)=>{clearTimeout(t),t=setTimeout(()=>{e.apply(this,i)},s)}}function C(e){e.classList.remove("visually-hidden")}function T(e){e.classList.add("visually-hidden")}const d={searchClearBtnEl:document.querySelector(".js-search-form--btn__clear"),searchInputEl:document.querySelector(".js-search-form--input"),searchIconEl:document.querySelector(".js-search-form--btn__search"),searchClearEl:document.querySelector(".js-search-form--btn__clear"),searchFormEl:document.querySelector(".js-search-form")},ue=de(e=>me(e),400);d.searchClearBtnEl.addEventListener("click",P);d.searchInputEl.addEventListener("input",ue);d.searchFormEl.addEventListener("submit",he);function me({target:e}){e!=null&&e.value.trim()?(C(d.searchClearEl),T(d.searchIconEl)):(T(d.searchClearEl),C(d.searchIconEl))}function P(){d.searchInputEl.value="",T(d.searchClearEl),C(d.searchIconEl)}async function he(e){e.preventDefault();const s=e.target.elements.search.value;if(s.trim()){const t=f(""),{totalPages:i,results:r}=await O({bodypart:c.bodypart||"",muscles:c.muscles||"",equipment:c.equipment||"",page:1,keyword:s,limit:t});B({results:r}),L({page:1,totalPages:i,type:"exercises",keyword:s})}else Z.warning({message:"You should type something before searching!"});P()}const b=document.getElementById("scroll-up");b.addEventListener("click",fe);b.style.display="none";window.onscroll=function(){pe()};function pe(){const e=ye();document.body.scrollTop>e||document.documentElement.scrollTop>e?b.style.display="block":b.style.display="none"}function ye(){const e=window.innerWidth;return e<375?300:e<768?500:e<1440?800:1e3}function fe(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const ge=document.querySelector(".footer-information-list"),W=document.querySelector(".info-close-btn-id"),E=document.querySelector(".info-backdrop-id");document.querySelector(".info-modal");const F=document.querySelector(".terms-close-btn-id"),x=document.querySelector(".terms-backdrop-id");document.querySelector(".terms-modal");ge.addEventListener("click",ve);F.addEventListener("click",j);function ve(e){switch(e.target.classList.value){case"footer-privacy-policy":Le(),W.addEventListener("click",_);break;case"footer-service-terms":be(),F.addEventListener("click",j);break}}function Le(){E.style.opacity="1",E.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function _(){E.style.opacity="0",E.classList.add("is-hidden"),document.body.style.overflow="",W.removeEventListener("click",_)}function be(){x.style.opacity="1",x.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function j(){x.style.opacity="0",x.classList.add("is-hidden"),document.body.style.overflow="",F.removeEventListener("click",j)}
//# sourceMappingURL=commonHelpers2.js.map
