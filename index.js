

function validFormFieldInput() {
  event.preventDefault();
  const newTaskNameInput = document.querySelector("#newTaskNameInput");
  const name = newTaskNameInput.value;
  console.log("Name:", name);

  if (isNaN(name)) {
    
    return true; // Prevent the form from submitting
  }
  alert("Please enter a valid task name (not a number)");
  return false; // Allow the form to submit

  const taskDescription = document.querySelector("#description");
  const description = taskDescription.value;
  console.log("Description:", description);

  const assignedTo = document.querySelector("#assignment");
  const assignment = assignedTo.value;
  console.log("Assigned To:", assignment);

  const dueDate = document.querySelector("#due-date");
  const date = dueDate.value;
  console.log("Due Date:", date);
}




