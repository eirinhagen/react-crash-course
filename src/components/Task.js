import { FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div className="task">
        <h3>{task.text}</h3>
        <p>{task.time}</p>
    </div>
  )
}

export default Task