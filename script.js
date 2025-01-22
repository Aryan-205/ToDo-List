
let count=3;

function deleteToDo(index){
  const element = document.getElementById(`todo-${index}`);
  element.parentNode.removeChild(element);
}

function addToDo(){

  const inputEl=document.querySelector("input");
  const elementDiv=document.createElement("div");

  if (inputEl.value===''){
    console.log("Enter a value...");
    alert("Please enter a to-do item.");
    return;
  }
  count+=1;

  elementDiv.innerHTML=`
    <div id="todo-${count}" class="task-box">
      <h4>${inputEl.value}</h4>
      <button class="delete-button" onclick="deleteToDo(${count})">
        Delete
      </button>
    </div>`;

  const toEl = document.querySelector(".todo-box");

  //toEl.appendChild(elementDiv);

  const inputContainer = document.querySelector(".todo-box > div:last-child");
  toEl.insertBefore(elementDiv, inputContainer);

  inputEl.value = '';
}

