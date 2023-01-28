// function drogHandler(event){
//     event.dataTransfer.setData("elemid",event.target.id)
//     console.log(event.target.id)
// }
// function dragoverHandler(event){
//     event.preventDefault()
// }
// function dropHandler(event){
// const elementid= event.dataTransfer.getData("elemid")
// const doped=document.getElementById(elementid)
// event.target.appendChild(doped)
// }

// const reactt=document.querySelector(".rr")
// function cut(event){
//     console.log(event)
// reactt.style.top=`${event.pageY}px`
// reactt.style.left=`${event.pageX}px`

// }
const cancelBtn=document.querySelector(".cancelbtn")
const todoModal=document.querySelector(".todo-modal")
const  addTodo=document.querySelector(".addTodo")
const addtodoBtn=document.querySelector(".add-todobtn")
const todoInput=document.querySelector(".todo-input")
const todoList=document.querySelector(".todoslist")


function ondragoverHandler(event){
    event.preventDefault()
}
function dragtodo(event){
    event.dataTransfer.setData("todoid",event.target.id)
    console.log(event.target.id)
}

function removetodo(event){
    event.target.parentElement.remove()
}

cancelBtn.addEventListener("click", function(){
    todoModal.style.display="none"
   
})
addTodo.addEventListener("click", function(){
    todoModal.style.display="flex"
})
addtodoBtn.addEventListener("click",function(){
    if(todoInput.value===""){
alert("please insert a fucking todo")

    }else{


const newDiv= document.createElement("div")
newDiv.innerHTML =`
<div class="realtodo" id="${todoList.childElementCount}" draggable="true" ondragstart="dragtodo(event)">
<h3 class="todotitle"> ${todoInput.value} </h3>   
<i class="fa fa-times" onclick="removetodo(event)" aria-hidden="true"></i>

</div>`
todoList.appendChild(newDiv)
todoInput.value=""
todoModal.style.display="none"
    }
})
function dropHandler(event){
const elementdropid = event.dataTransfer.getData("todoid")
const dopedtodo=document.getElementById(elementdropid)
event.target.appendChild(dopedtodo)

}