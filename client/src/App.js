import React from "react";
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ApplicationLanding from "./pages/ApplicationLanding"
import Dashboard from "./pages/Dashboard"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
// import { Switch } from "../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router";


const App = () =>
    <MuiThemeProvider>
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={ApplicationLanding} />
                <Route exact path="/dashboard" component={Dashboard} />
               </Switch> 
            </div>
        </Router>
    </MuiThemeProvider>
        export default App;