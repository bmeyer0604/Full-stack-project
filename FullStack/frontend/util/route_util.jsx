import {Route, withRouter} from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ?(
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )} />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));