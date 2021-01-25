import Task from "./Task"
const Tasks = ({tasks,onDelete,onToggle}) => {
   
    return(
        <>
        {
            tasks.map((task) => {
            return <Task key={task.id} task={task} 
            onDelete ={() => onDelete(task.id)}
            onToggle ={() => onToggle(task.id)}

            />
        })
        }
        </>
    )
}

export default Tasks

// setTasks = () => {
//     return [...  {
//         id:2,
//         text:"Tasks 2 To be Done",
//         day: "7th Feb 2021",
//         reminder: true
//     }]
// }