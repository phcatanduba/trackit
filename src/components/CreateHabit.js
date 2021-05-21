import styled from 'styled-components';
import { GrCheckbox } from 'react-icons/gr';

export default function CreateHabit() {
    return (
        <>
            <Input placeholder="nome do habito"></Input>
            <Week>
                <WeekDay className="input-day">D</WeekDay>
                <WeekDay className="input-day">S</WeekDay>
                <WeekDay className="input-day">T</WeekDay>
                <WeekDay className="input-day">Q</WeekDay>
                <WeekDay className="input-day">Q</WeekDay>
                <WeekDay className="input-day">S</WeekDay>
                <WeekDay className="input-day">S</WeekDay>
            </Week>
            <Buttons>
                <Cancel>Cancelar</Cancel>
                <Save>Salvar</Save>
            </Buttons>
        </>
    );
}

const Week = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin: 0 14px;
`;

const WeekDay = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #dbdbdb;
`;

const Input = styled.input`
    width: 90%;
    height: 45px;
    margin: 14px;
    border: 1px solid #d4d4d4;
    font-size: 20px;
    border-radius: 5px;
    padding-left: 10px;

    ::placeholder {
        color: #dbdbdb;
        font-size: 20px;
    }
`;

const Buttons = styled.div`
    margin-top: 20px;
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        border: none;
    }
`;

const Cancel = styled.button`
    margin-right: 5px;
    background: none;
    color: #52b6ff;
`;

const Save = styled.button`
    width: 85px;
    height: 35px;
    background: #52b6ff;
    color: white;
    border-radius: 5px;
`;
