import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import Login from './Login';
import SignIn from './SignIn';
import HabitsPage from './HabitsPage';
import React from 'react';
import Today from './Today';
import Historic from './Historic';
import UserContext from '../context/UserContext';
import PercentageContext from '../context/PercentageContext';

export default function App() {
    const [user, setUser] = useState({});
    const [percentage, setPercentage] = useState(0);

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
                        <PercentageContext.Provider
                            value={{ percentage, setPercentage }}
                        >
                            <HabitsPage />
                        </PercentageContext.Provider>
                    </UserContext.Provider>
                </Route>
            </Switch>
            <Switch>
                <Route path="/hoje">
                    <UserContext.Provider value={user}>
                        <PercentageContext.Provider
                            value={{ percentage, setPercentage }}
                        >
                            <Today />
                        </PercentageContext.Provider>
                    </UserContext.Provider>
                </Route>
            </Switch>
            <Switch>
                <Route path="/historico">
                    <UserContext.Provider value={user}>
                        <PercentageContext.Provider
                            value={{ percentage, setPercentage }}
                        >
                            <Historic />
                        </PercentageContext.Provider>
                    </UserContext.Provider>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
