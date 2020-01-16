import React from "react";
import { Route, Redirect } from "react-router";

const ProtectedRoute = ({
    component: Component,
    isgeneral,
    isadmin,
    ...rest
}) => (
        <Route
            {...rest}
            render={props => {
                const currentUser = null;
                if (currentUser == null) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    );
                }

                // authorised so return component
                return <Component {...props} />;
            }}
        />
    );

export default ProtectedRoute;
