
import React, { useEffect, useState } from 'react'
import Task from './Task'

const Home = () => {

const initialArray = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem("tasks")):[];

const [tasks,setTasks] = useState(initialArray);
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");

const submitHandler = (e) => {
  e.preventDefault();
  setTasks([...tasks, {title,description}]);
 setTitle("");
 setDescription("");
};

const deleteTask = (index) => {
  const filterdArray = tasks.filter((val,i) => {
    return i !== index;
  });
  console.log(filterdArray);
  setTasks(filterdArray)
};

useEffect( () => {
  localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks])

  return (
    <>
     <div className="container">
     <h1>Set Your Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder='Title' 
        value={title} 
        onChange={(e) => {setTitle(e.target.value)}}
        />
        <textarea 
        placeholder='Description'
        value={description} 
        onChange={(e) => {setDescription(e.target.value)}}

        ></textarea>
        <button type='submit'>ADD SOMETHING 😉</button>
      </form>  
      {tasks.map( (item, index) => (
        <Task key={index} title={item.title} description={item.description} deleteTasks={deleteTask} index={index}/>
      ))}
     </div>
    </>
  )
}

export default Home
