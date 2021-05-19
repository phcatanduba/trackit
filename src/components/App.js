import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignIn from './SignIn';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
            </Switch>
            <Switch>
                <Route path="/cadastro" exact>
                    <SignIn />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
