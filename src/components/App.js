import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import Login from './Login';
import SignIn from './SignIn';
import Today from './Today';
import React from 'react';
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
                <Route path="/hoje">
                    <UserContext.Provider value={user}>
                        <Today />
                    </UserContext.Provider>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
