import React from 'react';
import {Route, Switch, Link, HashRouter, Redirect} from 'react-router-dom';

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import MainPage from './main_page/main_page';
import ImageForm from './images/image_form_page';
import AlbumShowContainer from './albums/album_show_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />

            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <ProtectedRoute exact path="/images/new" component={ImageForm} />
            <ProtectedRoute path="/albums/:albumId" component={AlbumShowContainer} />
        </Switch>
    )
}
//Switch - if there are multiple matching paths, only return the first

export default App;