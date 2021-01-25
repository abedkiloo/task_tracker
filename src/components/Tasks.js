
const Tasks = ({tasks}) => {
   
    return(
        <>
        {
            tasks.map((task) => {
            return <h3 key={task.id}>{task.text}</h3>
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