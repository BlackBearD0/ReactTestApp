import logo from './logo.svg';
import './App.css';
import Form from './Form';
import List from './components/List/List';
import { useState } from 'react';

const App = () => {
  const [taskList, setTaskList] = useState([
    { id: 1, name: 'tak 1' },
    { id: 2, name: 'tak 2' },
  ])
  const deleteTask = (id) => setTaskList(taskList.filter(task => task.id != id))
  const addTask = task => setTaskList(oldList => [...oldList, task])

  return (
    <div className="App">
      <Form onAdd={(task) => addTask(task)} />
      <List data={taskList} onDelete={(id) => deleteTask(id)} />
    </div>
  );
}

export default App;
