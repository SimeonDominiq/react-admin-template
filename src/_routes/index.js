import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";
import { history } from "../_helpers"
import routes from "../_routes/Routes"
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    {routes.map((route, i) => {
                        if (route.auth) {
                            return (
                                <ProtectedRoute
                                    key={i}
                                    isgeneral={route.general}
                                    isadmin={route.admin}
                                    {...route}
                                />
                            );
                        } else {
                            return <PublicRoute key={i} {...route} />;
                        }
                    })}
                </Switch>
            </Router>
        );
    }
}


export default Routes;
