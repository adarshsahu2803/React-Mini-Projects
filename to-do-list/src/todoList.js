import React, { useState } from "react"
import './TodoList.css'

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
                        <div class="d1">
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <button onClick={() => handleUpdate(todo.id)}>Save</button>
                        </div>
                    ) : (
                        <div class="d2">
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
