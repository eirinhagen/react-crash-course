 import { useState } from "react";
 import Header from "./components/Header";
 import Tasks from "./components/Tasks";
function App() {
   
 const [tasks,setTasks] = useState([
  {id : 1,
   text : "Coocking salmon",
   reminder : true,
   time : "15 kl"
  },
  {id : 2,
      text : "Eating salmon",
      reminder : false,
      time : "16 kl"
     }
])

const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete = {deleteTask}/>
   </div>
  );
}

export default App;
 