import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')

  // アイテムの追加
  const handleSubmit = (e) => {
    const name = inputText

    setTodos((prevTodo) => [
      ...prevTodo,
      { id: uuidv4(), text: name, completed: false },
    ])

    setInputText('')
  }

  // 完了・未完了のToggle
  const handleToggle = (id) => {
    const newTodos = [...todos]
    const targetTodo = newTodos.find((todo) => id === todo.id)
    targetTodo.completed = !targetTodo.completed
    setTodos(newTodos)
  }

  // アイテムの削除
  const handleRemove = (id) => {
    const newTodos = [...todos]
    const targetTodo = newTodos.find((todo) => id === todo.id)
    newTodos.splice(targetTodo, 1)

    setTodos(newTodos)
  }

  return (
    <div className={styles.container}>
      <div className="container bg-red-200 rounded shadow p-6 mx-auto my-10 w-full lg:w-3/4">
        <h1 className="text-4xl font-bold">Todo List</h1>

        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Add New Todo"
            className="shadow outline-none appearance-none border rounded w-full px-3"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            className="shadow border border-red-400 rounded text-red-400 bg-white hover:text-white hover:bg-red-700 ease-in duration-100 p-2"
            onClick={handleSubmit}>
            Add
          </button>
        </div>
        <ul className="flex flex-col gap-y-5 mt-5">
          {todos.map((todo) => (
            <li className="flex flex-wrap gap-4 items-center" key={todo.id}>
              <p className={`w-full ${todo.completed && 'line-through'}`}>
                {todo.text}
              </p>

              {todo.completed ? (
                <button
                  className="shadow border border-green-400 rounded text-green-400 bg-white hover:text-white hover:bg-green-700 ease-in duration-100 p-2"
                  onClick={() => handleToggle(todo.id)}>
                  Undone
                </button>
              ) : (
                <button
                  className="shadow border border-red-400 rounded text-red-400 bg-white hover:text-white hover:bg-red-700 ease-in duration-100 p-2"
                  onClick={() => handleToggle(todo.id)}>
                  Done
                </button>
              )}

              <button
                className="shadow border border-blue-400 rounded text-blue-400 bg-white hover:text-white hover:bg-blue-700 ease-in duration-100 p-2"
                onClick={() => handleRemove(todo.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
