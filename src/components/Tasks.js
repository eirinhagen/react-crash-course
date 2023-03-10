import Task from "./Task"
const Tasks = ({tasks}) => {
  return (
    <>
    {tasks.map((abc)=>(
        <Task key={abc.id} task={abc} /> ))}
    </>

  )
}

export default Tasks