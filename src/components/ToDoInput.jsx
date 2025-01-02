import { useState } from "react"

export function ToDoInput(props) {
  const {handleAddTodo} = props
  const [inputValue, setInputValue] = useState('')

  return (
  <div className="input-container">
    <input type="text" value={inputValue} onChange={(e)=> {
      setInputValue(e.target.value)
    }} placeholder="add task" />
    <button onClick={() => {
      if (!inputValue) { return }
      handleAddTodo(inputValue)
      setInputValue('')
    }}>
    <i className="fa-solid fa-plus"></i>
    </button>
  </div>
  )
}
