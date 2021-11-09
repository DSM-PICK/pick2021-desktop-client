import styled from "@emotion/styled";
import { COLOR } from '../../style/index';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    /* margin: 0 140px; */
    justify-content: center;
    align-items: center;
`;

export const ACContainer = styled.div`
    width: 1280px;
    height: 800px;
    display: grid;
    /* margin: auto; */
    grid-template-rows: 40% 60%;
`;

export const Title = styled.div`
    font-size: 24px;
    margin-bottom: 16px;
`;

export const ACBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40%;
    position: relative;
`;

export const AddButton = styled.input`
    width: 100%;
    height: 40px;
    background-color: ${COLOR.orange};
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 16px;
`;

export const ErrorMessage = styled.div`
    width: 100%;
    color: red;
    text-align: center;
    bottom: 0;
    transform: translateY(100%);
    font-size: 16px;
    display: none;
`;

export const ACColumn = styled.div`
    height: 30px;
    margin: 20px 0 20px 30px;
    display: flex;
    align-items: center;
`;

export const ACTitle = styled.div`
    font-size: 16px;
    width: 70px;
    margin-right: 50px;
    display: flex;
    align-self: center;
`;

export const AbsentsBox = styled.div`
    display: flex;

`;

export const addAbsents = styled.div`
    
`;


export const DateBox = styled.div`
    display: flex;
    width: 100%;
    span {
        margin: 0 10px;
    }
`;

export const Date = styled.div`
    display: flex;
    justify-content: space-between;
    width: 185px;
`;

export const DateText = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;œ
    &:hover {
        border-bottom: 1px dotted ${COLOR.black};
    }
`;

export const ClassInput = styled.input`
    width: 15px;
    text-align: center;
    outline: none;
    border: none;
    font-size: 16px;
    border-bottom: 1px solid ${COLOR.black};
`;

export const TypeBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const Types = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border: 1px solid ${COLOR.grey};
    border-radius: 6px;
    overflow: hidden;
`;

export const Type = styled.div`
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NoteBox = styled.div`
    width: 100%;
`;

export const NoteInput = styled.input`
    width: 97%;
    height: 40px;
    border: none;
    border-bottom: 1px solid ${COLOR.black};
    outline: none;
    font-size: 14px;
    text-align: center;
`;

//------------------------------------


export const ACListBox = styled.div`
    padding-top: 50px;
    width: 100%;
    /* height: 100%; */
`;

export const ACListHeader = styled.div`
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 35% 13% 13% 13% 25%;
    border-bottom: 1px solid ${COLOR.grey};
`;

export const ACListBody = styled.div`
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    height: 90%;
    width: 100%;
    overflow: scroll;
`;

export const ACListHead = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ACList = styled.div`
    width: 100%;
    height: 80%;
    border: 1px solid ${COLOR.grey};
    border-radius: 10px;
`;

export const ACListCells = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ACListColumns = styled.div`
    height: 60px;
    display: grid;
    grid-template-columns: 35% 13% 13% 13% 25%;
    position: relative;
    &:hover {
        background-color: ${COLOR.grey};
    }
`;

export const ACListSettings = styled.div`
    width: 17px;
    height: 17px;
    position: absolute;
    right: 10px;
    transform: translateY(-50%);
    top: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
    div {
        border-radius: 50%;
        background-color: gray;
        width: 4px;
        height: 4px;
    }
`;