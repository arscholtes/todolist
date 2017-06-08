var newTodo = document.querySelector( '#newTodo' );

var todoList = document.getElementById('todoList');

newTodo.addEventListener('keypress',
function(event)
{if (event.keyCode === 13){
  var todoContent = event.target.value;
  event.target.value = '';
  var newTodoLi = document.createElement('li');
newTodoLi.textContent = todoContent;
todoList.appendChild(newTodoLi);
}
return event;
}
);




// todoInput.addEventListener('keypress',
// function(event)
// {if (event.keyCode === 13){
//   var todoContent = event.target.value;
//   event.target.value = '';
//   var newTodoLi = document.createElement('li');
//   newTodoLi.textContent = todoContent;
//   todoList.appendChild(newTodoLi);
// }
// return event;
// }
// );
