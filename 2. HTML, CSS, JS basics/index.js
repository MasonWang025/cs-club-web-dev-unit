// createElement(), appendChild()
let input = document.getElementById("text-input");
let btn = document.getElementById("add-button");
let todo = document.getElementById("todo");

btn.onclick = () => {
  let li = document.createElement("li");
  li.textContent = input.value;
  todo.appendChild(li);
  input.value = "";
};
