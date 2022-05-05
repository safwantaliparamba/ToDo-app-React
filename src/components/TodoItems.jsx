import React from 'react';
import deleteBtn from "../../public/assets/delete.svg";
import {
    TodoItemWrapper,
    TodoDelete,
    TodoTitles,
    SpanRound,
} from "./styled";

const Todoitems = (props) => {
    return (
        <>
            <TodoItemWrapper>
                <SpanRound onClick={()=>{
                    props.addToComplete(props.id)
                }} />
                <TodoTitles >{props.id} , {props.title}</TodoTitles>
                <TodoDelete src={deleteBtn} alt="delete button" onClick={()=>{
                    props.deleteTodo(props.id)
                }} />
            </TodoItemWrapper>
        </>
    );
}

export default Todoitems;
