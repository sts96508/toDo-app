import { ToDoCard } from "./ToDoCard";

export function ToDoList(props) {
  const { todos, selectedTab } = props;

  const filterToDosList = selectedTab === 'All' ? todos
    : selectedTab === 'Completed' ? todos.filter( val => val.complete)
    : todos.filter(val => !val.complete)

  return (
  <>
    {filterToDosList.map((todo, todoIndex) => {
      const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
      
      return (
        <ToDoCard 
        key={todoIndex} 
        todoIndex={tempTodoIndex}
        {...props}
        todo={todo}/>
      )
    })}

  </>
  )
}
