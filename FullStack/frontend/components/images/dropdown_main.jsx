import React from 'react';

//Pass in prop that targets the parent's state
//Give LIs click event listener
//Widgets (tabs) project

class DropdownMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div className="dropdown-list">
                <div className="dropdown-triangle"></div>
                <ul>
                    <li className="dropdown-list-item">MOST VIRAL</li>
                    <li className="dropdown-list-item">USER SUBMITTED</li>
                    <li className="dropdown-list-item">HIGHEST SCORING</li>
                </ul>
            </div>
        )
    }
}

export default DropdownMain;