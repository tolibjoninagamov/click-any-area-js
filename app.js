const element = document.createElement("div");
element.className = "a";

window.addEventListener("click", (event) => {
  element.style.left = event.x + "px";
  element.style.top = event.y + "px";
  document.body.append(element);
});

// document.body.onclick() => {
//   top.x;
//   left.y;
// }