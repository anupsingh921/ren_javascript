let todolist = document.getElementById("todo-list");

let set = document.getElementById("set-to");

let a = 1;

set.addEventListener('click', () => {

  let input = prompt("Enter your to-do task: ");

  if (a >= 1) {
    localStorage.setItem("to-do" + a, input);


    todolist.innerHTML += localStorage.getItem("to-do" + a, input) + "<br>";

    a++;


  }

  console.log(a)

})










