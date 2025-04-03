import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { ToDoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";
import { useState, useEffect } from "react";

function App() {

  //comment for learning git
  // added directly on githug
  const [todos, setTodos] = useState([
    { input: "shave n trim", complete: true }
  ])
  const [selectedTab, setSelectedTab] = useState('All')

  function handleAddTodo(newTodo) {
    const newToDoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newToDoList)
    handleSaveData(newToDoList)
  }

  function handleCompleteToDo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteToDo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ToDoList todos={todos} selectedTab={selectedTab} handleDeleteToDo={handleDeleteToDo} handleCompleteToDo={handleCompleteToDo} />
      <ToDoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
