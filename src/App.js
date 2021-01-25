import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks]= useState([
    {
        id:1,
        text:"Taks 1 To be Done",
        day: "5th Feb 2021",
        reminder: true
    },
    {
        id:2,
        text:"Tasks 2 To be Done",
        day: "7th Feb 2021",
        reminder: true
    }
])



// delete tak

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>{
      return task.id !== id
    }))

  }

  // toggle reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder:!task.reminder
    }: task))
  }
  return (
    <div className="container">
      <Header title="Task Tracker"/>
     { tasks.length > 0 ? 
     <Tasks 
     tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder}/>
     : "No Tasks"}
    </div>
  );
}

export default App;
