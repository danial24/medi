import React from 'react';
import { Route, RouteHandler } from "react-router/es6";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    constructor() {
        super();
        injectTapEventPlugin();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div id="maincanvas" className="maincanvas">
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }


}