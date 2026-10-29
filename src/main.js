import "./style.css";

const button = document.querySelector("#explore-button");

button?.addEventListener("click", () => {
  button.innerHTML = '准备就绪 <span aria-hidden="true">✓</span>';
  button.classList.add("is-done");
});
