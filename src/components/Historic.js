import Header from './Header';
import Menu from './Menu';
import styled from 'styled-components';

export default function History() {
    return (
        <Main>
            <Header></Header>
            <Container>
                <div className="title">
                    <p className="title">Historico</p>
                </div>
                <p className="historic">
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>
            </Container>
            <Menu></Menu>
        </Main>
    );
}

const Container = styled.div`
    margin-top: 92px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.title,
    p {
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: center;
    }

    p.title {
        color: #126ba5;
        font-size: 23px;
    }

    p.historic {
        width: 90%;
        color: #666666;
        font-size: 18px;
        margin-top: 20px;
    }
`;

const Main = styled.main`
    background: #f0f0f0;
    display: flex;
    height: 100%;
    margin-bottom: 92px;
`;
