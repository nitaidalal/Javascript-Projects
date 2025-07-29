const inp = document.querySelector("#taskInput");
const btn = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");

// Common function to create a task element
function createTask(taskText) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.classList = 'check';
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.innerHTML = `<strong>${taskText}</strong>`;
  
  // creation of edit input place
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.style.display = "none";
  editInput.className = "edit-input";

  // Toggle strike-through
  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  //Creation of delete button
  const clearBtn = document.createElement("button");
  clearBtn.textContent = "Delete";
  clearBtn.className = "clear";

  // Delete logic 
  clearBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  // Cration of edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";

  // Edit logic
  editBtn.addEventListener("click", () => {
    const currentText = span.textContent;
    editInput.value = currentText;
    span.style.display = "none";
    editInput.style.display = "inline-block";
    editInput.focus();
  });

  editInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      updateTask();
    }
  });

  editInput.addEventListener("blur", updateTask);

  function updateTask() {
    const newText = editInput.value.trim();
    if (newText !== "") {
      span.innerHTML = `<strong>${newText}</strong>`;
      saveTasks();
    }
    span.style.display = "inline-block";
    editInput.style.display = "none";
  }

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editInput);
  li.appendChild(editBtn);
  li.appendChild(clearBtn);

  taskList.appendChild(li);
}


// Add task (reusable)
function addTask() {
  const val = inp.value.trim();
  if (val === "") {
    alert("Please enter a todo");
    return;
  }
  createTask(val);
  saveTasks();
  inp.value = "";
}

// Add task on button click
btn.addEventListener("click", addTask);

// Add task on Enter key
inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Save tasks to localStorage
function saveTasks() {
  const allTasks = [
    ...document.querySelectorAll("#taskList li span strong"),
  ].map((el) => el.textContent);
  localStorage.setItem("todos", JSON.stringify(allTasks));
}

// Load tasks from localStorage on page load
window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("todos")) || [];
  saved.forEach((task) => createTask(task));
});
