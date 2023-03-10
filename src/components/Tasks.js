import Task from "./Task"
const Tasks = ({tasks,onDelete}) => {
  return (
    <>
    {tasks.map((abc)=>(
        <Task key={abc.id} task={abc} onDelete={onDelete} /> ))}
    </>

  )
}

export default Tasks