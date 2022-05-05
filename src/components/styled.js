import styled from "styled-components";

export let Wrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
    border: 1px solid #99939338;
    text-align: center;
    padding: 2rem 0;
`;

export let Heading = styled.h1`
    font-size: 40px;
`;

export let TodoWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    text-align: left;
`;

export let TodoH1 = styled.h1`
    color: ${(props) => (props.color ? props.color : "#142266")};
`;

export let TodoItemWrapper = styled.div`
    width: 90%;
    height: 55px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
`;

export let TodoDelete = styled.img`
    position: absolute;
    right: 0;
    cursor: pointer;
`;

export let TodoTitles = styled.h4`
    margin-left: 40px;
    display: inline-block;
    font-size: 25px;
`;

export let SpanRound = styled.span`
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #142266;
    position: absolute;
    cursor: pointer;
`;

export let InputWrapper = styled.div`
    border: 1px solid #111;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 40px;
    position: relative;
    border-right: none;
    border-radius: 0 10px 10px 0;
`;
export let AddButton = styled.button`
    border: none;
    background-color: #142266;
    color: #fff;
    font-size: 25px;
    font-weight: 300;
    padding: 8px 16px;
    border-radius: 0 10px 10px 0;
    cursor:pointer;
`;
export let AddText = styled.input`
    border: none;
    padding: 10px 20px;
    width: 73%;
    font-size: 19px;
    margin-right: 18px;
    margin-left: 15px;
    &:focus {
        outline: none;
    }
`;

export let PlusButton = styled.img`
    outline: none;
    position: absolute;
    left: 15px;
    top: 20px;
`;

export let CompletedItemsWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom:12px;
`;

export let TickWrapper = styled.span`
    display: inline-block;
    width: 35px;
    height: 35px;
    padding: 6px;
    border-radius: 50%;
    border: 2px solid #06c692;
`;
export let Tick = styled.img`
    display: block;
    margin: auto;
`;
export let CompletedTitlestick = styled.h4`
    display: inline-block;
    margin-left: 10px;
    font-size: 25px;
    color:#06c692;
`;

export let Revert = styled.img`
    margin: 0 50px 0 auto;
    cursor:pointer;
`;
