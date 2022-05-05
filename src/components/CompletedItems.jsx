import React from "react";
import deleteBtn from "../../public/assets/delete.svg";
import revert from "../../public/assets/revert.svg";
import tick from "../../public/assets/tick-green.svg";
import {
    TickWrapper,
    Tick,
    CompletedItemsWrapper,
    CompletedTitlestick,
    TodoDelete,
    Revert
} from "./styled";

function CompletedItems(props) {
    return (
        <CompletedItemsWrapper>
            <TickWrapper className="round" >
                <Tick src={tick} alt="" />
            </TickWrapper>
            <CompletedTitlestick>{props.id} , {props.title}</CompletedTitlestick>
            <Revert src={revert} alt="revert button" onClick={() =>props.revertTodo(props.id)} />
            <TodoDelete src={deleteBtn} alt="delete button" onClick={()=>{
                props.deleteTodo(props.id)
            }} />
        </CompletedItemsWrapper>
    );
}

export default CompletedItems;
