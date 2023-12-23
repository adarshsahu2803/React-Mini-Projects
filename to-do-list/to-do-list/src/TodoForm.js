import React, { useState } from "react"

function TodoForm({ addTodo }) {
    const [todoText, setTodoText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoText.trim() !== '') {
            addTodo(todoText)
            setTodoText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Add Todo"
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm