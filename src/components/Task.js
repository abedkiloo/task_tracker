import Tasks from "./Tasks"
import { FaTimes } from "react-icons/fa";
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${ task.reminder ? 'reminder' :''}`}
         onDoubleClick={() => onToggle(task.id)}>
        <h4>{task.text} <FaTimes style={{color:"red" ,cursor:"pointer"}}
            onClick={onDelete}
        /></h4>
        <h5>{task.day}</h5>
        <h5>{task.reminder ? "True":"False"}</h5>
        </div>
    )
}

export default Task