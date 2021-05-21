import styled from 'styled-components';
import axios from 'axios';
import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

let habitDays = [];

export default function CreateHabit({ addHabit }) {
    const user = useContext(UserContext);
    const [habitName, setHabitName] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [wasClicked, setWasClicked] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    let bgColor = 'white';
    let txtColor = '#DBDBDB';

    function sendHabit() {
        const promise = axios.post(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            { name: habitName, days: habitDays },
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );

        setIsDisable(true);

        promise.catch(() => {
            console.log('falha');
        });
        promise.then((response) => {
            setIsDisable(false);
            addHabit();
            habitDays = [];
            setHabitName('');
            setWasClicked([false, false, false, false, false, false, false]);
            console.log(response.data);
        });
    }

    return (
        <>
            <Input
                value={habitName}
                placeholder="nome do habito"
                onChange={(e) => {
                    setHabitName(e.target.value);
                }}
            ></Input>
            <Week>
                {wasClicked.map((boolean, i) => {
                    return (
                        <WeekDay
                            key={i}
                            className="input-day"
                            disable={isDisable}
                            onClick={(e) => {
                                let array = [...wasClicked];
                                if (!array[i]) {
                                    array[i] = true;
                                    habitDays.push(i + 1);
                                    setWasClicked(array);
                                } else {
                                    array[i] = false;
                                    habitDays = habitDays.filter(
                                        (day) => day !== i + 1
                                    );
                                    setWasClicked(array);
                                }
                            }}
                            bgColor={!wasClicked[i] ? bgColor : txtColor}
                            txtColor={!wasClicked[i] ? txtColor : bgColor}
                        >
                            {week[i]}
                        </WeekDay>
                    );
                })}
            </Week>
            <Buttons>
                <Cancel
                    onClick={() => {
                        addHabit();
                    }}
                >
                    Cancelar
                </Cancel>
                <Save
                    onClick={() => {
                        sendHabit();
                    }}
                >
                    Salvar
                </Save>
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

const WeekDay = styled.button`
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ txtColor }) => txtColor};
    background: ${({ bgColor }) => bgColor};
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
