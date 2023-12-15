import"./assets/quote-ff5326c2.js";import{i as v}from"./assets/vendor-09c79f2e.js";const o={noExMessage:document.querySelector(".js-no-exercises-message"),workoutsList:document.querySelector(".js-workouts-list")};d();function d(){let s=JSON.parse(localStorage.getItem("savedExercises"));c(s);let e,t;setInterval(()=>{e=JSON.parse(localStorage.getItem("savedExercises")),t=e.length===s.length,t&&(t=e.every((i,a)=>i._id===s[a]._id)),t||(s=[...e],o.workoutsList.innerHTML=l(s),c(s))},2e3)}function c(s){!s||s.length===0?(o.noExMessage.hidden=!1,o.workoutsList.classList.remove("fav-workouts-list")):(o.noExMessage.hidden=!0,o.workoutsList.classList.add("fav-workouts-list"),o.workoutsList.innerHTML=l(s),o.workoutsList.addEventListener("click",f))}function f(s){const e=s.target;if(!e.closest(".fav-workouts-remove-button"))return;const a=e.closest(".fav-workouts-list-item").dataset.id,r=JSON.parse(localStorage.getItem("savedExercises")),n=r.findIndex(u=>u._id===a);console.log(n),n===-1?m("error","Excercise is already removed from favorites."):(r.splice(n,1),localStorage.setItem("savedExercises",JSON.stringify(r))),o.workoutsList.innerHTML=l(r),c(r)}function l(s){return s.map(e=>g(e)).join("")}function g({_id:s,name:e,time:t,burnedCalories:i,bodyPart:a,target:r}={}){return`<li class="fav-workouts-list-item" data-id="${s}">
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
        <h3 class="fav-workouts-excercise-name">${e}</h3>
      </div>

      <ul class="fav-workouts-descr-list">
        <li class="fav-workouts-descr-list-category">
          Burned calories:
          <span class="fav-workouts-descr-list-value">${i} / ${t} min</span>
        </li>
        <li class="fav-workouts-descr-list-category">
          Body part: <span class="fav-workouts-descr-list-value">${a}</span>
        </li>
        <li class="fav-workouts-descr-list-category">
          Target: <span class="fav-workouts-descr-list-value">${r}</span>
        </li>
      </ul>
    </li>`}function m(s,e){let t;s==="error"?t="#f58e82":t="#9dfab5",v.show({messageColor:"#262121",backgroundColor:t,messageSize:"18px",position:"bottomRight",progressBar:!1,animateInside:!1,timeout:3e3,targetFirst:!1,message:e})}
//# sourceMappingURL=commonHelpers.js.map
