import React, { useState } from "react"

function TodoList({ todos, deleteTodo, toggleTodo, updateTodo }) {
    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState(null);

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    }

    const handleUpdate = (id) => {
        if (editText.trim() !== '') {
            updateTodo(id, editText);
            setEditId(null);
            setEditText('');
        }
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {editId === todo.id ? (
                        <div>
                            <input
                                type="text"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <button onClick={() => handleUpdate(todo.id)}>Save</button>
                        </div>) : (
                        <div>
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                            </span>
                            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default TodoList
