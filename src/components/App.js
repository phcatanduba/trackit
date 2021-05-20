import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignIn from './SignIn';
import Habits from './Habits';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
            </Switch>
            <Switch>
                <Route path="/cadastro">
                    <SignIn />
                </Route>
            </Switch>
            <Switch>
                <Route path="/habitos">
                    <Habits />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
