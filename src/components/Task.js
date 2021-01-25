import Tasks from "./Tasks"
import { FaTimes } from "react-icons/fa";
const Task = ({task, onDelete}) => {
    return (
        <div className="task">
        <h4>{task.text} <FaTimes style={{color:"red" ,cursor:"pointer"}}
            onClick={onDelete}
        /></h4>
        <h5>{task.day}</h5>
        </div>
    )
}
export default Task