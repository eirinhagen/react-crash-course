const tasks = [
    {id : 1,
     text : "Coocking salmon",
     reminder : true
    },
    {id : 2,
        text : "Eating salmon",
        reminder : false
       }
]
const Tasks = () => {
  return (
    <>
    {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks