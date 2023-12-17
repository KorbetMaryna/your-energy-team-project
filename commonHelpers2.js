import{t as M,f as R,a as O,b as G,c as N,d as U,e as V,g as z}from"./assets/showPageError-974e933d.js";import{i as m,l as k,a as Y}from"./assets/vendor-09c79f2e.js";function g(e){return e[0].toUpperCase()+e.slice(1)}function K(e,s,t){return`      
<li class="exercises-filter-tile-item" data-name=${s} data-filter=${e.toLowerCase()}>
      <div class="exercises-filter-tile-gradient"></div>
      <img class="exercises-filter-tile-img" src="${t}" alt="${s}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
      <div class="exercises-filter-tile-text-wrapper">
          <h3 class="exercises-filter-tile-headline">${g(s)}</h3>
          <p class="exercises-filter-tile-text">${e}</p>
      </div>
</li>`}function J(e,s,t,i,r,l){return`      
<li class="exercises-category-tile-item" data-id=${l}>
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
</li>`}m.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const o={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let c={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};f(c.filter);S("filters",c);o.filterButtons.forEach(e=>{e.addEventListener("click",()=>{ee(c,e),S("filters",c),H(e)})});async function S(e,s){M(!0),await R(e,s).then(t=>{var l;const{page:i,totalPages:r}=t;if((l=t.results[0])!=null&&l.filter){const n="filters";Q(t),b({page:i,totalPages:r,type:n}),$()}else{const n="exercises";B(t),b({page:i,totalPages:r,type:n})}}).catch(t=>{console.log(t),m.error({message:"Something went wrong :-( try again later."})}).finally(M(!1))}function Q({results:e}){se();const s=e.map(({filter:t,name:i,imgURL:r})=>K(t,i,r)).join("");o.tilesFilterList.innerHTML=s}o.tilesFilterList.addEventListener("click",X);function X(e){if(e.preventDefault(),e.currentTarget===e.target)return;let{name:s,filter:t}=e.target.parentNode.dataset;te(c,s,t),S("exercises",c),I(s)}function B({results:e}){if(!e.length)return m.warning({message:"Unfortunately, we don't have any exercises in this category"});ie(),Z();const s=e.map(({rating:t,name:i,burnedCalories:r,bodyPart:l,target:n,_id:a})=>J(t,i,r,l,n,a)).join("");o.tilesCategoryList.innerHTML=s}function $(){o.headlineCategory.innerText="",o.headlineWrapper.classList.add("visually-hidden"),o.searchForm.classList.add("visually-hidden")}function Z(){o.headlineWrapper.classList.remove("visually-hidden"),o.searchForm.classList.remove("visually-hidden")}function I(e){o.headlineCategory.innerText=g(e)}function f(e){return e!==""?c.limit=window.innerWidth<768?9:12:c.limit=window.innerWidth<768?8:10,c.limit}function H(e){document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")}function ee(e,s){let t={bodypart:"",muscles:"",equipment:""};f(e.filter),Object.assign(e,t),e.filter=s.innerText,e.page=1}function te(e,s,t){e.filter="",e.keyword="",t==="body"&&(t="bodypart"),Object.assign(e,{[t]:s}),f(e.filter)}function se(){o.tilesCategoryList.innerHTML="",o.tilesCategoryList.classList.add("visually-hidden"),o.tilesFilterList.classList.remove("visually-hidden"),v()&&o.tilesCategoryList.classList.remove("category-desktop"),v()&&o.tilesFilterList.classList.add("filter-desktop")}function ie(){o.tilesFilterList.innerHTML="",o.tilesFilterList.classList.add("visually-hidden"),o.tilesCategoryList.classList.remove("visually-hidden"),v()&&o.tilesFilterList.classList.remove("filter-desktop"),v()&&o.tilesCategoryList.classList.add("category-desktop")}function v(){return window.innerWidth>=1440}function b({page:e,totalPages:s,type:t,keyword:i,customListener:r}){o.paginationList.innerHTML="",s<=6?n(1,s,e,t):e<4?(n(1,4,e,t),a(),j(s,e)):e>s-3?(h(),a(),n(s-3,s,e,t)):(h(),a(),n(e-1,e+1,e,t),a(),j(s,e));function n(u,w,_,D){for(let p=u;p<=w;p++){const y=document.createElement("span");y.classList.add("exercises-pagination-item"),y.textContent=p,p===Number(_)&&y.classList.add("exercises-pagination-item-active"),y.addEventListener("click",()=>{c.page=p,i&&(c.keyword=i,O(c)),r?r(c.page):S(D,c)}),o.paginationList.appendChild(y)}}function a(){const u=document.createElement("span");u.classList.add("exercises-pagination-item"),u.textContent="...",o.paginationList.appendChild(u)}function h(){n(1,1,e,t)}function j(u,w){n(u,u,w,t)}}const q=document.querySelector(".your-choice-button");class re{constructor(){this.id="your-choice-modal",this.bodyPartsOptions=[],this.bodyPartsSelectElem=document.getElementById("you-choice-body-part"),this.musclesOptions=[],this.musclesSelectElem=document.getElementById("your-choice-muscle"),this.equipmentOptions=[],this.equipmentSelectElem=document.getElementById("your-choice-equipment"),this.selectGroups=document.querySelectorAll(`#${this.id} .select-group`),this.submitBtnElem=document.getElementById("search-exercises"),this.submitBtnElem.addEventListener("click",()=>{this.triggerSearchExercises()}),k.init()}async show(){k.show(this.id);try{const[s,t,i]=await Promise.all([G(),N(),U()]);this.musclesOptions=s.results,this.bodyPartsOptions=t.results,this.equipmentOptions=i.results,console.log({muscles:s,bodyParts:t,equipment:i}),this.hideLoading(),this.toggleShowSelectGroups(!0),[{filters:this.musclesOptions,elem:this.musclesSelectElem},{filters:this.bodyPartsOptions,elem:this.bodyPartsSelectElem},{filters:this.equipmentOptions,elem:this.equipmentSelectElem}].forEach(({filters:r,elem:l})=>{console.log({filters:r,elem:l});const n=[];for(let a=0;a<r.length;a++){const{name:h}=r[a];n.push(`<option value=${a}>${h}</option>`)}l.innerHTML=n.join(""),this.hideLoading()})}catch(s){const t="Could not fetch lists of filters for modal";console.error(t,s),m.error({message:t})}}hideLoading(){document.querySelector(`#${this.id} .modal__content-loading`).classList.add("hidden")}toggleShowSelectGroups(s){for(const t of this.selectGroups)s?t.classList.remove("hidden"):t.classList.add("hidden")}getFormValues(){return{bodyPart:this.bodyPartsOptions[this.bodyPartsSelectElem.value].name,muscle:this.musclesOptions[this.musclesSelectElem.value].name,equipment:this.equipmentOptions[this.equipmentSelectElem.value].name}}async triggerSearchExercises(){const{bodyPart:s,muscle:t,equipment:i}=this.getFormValues();if(!(!s||!t||!i)){this.submitBtnElem.disabled=!0;try{if(!await this.getAndRenderExercises({page:1})){m.warning({message:"No exercises found. Try another set of muscle, body part and equipment paramaters."}),this.submitBtnElem.disabled=!1;return}I("you choice"),$(),k.close(),H(q)}catch(r){const l="Could not fetch exercises because of error";console.error(l,r),m.error({message:l})}finally{this.submitBtnElem.disabled=!1}}}async getAndRenderExercises({page:s=1}){const{bodyPart:t,muscle:i,equipment:r}=this.getFormValues(),l=f("");console.log("Calling api with",{bodyPart:t,muscle:i,equipment:r,page:s,limit:l});const{totalPages:n,results:a}=await V({bodyPart:t,muscle:i,equipment:r,page:s,limit:l});return console.log({results:a}),(a||[]).length?(B({results:a}),b({page:s,totalPages:n,customListener:h=>{this.getAndRenderExercises({page:h})}}),!0):!1}}if(q){const e=new re;q.addEventListener("click",()=>{e.show()})}const oe=document.querySelector(".footer-sub-form"),ne="https://your-energy.b.goit.study/api/";oe.addEventListener("submit",ce);async function ce(e){e.preventDefault();const s=e.target.email.value;try{const{data:t}=await Y.post(`${ne}subscription`,{email:s});le(t.message)}catch(t){z(t.response.data.message)}}function le(e){m.success({message:`${e}`})}function ae(e,s=300){let t;return(...i)=>{clearTimeout(t),t=setTimeout(()=>{e.apply(this,i)},s)}}function C(e){e.classList.remove("visually-hidden")}function T(e){e.classList.add("visually-hidden")}const d={searchClearBtnEl:document.querySelector(".js-search-form--btn__clear"),searchInputEl:document.querySelector(".js-search-form--input"),searchIconEl:document.querySelector(".js-search-form--btn__search"),searchClearEl:document.querySelector(".js-search-form--btn__clear"),searchFormEl:document.querySelector(".js-search-form")},de=ae(e=>ue(e),400);d.searchClearBtnEl.addEventListener("click",A);d.searchInputEl.addEventListener("input",de);d.searchFormEl.addEventListener("submit",me);function ue({target:e}){e!=null&&e.value.trim()?(C(d.searchClearEl),T(d.searchIconEl)):(T(d.searchClearEl),C(d.searchIconEl))}function A(){d.searchInputEl.value="",T(d.searchClearEl),C(d.searchIconEl)}async function me(e){e.preventDefault();const s=e.target.elements.search.value;if(s.trim()){const t=f(""),{totalPages:i,results:r}=await O({bodypart:c.bodypart||"",muscles:c.muscles||"",equipment:c.equipment||"",page:1,keyword:s,limit:t});B({results:r}),b({page:1,totalPages:i,type:"exercises",keyword:s})}else m.warning({message:"You should type something before searching!"});A()}const L=document.getElementById("scroll-up");L.addEventListener("click",ye);L.style.display="none";window.onscroll=function(){he()};function he(){const e=pe();document.body.scrollTop>e||document.documentElement.scrollTop>e?L.style.display="block":L.style.display="none"}function pe(){const e=window.innerWidth;return e<375?300:e<768?500:e<1440?800:1e3}function ye(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const fe=document.querySelector(".footer-information-list");fe.addEventListener("click",ge);function ge(e){switch(e.target.classList.value){case"footer-privacy-policy":ve(),P.addEventListener("click",be);break;case"footer-service-terms":Le(),F.addEventListener("click",W);break}}const P=document.querySelector(".info-close-btn-id"),E=document.querySelector(".info-backdrop-id");document.querySelector(".info-modal");function ve(){E.style.opacity="1",E.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function be(){E.style.opacity="0",E.classList.add("is-hidden"),document.body.style.overflow="",P.removeEventListener("click")}const F=document.querySelector(".terms-close-btn-id"),x=document.querySelector(".terms-backdrop-id");document.querySelector(".terms-modal");F.addEventListener("click",W);function Le(){x.style.opacity="1",x.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function W(){x.style.opacity="0",x.classList.add("is-hidden"),document.body.style.overflow="",F.removeEventListener("click")}
//# sourceMappingURL=commonHelpers2.js.map
