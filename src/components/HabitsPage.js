import styled from 'styled-components';
import Habits from './Habits';
import Header from './Header';
import Menu from './Menu';

export default function HabitsPage() {
    return (
        <Main>
            <Header />
            <Habits />
            <Menu />
        </Main>
    );
}

const Main = styled.main`
    background: #f0f0f0;
    display: flex;
    height: 100%;
    margin-bottom: 92px;
`;
