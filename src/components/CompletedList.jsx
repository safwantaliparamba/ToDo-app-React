import React from "react";
import CompletedItems from "./CompletedItems";
import { TodoH1, TodoWrapper } from "./styled";

function CompletedList(props) {
    return (
        <TodoWrapper>
            <TodoH1>Completed</TodoH1>
            {props.completedTodo.map(todo => (
                <CompletedItems key={todo.id} title={todo.title} id={todo.id} deleteTodo={props.deleteTodo} revertTodo={props.revertTodo} />
            ))}
        </TodoWrapper>
    );
}

export default CompletedList;
