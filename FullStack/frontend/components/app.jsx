import React from 'react';
import {Route, Switch, Link, HashRouter, Redirect} from 'react-router-dom';

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import MainPage from './main_page/main_page';
import ImageShowContainer from './images/image_show_pages/image_show_container';
import ImageForm from './images/image_form_page';
import AlbumShowContainer from './albums/album_show_container';
import AlbumFormContainer from './albums/album_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />
            {/* <Route path="/" component={ImageShowContainer} /> */}

            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <ProtectedRoute exact path="/images/new" component={ImageForm} />
            <ProtectedRoute exact path="/albums/new" component={AlbumFormContainer} />
            <Route path="/images/:imageId" component={ImageShowContainer} />
            <Route path="/albums/:albumId" component={AlbumShowContainer} />
        </Switch>
    )
}
//Switch - if there are multiple matching paths, only return the first

export default App;