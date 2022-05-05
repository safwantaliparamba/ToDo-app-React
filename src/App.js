import { useState } from "react";
import "./App.css";
import CompletedList from "./components/CompletedList";
import Input from "./components/Input";
import { Wrapper, Heading } from "./components/styled";
import TodoList from "./components/TodoList";

function App() {
    const [todo, setTodo] = useState([
        { id: 1, title: "buy groceries" },
        { id: 2, title: "buy meat" },
        { id: 3, title: "buy fish" },
        { id: 4, title: "buy dress" },
    ]);
    const [completedTodo, setCompletedTodo] = useState([
        { id: 5, title: "do homework" },
        { id: 6, title: "clean dishs" },
        { id: 7, title: "clean house" },
        { id: 8, title: "go to grandma's house" },
    ]);
    const initialCount = todo.length + completedTodo.length;
    const [count, setCount] = useState(initialCount);

    const addnewTodo = (newTodo) => {
        setCount(count + 1);
        setTodo([...todo, newTodo]);
    };

    const deleteTodohandler = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
    };
    const deleteCompletedTodohandler = (id) => {
        setCompletedTodo(completedTodo.filter((item) => item.id !== id));
    };

    const addToCompletedTodo = (id) => {
        deleteTodohandler(id);
        setCompletedTodo([todo.find((x) => x.id === id), ...completedTodo]);
    };
    const revertToTodo = (id) => {
        deleteCompletedTodohandler(id);
        setTodo([completedTodo.find((x) => x.id === id), ...todo]);
    };
    return (
        <Wrapper>
            <Heading>Todo List</Heading>
            <TodoList
                todo={todo}
                deleteTodo={deleteTodohandler}
                addToComplete={addToCompletedTodo}
            />
            <Input addNewTodo={addnewTodo} id={count + 1} />
            <CompletedList
                completedTodo={completedTodo}
                deleteTodo={deleteCompletedTodohandler}
                revertTodo={revertToTodo}
            />
        </Wrapper>
    );
}

export default App;
