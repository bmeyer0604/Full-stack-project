import React from 'react';

class ImageGroups extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="imageGroups">
                <div className="imageGroupTags">
                    <h4>EXPLORE TAGS</h4>
                    <h4>MORE TAGS +</h4>
                </div>
                <div className="imageGroupButtons">
                    <button id="staffPicks"><p>Staff Picks</p><p>Featured</p></button>
                    <button id="funny">Funny</button>
                    <button id="memes">Memes</button>
                    <button id="scienceAndTech">Science And Tech</button>
                    <button id="gaming">Gaming</button>
                    <button id="greatOutdoors">The Great Outdoors</button>
                </div>
            </div>
        )
    }
}

export default ImageGroups;