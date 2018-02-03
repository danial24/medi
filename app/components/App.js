import React from 'react';
import { Route, RouteHandler } from "react-router/es6";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router-dom';
import * as routes from '../routes';

export default class App extends React.Component {
    constructor() {
        super();
        injectTapEventPlugin();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div id="maincanvas" className="maincanvas">
                    <Switch>
                        {routes.childRoutesArray.map(function (item, index) {
                            return <Route exact path={item.path} component={item.component} />
                        })}
                    </Switch>
                </div>
            </MuiThemeProvider>

        );
    }

}