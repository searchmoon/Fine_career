// header, footer 토글버튼

const languageButton = document.querySelector(".btn-lang");
const relatedButton = document.querySelector(".btn-rel");
languageButton.addEventListener("click", () => {
  languageButton.classList.toggle("on");
});
relatedButton.addEventListener("click", () => {
  relatedButton.classList.toggle("on");
});


// main - dropdown 버튼
const dropBtn = document.querySelectorAll(".dropdown-btn");
const dropList = document.querySelectorAll(".dropdown-list");

dropBtn.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('on');
  })
})

for (let i = 0; i < dropBtn.length; i++) {
  dropList[i].addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
      dropBtn[i].innerText = event.target.innerText;
      dropBtn[i].classList.remove('on');
    }
  })
}

//열어야 되는 타겟요소들을

//드롭리스트를 forEach 돌면서 클래스를 없애야된다.


const body = document.querySelector("body");

body.addEventListener("click", (event) => {
  relatedButton.classList.remove("on");
  languageButton.classList.remove("on");
  if(event.target === relatedButton){
    relatedButton.classList.toggle("on");
  } else if (event.target === languageButton){
    languageButton.classList.toggle("on");
  }
})