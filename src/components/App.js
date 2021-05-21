import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import Login from './Login';
import SignIn from './SignIn';
import HabitsPage from './HabitsPage';
import React from 'react';
import Today from './Today';
import Historic from './Historic';
import UserContext from '../context/UserContext';

export default function App() {
    const [user, setUser] = useState({});

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login setUser={setUser} />
                </Route>
            </Switch>
            <Switch>
                <Route path="/cadastro">
                    <SignIn />
                </Route>
            </Switch>
            <Switch>
                <Route path="/habitos">
                    <UserContext.Provider value={user}>
                        <HabitsPage />
                    </UserContext.Provider>
                </Route>
            </Switch>
            <Switch>
                <Route path="/hoje">
                    <UserContext.Provider value={user}>
                        <Today />
                    </UserContext.Provider>
                </Route>
            </Switch>
            <Switch>
                <Route path="/historico">
                    <UserContext.Provider value={user}>
                        <Historic />
                    </UserContext.Provider>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
