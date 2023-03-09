import { useState } from "react"
const Tasks = () => {
    const [tasks,setTasks] = useState([
        {id : 1,
         text : "Coocking salmon",
         reminder : true
        },
        {id : 2,
            text : "Eating salmon",
            reminder : false
           }
    ])
  return (
    <>
    {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks