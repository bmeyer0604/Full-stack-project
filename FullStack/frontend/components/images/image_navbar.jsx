import React from 'react';

class ImageNavbar extends React.Component {
    render() {
        return(
            <div className="imageNavbar">
                <div className="imageNavDropdown">
                    <ul>
                        <li>MOST VIRAL</li>
                        <li>USER SUBMITTED</li>
                        <li>HIGHEST SCORING</li>
                    </ul>
                </div>
                <div className="searchByDropdown">
                    <ul>
                        <li>POPULAR</li>
                        <li>NEWEST</li>
                        <li>BEST</li>
                        <li>RANDOM</li>
                    </ul>
                </div>
                <div className="imageNavIcons">
                    <ul>
                        <li>Disable autoplay</li>
                        <li>Waterfall</li>
                        <li>Box format</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ImageNavbar;