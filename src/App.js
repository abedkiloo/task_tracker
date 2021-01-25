import logo from './logo.svg';
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
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
