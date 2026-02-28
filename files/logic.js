const states = [
  { text: "Really? 😭", left: "200px", top: "150px", bg: "blueviolet" },
  { text: "Try again! 🖤", left: "350px", top: "200px", bg: "cadetblue" },
  { text: "You sure? 🥀", left: "750px", top: "80px", bg: "darkgoldenrod" },
  { text: "Haha nice Try! 😥", left: "130px", top: "65%", bg: "violet" },
  {
    text: "No escape! 🔥",
    left: "60%",
    top: "200px",
    bg: "rgb(130, 238, 179)",
  },
  { text: "Nice try 😎", left: "50%", top: "5%", bg: "tomato" },
  {
    text: "You can't escape love 😶‍🌫️",
    left: "60%",
    top: "80%",
    bg: "slateblue",
  },
  {
    text: "Still no? Really? 💔",
    left: "300px",
    top: "400px",
    bg: "mediumseagreen",
  },
  {
    text: "You're testing my patience 😞",
    left: "80%",
    top: "50%",
    bg: "goldenrod",
  },
  { text: "Nope, not happening 🥺", left: "220px", top: "10%", bg: "hotpink" },
];

let i = 0;

function logic() {
  const box = document.getElementById("btnN");
  const s = states[i];
  box.style.left = s.left;
  box.style.top = s.top;
  box.style.backgroundColor = s.bg;
  box.innerText = s.text;
  i = (i + 1) % states.length;
}

function animatePanels() {
  const box1 = document.getElementById("main33");
  // box1.style.backgroundColor="";
  const btn = document.getElementById("btn");
  document.getElementById("main3").classList.toggle("animate");
  btn.style.display = "none";
  setTimeout(() => {
    box1.style.display = "none";
  }, 5000);
}
const chg = () => {
  const box1 = document.getElementById("main1");
  const box2 = document.getElementById("main2");
  box1.style.display = "none";
  box2.style.display = "block";
};
