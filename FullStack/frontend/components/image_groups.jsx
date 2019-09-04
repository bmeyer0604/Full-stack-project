import React from 'react';

class ImageGroups extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        return(
            <div className="imageGroups">
                <div className="imageGroupTags">
                    <h4>EXPLORE TAGS</h4>
                    <h4>MORE TAGS +</h4>
                </div>
                <div className="imageGroupButtons">
                    <button>Oddly Satisfying Featured</button>
                    <button>Funny</button>
                    <button>Memes</button>
                    <button>Science And Tech</button>
                </div>
            </div>
        )
    }
}

export default ImageGroups;