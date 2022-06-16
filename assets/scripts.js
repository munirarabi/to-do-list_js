var valueInput = "";
var contTask = 0;

function addTask() {
  document.getElementById("tasks").innerHTML += `
    <div id="task${contTask}">
        <input type="checkbox" id="task${contTask}" name="task${contTask}" value="task${contTask}">
        <label for="task${contTask}">${valueInput}</label>
    </div>`;
}

function addContTask() {
  contTask++;
}

function cleanValueInput() {
  document.getElementById("task-input").value = "";
  valueInput = "";
}

function focusInput() {
  document.getElementById("task-input").focus();
}

document.getElementById("task-input").addEventListener("keyup", () => {
  valueInput = document.getElementById("task-input").value;
});

document.getElementById("buttonAddTask").addEventListener("click", (event) => {
  event.preventDefault();

  if (!valueInput == "") {
    addTask();
    addContTask();
    cleanValueInput();
    focusInput();
  } else {
    alert("Digite a tarefa no input");
  }
});
