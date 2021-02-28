"use strict";
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", manageListItems);
});

const form = document.getElementById("create-task-form");
const taskDesc = document.getElementById("new-task-description");

function manageListItems(e) {
  e.preventDefault();
  console.log("button clicked");

  // create list item
  const newItem = document.createElement("li");
  console.log(taskDesc.value);
  newItem.textContent = taskDesc.value;
  const taskUL = document.getElementById("tasks");
  taskUL.appendChild(newItem);
  form.reset();

  // create delete button.
  const deleteButton = document.createElement("button");
  newItem.appendChild(deleteButton);
  deleteButton.textContent = "Delete";
  //delete an individual list item
  deleteButton.addEventListener("click", () => {
    taskUL.removeChild(newItem);
  });
}
