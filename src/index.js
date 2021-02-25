document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskDesc = document.getElementById("new-task-description");
  const taskUL = document.getElementById("tasks");
  const newItem = document.createElement("li");

  form.addEventListener("submit", addListItem);
  function addListItem(e) {
    e.preventDefault();
    console.log("button clicked");
    taskUL.innerHTML += `<li id="list">${taskDesc.value} <button id="delete-btn">Delete</button></li>`;
    console.log(taskDesc.value);
    form.reset();
  }
});
