// Customize data directly integrated into main.js
const customizeData = {
  "greeting": "Hi",
  "name": "Thaarani😊",
  "greetingText": "🪄Your presence lights up my world with joy, warmth, and endless admiration😌",
  "imagePath": "img/dp.jpg",
  "text1": "It's your birthday!!! 🥳😄",
  "textInChatBox": "Happy birthday to you!! Yeee! Many many happy blah... 🎂🎉",
  "sendButtonLabel": "Send",
  "text2": "That's what I was always meant to do😄",
  "text3": "But then I stopped and thought for a moment",
  "text4": "I realised, I wanted to do something",
  "text4Adjective": "special",
  "text5Entry": "Because,",
  "text5Content": "You are really Special ❤️",
  "bigTextPart1": "S",
  "bigTextPart2": "O",
  "wishHeading": "Happy Birthday!",
  "wishText": "May your birthday be as radiant as your smile, filled with joy and love💖😊",
  "outroText": "Your presence makes every moment brighter. Wishing you a day filled with love and joy! 🎉❤️"
};

// Function to fetch and insert data into the page
const fetchData = () => {
  // Update DOM elements with data from customizeData
  Object.keys(customizeData).forEach(customData => {
    const element = document.querySelector(`[data-node-name="${customData}"]`);
    if (element) {
      if (customData === "imagePath") {
        element.setAttribute("src", customizeData[customData]);
      } else {
        element.textContent = customizeData[customData];
      }
    }
  });
  // Run animation after data insertion
  animationTimeline();
  playBackgroundMusic(); // Start playing background music
};

const playBackgroundMusic = () => {
  const bgMusic = document.getElementById('bg-music');
  bgMusic.volume = 0.7; // Adjust volume if needed
  // Play background music (autoplay should start it automatically)
  bgMusic.play().catch(error => {
    // Autoplay was prevented, handle the error here (e.g., show a play button)
    console.log("Autoplay prevented. Show play button or interact to play music.");
  });
};
// Animation Timeline
const animationTimeline = () => {
  const textBoxChars = document.querySelector(".hbd-chatbox");
  const hbd = document.querySelector(".wish-hbd");

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
  hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();
  tl.timeScale(0.5);

  tl
    .to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .from(".two", 0.4, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 0.7, {
      rotationX: 15,
      rotationZ: -10,
      skewY: "-5deg",
      y: 50,
      z: 10,
      opacity: 0
    })
    .to(".idea-5 .smiley", 0.7, { rotation: 90, x: 8 }, "+=0.4")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
    .staggerFrom(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: Expo.easeOut
    }, 0.2)
    .staggerTo(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: -15,
      ease: Expo.easeOut
    }, 0.2, "+=1")
    .staggerFromTo(".baloons img", 2.5, {
      opacity: 0.9,
      y: 1400
    }, {
      opacity: 1,
      y: -1000
    }, 0.2)
    .from(".lydia-dp", 0.5, {
      scale: 3.5,
      opacity: 0,
      x: 25,
      y: -25,
      rotationZ: -45
    }, "-=2")
    .staggerFrom(".wish-hbd span", 0.7, {
      opacity: 0,
      y: -50,
      rotation: 150,
      skewX: "30deg",
      ease: Elastic.easeOut.config(1, 0.5)
    }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.7, {
      scale: 1.4,
      rotationY: 150
    }, {
      scale: 1,
      rotationY: 0,
      color: "#ff69b4",
      ease: Expo.easeOut
    }, 0.1, "party")
    .from(".wish h5", 0.5, {
      opacity: 0,
      y: 10,
      skewX: "-15deg"
    }, "party")
    .staggerTo(".eight svg", 1.5, {
      visibility: "visible",
      opacity: 0,
      scale: 80,
      repeat: 3,
      repeatDelay: 1.4
    }, 0.3)
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(".last-smile", 0.5, {
      rotation: 90
    }, "+=1");
};

// Initiate fetching and animation
fetchData();