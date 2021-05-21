import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function InputLogin({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(false);
    let history = useHistory();

    function disable() {
        setDisableButton(true);
    }

    function enable() {
        setDisableButton(false);
    }

    function login() {
        const promise = axios.post(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
            {
                email,
                password,
            }
        );

        promise.then((response) => {
            setUser(response.data);
            history.push('./habitos');
        });

        promise.catch(() => {
            enable();
            alert('EMAIL OU SENHA INCORRETO(A)!!');
        });
    }

    return (
        <form>
            <Inputs>
                <input
                    value={email}
                    placeholder="email"
                    disabled={disableButton}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                ></input>
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="senha"
                    disabled={disableButton}
                    type="password"
                ></input>

                <button
                    type="submit"
                    disabled={disableButton}
                    onClick={() => {
                        disable();
                        login();
                    }}
                >
                    {!disableButton ? (
                        'entrar'
                    ) : (
                        <Loader type="ThreeDots" color="white"></Loader>
                    )}
                </button>
            </Inputs>
        </form>
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
        min-width: 84vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input::placeholder {
        text-align: left;
        padding-left: 10px;
        color: #dbdbdb;
    }

    input {
        padding-left: 10px;
    }

    button:disabled {
        opacity: 0.5;
    }
`;
