import Task from "./Task"
const Tasks = ({tasks}) => {
   
    return(
        <>
        {
            tasks.map((task) => {
            return <Task key={task.id} task={task} />
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