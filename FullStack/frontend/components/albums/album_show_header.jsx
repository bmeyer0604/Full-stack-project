import React from 'react';
import {Link} from 'react-router-dom';

import NavRightContainer from '../main_page/nav_right_container';

class AlbumShowHeader extends React.Component {
    render() {
        return(
            <div className="imageShowHeader">
                <div className="imageShowHeaderLeft">
                    <Link to={'/'}><div className="navbarLogo">Picagur</div></Link>
                    <Link to={'/images/new'}>
                        <button className="newPostButton"><img src="/images/newpost_button.svg"/><p>New post</p><p>v</p></button>
                    </Link>
                </div>
                <NavRightContainer />
            </div>
        )
    }
}

export default AlbumShowHeader;