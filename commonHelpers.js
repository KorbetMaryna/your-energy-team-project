import{s as d}from"./assets/showPageError-0a589264.js";import"./assets/vendor-09c79f2e.js";function f(t,s){return h(t===1).concat(w(t,s),k(t===s))}function w(t,s){let a="";for(let n=1;n<=s;n+=1){if(n<t-2){a=a.concat('<li><span class="pagination-number">...</span></li>'),n=t-3;continue}if(n>t+2){a=a.concat('<li><span class="pagination-number">...</span></li>');break}a=a.concat(`<li>
        <button class="js-page pagination-number${n===t?" active":""}" type="button"  data-page-navigate=${n}>${n}</button>
      </li>`)}return`<ul class="fav-workouts-pagination-numbers">
      ${a}
    </ul>`}function h(t){return`    <ul class="pagination-btns fav-workouts-pagination-start">
      <li class="">
        <button class="js-page left pagination-btn" type="button"${t?" disabled":""} data-page-navigate="first-page">
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
        </button>
      </li>
      <li class="">
        <button class="js-page left pagination-btn" type="button"${t?" disabled":""} data-page-navigate="previous-page">
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
        </button>
      </li>
    </ul>`}function k(t){return`<ul class="pagination-btns fav-workouts-pagination-end">
      <li class="">
        <button class="js-page pagination-btn" type="button"${t?" disabled":""} data-page-navigate="next-page">
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
        </button>
      </li>
      <li class="">
        <button class="js-page pagination-btn" type="button"${t?" disabled":""} data-page-navigate="last-page">
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
        </button>
      </li>
    </ul>`}function u(t){return t.map(s=>m(s)).join("")}function m({_id:t,name:s,time:a,burnedCalories:n,bodyPart:l,target:o}={}){return`<li class="fav-workouts-list-item" data-id="${t}">
      <div class="fav-workouts-list-item-buttons">
        <div class="fav-workouts-tag-remove-wrapper">
          <span class="fav-workouts-tag">Workout</span>
          <button class="fav-workouts-remove-button" type="button">
            <svg class="fav-workouts-remove-icon" width="16px" height="15px">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>

        <button type="button" class="fav-workouts-start-button">
          <span class="fav-workouts-start-text">Start</span>
          <svg class="fav-workouts-arrow-icon" width="16px" height="16px">
            <use href="./img/icons.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <div class="fav-workouts-excercise-name-wrapper">
        <div class="fav-workouts-running-icon-wrapper">
          <svg class="fav-workouts-running-icon" width="20px" height="20px">
            <use href="./img/icons.svg#icon-running-man"></use>
          </svg>
        </div>
        <h3 class="fav-workouts-excercise-name">${s}</h3>
      </div>

      <ul class="fav-workouts-descr-list">
        <li class="fav-workouts-descr-list-category">
          Burned calories:
          <span class="fav-workouts-descr-list-value">${n} / ${a} min</span>
        </li>
        <li class="fav-workouts-descr-list-category">
          Body part: <span class="fav-workouts-descr-list-value">${l[0].toUpperCase()+l.substring(1)}</span>
        </li>
        <li class="fav-workouts-descr-list-category">
          Target: <span class="fav-workouts-descr-list-value">${o[0].toUpperCase()+o.substring(1)}</span>
        </li>
      </ul>
    </li>`}const i={noExMessage:document.querySelector(".js-no-exercises-message"),workoutsList:document.querySelector(".js-workouts-list"),paginationList:document.querySelector(".js-fav-pagination")};let e=1,r=1,p=window.innerWidth<768?"phone":window.innerWidth<1440?"tablet":"desktop";b();function b(){let t=JSON.parse(localStorage.getItem("savedExercises"));c(t),i.workoutsList.addEventListener("click",x),i.paginationList.addEventListener("click",M);let s,a;setInterval(()=>{if(s=JSON.parse(localStorage.getItem("savedExercises")),s===null)return;const n=window.innerWidth<768?"phone":window.innerWidth<1440?"tablet":"desktop";if(n!==p){p=n,c(s);return}a=s.length===t.length,a&&(a=s.every((l,o)=>l._id===t[o]._id)),a||(t=[...s],c(t))},300)}function c(t){if(!t||t.length===0){i.noExMessage.hidden=!1,i.noExMessage.classList.remove("visually-hidden"),i.workoutsList.classList.remove("fav-workouts-list"),i.workoutsList.innerHTML="";return}if(i.noExMessage.hidden=!0,i.noExMessage.classList.add("visually-hidden"),i.workoutsList.classList.add("fav-workouts-list"),window.innerWidth>=1440)i.workoutsList.innerHTML=u(t);else{if(window.innerWidth>=768){r=Math.ceil(t.length/10),e>r&&(e=r);const s=t.slice((e-1)*10,e*10);e!==1&&t.length===0?(e-=1,i.workoutsList.innerHTML=u(t.slice((e-1)*10,e*10))):i.workoutsList.innerHTML=u(s)}else{r=Math.ceil(t.length/8),e>r&&(e=r);const s=t.slice((e-1)*8,e*8);e!==1&&t.length===0?(e-=1,i.workoutsList.innerHTML=u(t.slice((e-1)*8,e*8))):i.workoutsList.innerHTML=u(s)}L(e,r)}}function x(t){const s=t.target;if(!s.closest(".fav-workouts-remove-button"))return;const l=s.closest(".fav-workouts-list-item").dataset.id,o=JSON.parse(localStorage.getItem("savedExercises")),g=o.findIndex(v=>v._id===l);g===-1?d("error","Excercise is already removed from favorites."):(o.splice(g,1),localStorage.setItem("savedExercises",JSON.stringify(o))),c(o)}function L(t,s){if(s<=1){i.paginationList.classList.add("visually-hidden");return}i.paginationList.classList.remove("visually-hidden"),i.paginationList.innerHTML=f(t,s)}function M(t){const s=t.target.closest(".js-page");if(!s)return;const a=s.dataset.pageNavigate;if(Number(a)===e)return;switch(a){case"first-page":e=1;break;case"previous-page":e=e-1;break;case"next-page":e=e+1;break;case"last-page":e=r;break;default:if(Number.isNaN(Number(a)))return;e=Number(a)}const n=localStorage.getItem("savedExercises");c(JSON.parse(n))}
//# sourceMappingURL=commonHelpers.js.map
