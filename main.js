const swiper1 = new Swiper(".slot1", {
  direction: "vertical",
  loop: true,
  spaceBetween: 0,
  slidesPerView: 3,
  autoplay: {
    delay: 30,
  },
  speed: 40,
});

const swiper2 = new Swiper(".slot2", {
  direction: "vertical",
  loop: true,
  spaceBetween: 0,
  slidesPerView: 3,
  autoplay: {
    delay: 30,
  },
  speed: 30,
});

const swiper3 = new Swiper(".slot3", {
  direction: "vertical",
  loop: true,
  spaceBetween: 0,
  slidesPerView: 3,
  autoplay: {
    delay: 30,
  },
  speed: 45,
});

swiper1.autoplay.stop();
swiper2.autoplay.stop();
swiper3.autoplay.stop();

const currentScore = document.querySelector(".current-score");

const stopButton1 = document.querySelector(".stop-button-1");
const stopButton2 = document.querySelector(".stop-button-2");
const stopButton3 = document.querySelector(".stop-button-3");

const startButton = document.querySelector(".start-button");

let button1 = false;
let button2 = false;
let button3 = false;
let update = false;

let value1 = 1;
let value2 = 2;
let value3 = 3;

function handleStop1(e) {
  e.preventDefault();
  if (button1) {
    swiper1.autoplay.stop();
    setTimeout(() => {
      swiper1.slidePrev(1000);
      const select1 = document.querySelector(
        ".slot1 > .swiper-wrapper > .swiper-slide-next > img"
      );
      value1 = select1.dataset.name;
    }, 50);
  }

  button1 = false;
}

function handleStop2(e) {
  e.preventDefault();
  if (button2) {
    swiper2.autoplay.stop();
    setTimeout(() => {
      swiper2.slidePrev(1000);
      const select2 = document.querySelector(
        ".slot2 > .swiper-wrapper > .swiper-slide-next > img"
      );
      value2 = select2.dataset.name;
    }, 50);
  }
  button2 = false;
}

function handleStop3(e) {
  e.preventDefault();
  if (button3) {
    swiper3.autoplay.stop();
    setTimeout(() => {
      swiper3.slidePrev(1000);
      const select3 = document.querySelector(
        ".slot3 > .swiper-wrapper > .swiper-slide-next > img"
      );
      value3 = select3.dataset.name;
    }, 50);
  }
  button3 = false;
}

function handleStart(e) {
  e.preventDefault();

  currentScore.textContent = currentScore.textContent - 1;

  swiper1.autoplay.start();
  swiper2.autoplay.start();
  swiper3.autoplay.start();

  button1 = true;
  button2 = true;
  button3 = true;
  update = true;
}

stopButton1.addEventListener("click", handleStop1);
stopButton2.addEventListener("click", handleStop2);
stopButton3.addEventListener("click", handleStop3);

startButton.addEventListener("click", handleStart);

setInterval(() => {
  if (!button1 && !button2 && !button3 && update) {
    if (value1 == value2 && value2 == value3) {
      currentScore.textContent = Number(currentScore.textContent) * 3;
      update = !update;
    } else if (value1 == value2 || value2 == value3 || value1 == value3) {
      currentScore.textContent = Number(currentScore.textContent) + 5;
      update = !update;
    }
  }
}, 100);
