import React, { useState } from "react";
import { InputWrapper, AddText, AddButton, PlusButton } from "./styled";
import addBtn from "../../public/assets/plus.svg";

const Input = (props) => {
    const [input, setInput] = useState("");
    const newTodoHandler = () => {
        props.addNewTodo({ title: input,id:props.id });
        setInput('')
    }
    return (
        <InputWrapper>
            <label htmlFor="addTodo">
                <PlusButton src={addBtn} alt="add button" />
            </label>
            <AddText
                type="text"
                id="addTodo"
                placeholder="Type new task..."
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                onKeyDown={(e) => {
                    e.key==="Enter" && newTodoHandler()
                }}
            />
            <AddButton
                onClick={newTodoHandler}
            >
                Add New
            </AddButton>
        </InputWrapper>
    );
};

export default Input;
