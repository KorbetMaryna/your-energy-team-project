import{t as C,f as O,a as $,b as I,c as M,d as H,e as P}from"./assets/quote-5aa18f31.js";import{i as m,l as v,a as _}from"./assets/vendor-09c79f2e.js";function y(e){return e[0].toUpperCase()+e.slice(1)}function A(e,s,t){return`      
<li class="exercises-filter-tile-item" data-name=${s} data-filter=${e.toLowerCase()}>
      <div class="exercises-filter-tile-gradient"></div>
      <img class="exercises-filter-tile-img" src="${t}" alt="${s}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
      <div class="exercises-filter-tile-text-wrapper">
          <h3 class="exercises-filter-tile-headline">${y(s)}</h3>
          <p class="exercises-filter-tile-text">${e}</p>
      </div>
</li>`}function W(e,s,t,r,n,i){return`      
<li class="exercises-category-tile-item" data-id=${i}>
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
        ${y(r)}</li>
        <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        ${y(n)}</li>
    </ul>
</li>`}m.settings({position:"topRight",transitionIn:"bounceInDown",closeOnEscape:!0});const o={headlineWrapper:document.querySelector(".js-headline-category-wrapper"),headlineCategory:document.querySelector(".js-headline-category"),searchForm:document.querySelector(".js-search-form"),filterButtons:document.querySelectorAll(".js-button"),tilesFilterList:document.querySelector(".js-tiles-filter-list"),tilesCategoryList:document.querySelector(".js-tiles-category-list"),paginationList:document.querySelector(".js-pagination")};let a={filter:"Muscles",bodypart:"",muscles:"",equipment:"",keyword:"",page:1};E(a.filter,window.innerWidth);f("filters",a);o.filterButtons.forEach(e=>{e.addEventListener("click",()=>{N(a,e),f("filters",a),j(e)})});async function f(e,s){C(!0),await O(e,s).then(t=>{var i;const{page:r,totalPages:n}=t;if((i=t.results[0])!=null&&i.filter){const c="filters";D(t),L({page:r,totalPages:n,type:c}),G(),k()}else{const c="exercises";F(t),L({page:r,totalPages:n,type:c})}}).catch(t=>{console.log(t),m.error({message:"Something went wrong :-( try again later."})}).finally(C(!1))}function D({results:e}){V();const s=e.map(({filter:t,name:r,imgURL:n})=>A(t,r,n)).join("");o.tilesFilterList.innerHTML=s}o.tilesFilterList.addEventListener("click",R);function R(e){if(e.preventDefault(),e.currentTarget===e.target)return;let{name:s,filter:t}=e.target.parentNode.dataset;U(a,s,t),f("exercises",a),T(s),o.searchForm.classList.remove("visually-hidden")}function F({results:e}){if(!e.length)return m.warning({message:"Unfortunately, we don't have any exercises in this category"});z();const s=e.map(({rating:t,name:r,burnedCalories:n,bodyPart:i,target:c,_id:l})=>W(t,r,n,i,c,l)).join("");o.tilesCategoryList.innerHTML=s}function G(){o.headlineCategory.innerText="",o.headlineWrapper.classList.add("visually-hidden")}function T(e){o.headlineWrapper.classList.remove("visually-hidden"),o.headlineCategory.innerText=y(e)}function k(){o.searchForm.classList.add("visually-hidden")}function E(e,s){return e!==""?a.limit=s<768?9:12:a.limit=s<768?8:10,a.limit}function j(e){document.querySelector(".active-button").classList.remove("active-button"),e.classList.add("active-button")}function N(e,s){let t={bodypart:"",muscles:"",equipment:""};E(e.filter,window.innerWidth),Object.assign(e,t),e.filter=s.innerText,e.page=1}function U(e,s,t){e.filter="",t==="body"&&(t="bodypart"),Object.assign(e,{[t]:s}),E(e.filter,window.innerWidth)}function V(){o.tilesCategoryList.innerHTML="",o.tilesCategoryList.classList.add("visually-hidden"),o.tilesFilterList.classList.remove("visually-hidden")}function z(){o.tilesFilterList.innerHTML="",o.tilesFilterList.classList.add("visually-hidden"),o.tilesCategoryList.classList.remove("visually-hidden")}function L({page:e,totalPages:s,type:t,customListener:r}){o.paginationList.innerHTML="",s<=6?i(1,s,e,t):e<4?(i(1,4,e,t),c(),h(s,e)):e>s-3?(l(),c(),i(s-3,s,e,t)):(l(),c(),i(e-1,e+1,e,t),c(),h(s,e));function i(d,b,B,q){console.log("type: ",q);for(let p=d;p<=b;p++){const g=document.createElement("span");g.classList.add("exercises-pagination-item"),g.textContent=p,p===Number(B)&&g.classList.add("exercises-pagination-item-active"),g.addEventListener("click",()=>{a.page=p,r?r(a.page):f(q,a)}),o.paginationList.appendChild(g)}}function c(){const d=document.createElement("span");d.classList.add("exercises-pagination-item"),d.textContent="...",o.paginationList.appendChild(d)}function l(){i(1,1,e,t)}function h(d,b){i(d,d,b,t)}}const x=document.querySelector(".your-choice-button");class K{constructor(){this.id="your-choice-modal",this.bodyPartsOptions=[],this.bodyPartsSelectElem=document.getElementById("you-choice-body-part"),this.musclesOptions=[],this.musclesSelectElem=document.getElementById("your-choice-muscle"),this.equipmentOptions=[],this.equipmentSelectElem=document.getElementById("your-choice-equipment"),this.selectGroups=document.querySelectorAll(`#${this.id} .select-group`),this.submitBtnElem=document.getElementById("search-exercises"),this.submitBtnElem.addEventListener("click",()=>{this.triggerSearchExercises()}),v.init()}async show(){v.show(this.id);try{const[s,t,r]=await Promise.all([$(),I(),M()]);this.musclesOptions=s.results,this.bodyPartsOptions=t.results,this.equipmentOptions=r.results,console.log({muscles:s,bodyParts:t,equipment:r}),this.hideLoading(),this.toggleShowSelectGroups(!0),[{filters:this.musclesOptions,elem:this.musclesSelectElem},{filters:this.bodyPartsOptions,elem:this.bodyPartsSelectElem},{filters:this.equipmentOptions,elem:this.equipmentSelectElem}].forEach(({filters:n,elem:i})=>{console.log({filters:n,elem:i});const c=[];for(let l=0;l<n.length;l++){const{name:h}=n[l];c.push(`<option value=${l}>${h}</option>`)}i.innerHTML=c.join(""),this.hideLoading()})}catch(s){const t="Could not fetch lists of filters for modal";console.error(t,s),m.error({message:t})}}hideLoading(){document.querySelector(`#${this.id} .modal__content-loading`).classList.add("hidden")}toggleShowSelectGroups(s){for(const t of this.selectGroups)s?t.classList.remove("hidden"):t.classList.add("hidden")}getFormValues(){return{bodyPart:this.bodyPartsOptions[this.bodyPartsSelectElem.value].name,muscle:this.musclesOptions[this.musclesSelectElem.value].name,equipment:this.equipmentOptions[this.equipmentSelectElem.value].name}}async triggerSearchExercises(){const{bodyPart:s,muscle:t,equipment:r}=this.getFormValues();if(!(!s||!t||!r)){this.submitBtnElem.disabled=!0;try{if(!await this.getAndRenderExercises({page:1})){m.warning({message:"No exercises found. Try another set of muscle, body part and equipment paramaters."}),this.submitBtnElem.disabled=!1;return}T("you choice"),k(),v.close(),j(x)}catch(n){const i="Could not fetch exercises because of error";console.error(i,n),m.error({message:i})}finally{this.submitBtnElem.disabled=!1}}}async getAndRenderExercises({page:s=1}){const{bodyPart:t,muscle:r,equipment:n}=this.getFormValues(),i=E();console.log("Calling api with",{bodyPart:t,muscle:r,equipment:n,page:s,limit:i});const{totalPages:c,results:l}=await H({bodyPart:t,muscle:r,equipment:n,page:s,limit:i});return console.log({results:l}),(l||[]).length?(F({results:l}),L({page:s,totalPages:c,customListener:h=>{this.getAndRenderExercises({page:h})}}),!0):!1}}if(x){const e=new K;x.addEventListener("click",()=>{e.show()})}const Y=document.querySelector(".footer-sub-form"),J="https://your-energy.b.goit.study/api/";Y.addEventListener("submit",Q);async function Q(e){e.preventDefault();const s=e.target.email.value;try{const{data:t}=await _.post(`${J}subscription`,{email:s});X(t.message)}catch(t){P(t.response.data.message)}}function X(e){m.success({message:`${e}`})}function Z(e,s=300){let t;return(...r)=>{clearTimeout(t),t=setTimeout(()=>{e.apply(this,r)},s)}}function S(e){e.classList.remove("visually-hidden")}function w(e){e.classList.add("visually-hidden")}const u={searchClearBtnEl:document.querySelector(".js-search-form--btn__clear"),searchInputEl:document.querySelector(".js-search-form--input"),searchIconEl:document.querySelector(".js-search-form--btn__search"),searchClearEl:document.querySelector(".js-search-form--btn__clear"),searchFormEl:document.querySelector(".js-search-form")},ee=Z(e=>te(e),400);u.searchClearBtnEl.addEventListener("click",se);u.searchInputEl.addEventListener("input",ee);u.searchFormEl.addEventListener("submit",ie);function te({target:e}){e!=null&&e.value.trim()?(S(u.searchClearEl),w(u.searchIconEl)):(w(u.searchClearEl),S(u.searchIconEl))}function se(){u.searchInputEl.value="",w(u.searchClearEl),S(u.searchIconEl)}function ie(e){e.preventDefault()}window.onscroll=function(){re()};function re(){document.body.scrollTop>1e3||document.documentElement.scrollTop>1e3?document.getElementById("scroll-up").style.display="block":document.getElementById("scroll-up").style.display="none"}
//# sourceMappingURL=commonHelpers2.js.map
