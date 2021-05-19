import styled from 'styled-components';

export default function InputLogin() {
    return (
        <Inputs>
            <input placeholder="email"></input>
            <input placeholder="senha" type="password"></input>
            <button type="submit">entrar</button>
        </Inputs>
    );
}

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 160px;
    justify-content: space-evenly;
    align-items: center;

    input,
    button {
        width: 81%;
        font-size: 20px;
        height: 45px;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
    }

    button {
        text-align: center;
        color: white;
        background-color: #52b6ff;
        width: 83%;
    }

    input::placeholder {
        text-align: left;
        padding-left: 10px;
        color: #dbdbdb;
    }

    input {
        padding-left: 10px;
    }
`;
