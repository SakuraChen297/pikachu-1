import string from "./css.js";

const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
    leftEye: document.querySelector(".eye.left"),
    cool: document.querySelector(".cool"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
    ".face.left": "blink",
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 60;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 30;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
  blink: () => {
    if (player.ui.cool.style.display === "block") {
      player.ui.leftEye.style.opacity = 1;
      player.ui.cool.style.display = "none";
    } else {
      player.ui.leftEye.style.opacity = 0;
      player.ui.cool.style.display = "block";
    }
  },
};

player.init();
