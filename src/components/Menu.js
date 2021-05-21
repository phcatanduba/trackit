import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {
    let percentage = 100;
    return (
        <Footer>
            <div className="container">
                <Habits>Habitos</Habits>
                <Today>
                    <CircularProgressbar
                        background={true}
                        backgroundPadding={7}
                        value={percentage}
                        text="Hoje"
                        styles={buildStyles({
                            pathColor: 'white',
                            textColor: 'white',
                            backgroundColor: '#52b6ff',
                        })}
                    ></CircularProgressbar>
                </Today>
                <History>Historico</History>
            </div>
        </Footer>
    );
}

const Footer = styled.footer`
    width: 100%;
    height: 70px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;

    div.container {
        width: 90%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    div {
        font-size: 18px;
        color: #52b6ff;
    }
`;

const Habits = styled.div``;
const Today = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 60px;
`;
const History = styled.div``;
