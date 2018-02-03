import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router-dom';
import * as routes from '../routes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const THEME_COLORS = {
    redColor : "#be0e0a",
    greyColor : "#7b8397",
    lightBlue : "#4691e1",
    pink : "#c62470",
    textColor : "#233c7b",
  
  };

const palette = {
    secondary1Color: THEME_COLORS.textColor,
    accent1Color: THEME_COLORS.lightBlue,
    primary1Color: "#4691e1",
  
    primary2Color: THEME_COLORS.greyColor,
    accent2Color: "#5a6480",
  
    primary3Color: "#1fc055",
    accent3Color: "#259b23",
    redColor: THEME_COLORS.redColor,
  };
  const muiTheme = getMuiTheme({
    palette: palette,
    tabs: {
      backgroundColor: "#E8EDF8",
      textColor: palette.secondary1Color,
      selectedTextColor: palette.secondary1Color,
    },
    inkBar: {
      backgroundColor: palette.secondary1Color,
    },
    checkbox: {
      checkedColor: palette.accent1Color,
      labelCheckedColor: palette.accent1Color,
      boxColor: palette.primary2Color,
      labelColor: palette.primary2Color,
    },
    radioButton: {
      checkedColor: palette.accent1Color,
      labelCheckedColor: palette.accent1Color,
      borderColor: palette.primary2Color,
      labelColor: palette.primary2Color,
    },
    floatingActionButton: {
      color: palette.redColor,
    },
    textField: {
      floatingLabelColor: palette.accent1Color,
    },
  });
  

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