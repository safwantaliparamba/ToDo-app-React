import React from "react";
import { TodoWrapper, TodoH1 } from "./styled";
import Todoitems from "./TodoItems";

function TodoList(props) {
    return (
        <TodoWrapper>
            <TodoH1>Things to be done</TodoH1>
            {props.todo.map((todoItem) => (
                <Todoitems
                    key={todoItem.id}
                    title={todoItem.title}
                    id={todoItem.id}
                    deleteTodo={props.deleteTodo}
                    addToComplete={props.addToComplete}
                />
            ))}
        </TodoWrapper>
    );
}

export default TodoList;
