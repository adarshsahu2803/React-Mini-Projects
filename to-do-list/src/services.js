export const addItem = (todoItem) => {
    const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
    allTodos.push({
        id: Date.now(),
        title: todoItem
    })

    console.log(allTodos);
    localStorage.setItem("todos", JSON.stringify(allTodos))
}

export const getAllTods = () => {
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(allTodos);
    return allTodos;
}