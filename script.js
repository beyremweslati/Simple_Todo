const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}



const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var count = 0
var unchecked = 0

document.addEventListener('click',function(e){
  DeleteTodo(e);
  CountCheckBtn(e);
})


function newTodo() {
  count++
  unchecked++

  var txt = prompt("New ToDo");
  var li = document.createElement("li")
  
  var inpcheck = document.createElement("input")
  inpcheck.setAttribute("type", "checkbox")
  inpcheck.classList.add("todo-checkbox")
  inpcheck.setAttribute("id","checkBox")
  var btn = document.createElement("button")
  btn.classList.add("button")
  btn.setAttribute("id","dlt")
  btn.textContent = "Delete"

  var spn = document.createElement("span")
  spn.innerHTML = txt;

  li.appendChild(spn);
  li.appendChild(inpcheck);
  li.appendChild(btn);
  li.classList.add("li")

  list.appendChild(li);
  list.appendChild(document.createElement("br"));
  itemCountSpan.innerHTML = count 
  uncheckedCountSpan.innerHTML = unchecked

}

function DeleteTodo(e){
    if(e.target && e.target.id == 'dlt'){
      var li = e.target.parentElement;
        if(li.querySelector("#checkBox").checked == false){
          unchecked--
          uncheckedCountSpan.innerHTML = unchecked
        }
        li.remove()
        count--
        itemCountSpan.innerHTML = count 
        
    }
}

function CountCheckBtn(e){
  if(e.target && e.target.id == 'checkBox'){
    if(e.target.checked == true){
      unchecked--
      uncheckedCountSpan.innerHTML = unchecked
    }else{
      unchecked++
      uncheckedCountSpan.innerHTML = unchecked
    }
    
  }
}