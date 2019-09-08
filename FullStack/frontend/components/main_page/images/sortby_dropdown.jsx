import React from 'react';
  
class SortbyDropdown extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let drops = [];
        if(this.props.sortedBy === "MOST VIRAL") {
            drops = ["POPULAR", "NEWEST", "BEST", "RANDOM"]
        } else if (this.props.sortedBy === "USER SUBMITTED") {
            drops = ["POPULAR", "RISING", "NEWEST"];
        } else if (this.props.sortedBy === "HIGHEST SCORING") {
            drops = ["TODAY", "WEEK", "MONTH", "YEAR", "ALL TIME"];
        }

        let dropItems = drops.map(drop => {
            return <div className="dropdown-list-item" key={drop.id}>{drop}</div>
        })

        return(
            <div className="dropdown-list" id="dd-list-two">
                <div className="dropdown-triangle"></div>
                <ul>
                    {dropItems}
                </ul>
            </div>
        )
    }
}

export default SortbyDropdown;