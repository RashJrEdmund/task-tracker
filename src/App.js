import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTAsk = { id, ...task }
    setTasks([...tasks, newTAsk])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder= (id) => {
    setTasks(
        tasks.map((task) => 
          task.id === id ? {...task, reminder: !task.reminder} : task
        )
      )
  }

  /* 
    line 60 is a cool way of writing a teneray were, showAddTask has to be true
    before the AddTask (the form) is displayed.. showAddTask is the useState on
    line 7
  */

  return (
    <div className="container">
      <Header title={'Task Tracker'} 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No Tasks To Show'
        )}
    </div>
  );
}

export default App;

// READ THE COMMENTS TO WISE THE SHEMACK

/* 
  run this command to serve locall on localhost 8000:
  `serve -s build -p 8000`

  //-p means port
  // this is just a basic http server...

  Remember you installed the package with `sudo npm i -g serve`
*/


//  CREATING A LOCAL DB

/* 
  creating a local DB just as if it were a real back end..
  1--USE:
    `npm i json-server` // on terminal to install locally.. if it wont work, try adding  `sudo` to it

  after that, go to the file package.json and write a new script to help you access your virtual backend DB
  2--SCRIPT:
    "server": "json-server --watch db.json --port 5000"
    // you'll be using port 5000, since 3000 like the default thing
    // and 'db.json' like the name of the file

    // u gone have some default json in db.json.. clear most key-values
    // and create your DB in json format! u gerrit!
*/
