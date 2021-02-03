import React, { Suspense } from 'react';
import './tailwind.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Info from '../routes/Info';
const App = () => {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path="/" exact component={Home} />
                <Route path="/info" exact component={Info} />
            </Suspense>
        </Switch>
    );
};

export default App;
