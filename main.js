const body = document.querySelector("body");

// header, footer 토글버튼

const languageButton = document.querySelector(".btn-lang");
const relatedButton = document.querySelector(".btn-rel");
languageButton.addEventListener("click", () => {
  removeOption();
  languageButton.classList.toggle("on");
});
relatedButton.addEventListener("click", () => {
  removeOption();
  relatedButton.classList.toggle("on");
});

// main - select - dropdown 버튼
const dropBtn = document.querySelectorAll(".dropdown-btn");
const dropList = document.querySelectorAll(".dropdown-list");

function removeOption() {
  dropBtn.forEach((el) => {
    el.classList.remove("on");
  });
}

dropBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (el.classList.contains("on")) {
      removeOption();
    } else {
      removeOption();
      el.classList.add("on");
    }
  });
});

// dropdown list 선택시 innerText 변경
for (let i = 0; i < dropBtn.length; i++) {
  dropList[i].addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      dropBtn[i].innerText = event.target.innerText;
      dropBtn[i].classList.remove("on");
    }
  });
}

// 목록중에 innerText가 하나이상 선택되면 화살표 클릭버튼 반전효과
const btnGo = document.querySelector(".btn-go");
const btnGoImg = btnGo.querySelector("img");
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((e) => {
  e.addEventListener("click", (el) => {
    console.log(el.target.classList.value);
    if (el.target.className === "") {
      btnGo.classList.add("on");
      btnGo.disabled = false;
      btnGoImg.src = "src/arrow-right-circle-fill.svg";
    }
  });
});

// 버튼 이외의 것들 클릭시 드롭다운리스트 꺼지기

body.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") {
    dropBtn.forEach((el) => {
      el.classList.remove("on");
    });
    languageButton.classList.remove("on");
    relatedButton.classList.remove("on");
  }
});
//열어야 되는 타겟요소들을

//드롭리스트를 forEach 돌면서 클래스를 없애야된다.

// body.addEventListener("click", (event) => {
//   relatedButton.classList.remove("on");
//   languageButton.classList.remove("on");
//   if (event.target === relatedButton) {
//     relatedButton.classList.toggle("on");
//   } else if (event.target === languageButton) {
//     languageButton.classList.toggle("on");
//   }
// });


// 스크롤 이동시 요소 fadein효과

const cultureArts = document.querySelectorAll(".culture-art");
let checkPosition = () => {
  cultureArts.forEach((el) => {
    let cultureFromTop = el.getBoundingClientRect().top;
    if (cultureFromTop < window.innerHeight) {
      el.classList.add("fade-in");
    }
  })
}
window.addEventListener("scroll", checkPosition);
