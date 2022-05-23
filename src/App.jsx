import React from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Certificates from './Certificates';

const App = () => {
    return (
        <>
        <profile />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/certificates" component={Certificates} />
                <Route exact path="/files" component={Files} />
                <Route exact path="/forum" component={Forum} />
                <Route exact path="/podcasts" component={Podcasts} />
                <Redirect to = "/" />
            </Switch>
        </>
    );
};

export default App;