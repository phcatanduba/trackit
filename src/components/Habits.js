import { useContext, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import { IconContext } from 'react-icons';
import { MdAddBox } from 'react-icons/md';
import CreateHabit from './CreateHabit';
import { Link } from 'react-router-dom';

export default function Habits() {
    const user = useContext(UserContext);
    const [isHidden, setIsHidden] = useState(true);

    function addHabit() {
        if (isHidden) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    }

    return (
        <Container>
            <AddHabit>
                <div>
                    <p>Meus Habitos</p>
                    <IconContext.Provider
                        value={{ color: '#52b6ff', size: '3em' }}
                    >
                        <MdAddBox
                            onClick={(e) => {
                                addHabit(e);
                            }}
                        />
                    </IconContext.Provider>
                </div>
            </AddHabit>
            <AddingHabit>
                <div hidden={isHidden}>
                    <CreateHabit addHabit={addHabit} />
                </div>
            </AddingHabit>
            <ul>
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um
                    hábito para começar a trackear!
                </p>
            </ul>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 92px;

    ul {
        margin-top: 30px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    p {
        width: 90%;
        color: #666666;
        font-size: 18px;
    }
`;

const AddingHabit = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        width: 90%;
        height: 180px;
        background: white;
        margin-top: 20px;
    }
`;

const AddHabit = styled.div`
    display: flex;
    justify-content: center;

    div {
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: center;
    }

    p {
        color: #126ba5;
        font-size: 23px;
    }
`;
