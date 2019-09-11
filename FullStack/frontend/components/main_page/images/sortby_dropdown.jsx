import React from 'react';
  
class SortbyDropdown extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.sortedBy === "MOST VIRAL") {
            this.state = {drops: ["POPULAR", "NEWEST", "BEST", "RANDOM"]};
        } else if (this.props.sortedBy === "USER SUBMITTED") {
            this.state = {drops: ["POPULAR", "RISING", "NEWEST"]};
        } else if (this.props.sortedBy === "HIGHEST SCORING") {
            this.state = {drops: ["TODAY", "WEEK", "MONTH", "YEAR", "ALL TIME"]};
        }
    }
    
    render() {
        let dropItems = this.state.drops.map(drop => {
            return <li className="dropdown-list-item" onClick={() => this.props.updateSortedBySub(drop)} key={drop}>{drop}</li>
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