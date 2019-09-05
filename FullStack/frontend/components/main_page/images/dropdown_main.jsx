import React from 'react';

//Pass in prop that targets the parent's state
//Give LIs click event listener
//Widgets (tabs) project

class DropdownMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="dropdown-list">
                <div className="dropdown-triangle"></div>
                <ul>
                    <li className="dropdown-list-item" onClick={() => this.props.updateSortedBy("MOST VIRAL")}>MOST VIRAL</li>
                    <li className="dropdown-list-item" onClick={() => this.props.updateSortedBy("USER SUBMITTED")}>USER SUBMITTED</li>
                    <li className="dropdown-list-item" onClick={() => this.props.updateSortedBy("HIGHEST SCORING")}>HIGHEST SCORING</li>
                </ul>
            </div>
        )
    }
}

export default DropdownMain;