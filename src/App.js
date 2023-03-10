 import { useState } from "react";
 import Header from "./components/Header";
 import Tasks from "./components/Tasks";
function App() {
   
  const name = "Eirin"
 const [a,setTasks] = useState([
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


  return (
    <div className='container'>
      <Header />
      <Tasks tasks={a} />
   </div>
  );
}

export default App;
 