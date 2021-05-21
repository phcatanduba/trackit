import { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import TrackIt from '../assets/TrackIt.png';
import UserContext from '../context/UserContext';

export default function Header() {
    const user = useContext(UserContext);
    let history = useHistory();

    if (user === undefined) {
        history.push('/');
    }

    return (
        <Top>
            <div className="container">
                <div>
                    <img src={TrackIt} />
                </div>
                <div>
                    <img className="user-image" src={user.image} />
                </div>
            </div>
        </Top>
    );
}

const Top = styled.header`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #126ba5;
    display: flex;
    justify-content: center;

    div.container {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img.user-image {
        width: 51px;
        height: 51px;
        border-radius: 51%;
    }
`;
