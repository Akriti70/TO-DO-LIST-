



import React from "react";


function Task({
  task,
  completedtask,
  deletetask
}) {


return (

<li className="task-card">

<div>

<h3 className={task.completed ? "completed" : ""}>
{task.title}
</h3>


<span>
{
task.completed 
? "Completed ✅"
: "Pending ⏳"
}
</span>


</div>



<div className="buttons">


<button
className="done"
onClick={()=>completedtask(task.id)}
>

{
task.completed 
? "Undo"
: "Done"
}

</button>



<button
className="delete"
onClick={()=>deletetask(task.id)}
>

Delete

</button>


</div>


</li>

);


}


export default Task;