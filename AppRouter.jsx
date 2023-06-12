import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SidebarMenu from './sidenav';
import PlayerSectionPage from './PlayerSectionPage';

function AppRouter() {
    return (
        <Router>
        <SidebarMenu/>
          <Switch>
          <Route path="/player" component={PlayerSectionPage}/>
          </Switch>
        </Router>
    );
}

export default AppRouter;