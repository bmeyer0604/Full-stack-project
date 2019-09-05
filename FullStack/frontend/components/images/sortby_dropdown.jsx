import React from 'react';
import DropdownListItem from './dropdown_list_item';

class SortbyDropdown extends React.Component {
    render() {
        let drops = [];
        if(this.props.sortedBy === "MOST VIRAL") {
            drops = ["POPULAR", "NEWEST", "BEST", "RANDOM"]
        } else if (this.props.sortedBy === "USER SUBMITTED") {
            drops = ["POPULAR", "RISING", "NEWEST"];
        } else if (this.props.sortedBy === "HIGHEST SCORING") {
            drops = ["TODAY", "WEEK", "MONTH", "YEAR", "ALL TIME"];
        }

        drops = drops.map(drop => {
            return <DropdownListItem key={drop.id} drop={drop} />
        })

        return(
            <div className="dropdown-list" id="dd-list-two">
                <div className="dropdown-triangle"></div>
                {this.drops}
                <ul>
                    <li className="dropdown-list-item">POPULAR</li>
                    <li className="dropdown-list-item">NEWEST</li>
                    <li className="dropdown-list-item">BEST</li>
                    <li className="dropdown-list-item">RANDOM</li>
                </ul>
            </div>
        )
    }
}

export default SortbyDropdown;