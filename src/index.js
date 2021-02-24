document.addEventListener("DOMContentLoaded", () => {
  //prevent form from submitting(default behavior)
  //select form
  const taskForm = document.getElementById("create-task-form");
  //add event listener
  taskForm.addEventListener("submit", function (event) {
    //prevent default action of submit
    event.preventDefault();
    //test to see if it works
    console.log("button clicked");
    //select DOM elements needed to make list
    const taskDesc = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");
    //test to see if user input prints out
    console.log("Task:", taskDesc.value);
    //append list of user input
    taskList.innerHTML += `<li>${taskDesc.value}</li>`;
    //reset form
    taskForm.reset();
    const deleteButton = document.createElement("button");
    taskList.append(deleteButton);
    deleteButton.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
  });
});
