const number = document.getElementById("number");
const btn = document.getElementById("btn");
const count = document.getElementById("count");
const article = document.getElementById("article");
const par = document.createElement("p");
const text1 = document.createTextNode("Please enter a valid number");
const foto = document.getElementById("foto");
const image = document.createElement("img");
const src = document.createAttribute("src");
image.setAttribute("src", "./foto/luck.png");

foto.appendChild(image);
par.appendChild(text1);
par.style.color = "red";
par.style.paddingTop = "10px";
btn.after(par);
par.style.display = "none";

let attempt = 5;

let random = Math.ceil(Math.random() * 100);
console.log(random);
function alert() {
  par.style.display = "none";
}
function reset() {
  window.location.reload();
}

btn.addEventListener("click", () => {
  let take = number.value;
  if (take < 1 || take > 100) {
    par.style.display = "block";
  } else if (take == random) {
    article.innerHTML = "You won";
    image.setAttribute("src", "./foto/10.gif");
    setTimeout(reset, 7000);
  } else {
    attempt--;
    count.innerHTML = attempt;
    if (attempt <= 0) {
      article.innerHTML = "You lost";
      image.setAttribute("src", "./foto/12.jpeg");
      setTimeout(reset, 7000);
    }
  }

  setTimeout(alert, 7000);
  number.value = "";
});
