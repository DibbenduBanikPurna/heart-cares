import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [auth, setAuth] = useContext(userContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user || sessionStorage.getItem('user') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/log-in",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;