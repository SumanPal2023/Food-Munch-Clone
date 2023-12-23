let taskCnt=document.getElementById("task");
let user_input=document.getElementById("user_input");
let add=document.getElementById("add");
let save=document.getElementById("save");
let todoObj=[
    {
        task:"learn html",
        id:1
    },
    {
        task:"learn css",
        id:2
    }
];
let item=JSON.stringify(todoObj);
localStorage.setItem("to",item)
let aa=localStorage.getItem("to");
let a=JSON.parse(aa)
console.log(aa);

let lng=todoObj.length;

function toDos(todo){
   let ckeckId="check"+todo.id;
   let labelId="label"+todo.id;
    let each_task=document.createElement('div'); //container for whole task including cbox, text, delet icon.
    each_task.classList.add("taskContainer");
    each_task.id="taskcnt";

    let checkBox=document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.id=ckeckId;
    let task=document.createElement('div'); // text & trash box cnt
    task.classList.add("task");
    let text=document.createElement("label"); //text box
    text.id=labelId;
  
    text.setAttribute("for",ckeckId)
    text.classList.add("test")
    text.textContent=todo.task;
    let trash=document.createElement("div");
    trash.id="delet";
    trash.innerHTML=`A`;//trash
    let dlt=document.getElementById("delet");
    
    trash.addEventListener('click',()=>{
       
        each_task.innerHTML=``
    })
    each_task.appendChild(checkBox);
    each_task.appendChild(task);
    taskCnt.appendChild(each_task);
    task.appendChild(text);
    task.appendChild(trash);
}
function xx(){
    let input=user_input.value;
    lng=lng+1;
    if (input=="") {
        alert("enter valid input");
        each_task.innerHTML=``
        
    }
    let todo={
        task:input,
        id:lng
    }
    todoObj.push(todo)
    toDos(todo) 
}
add.addEventListener('click',()=>{
    xx()  
  
})
for (const iterator of todoObj ) {
    toDos(iterator)   
}






