import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }
    
    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return(
            <div className="searchBar">
                <input type="text" value={this.state.test} placeholder="Search for images, #tags, or @users" onChange={this.update("text")} />
            </div>
        )
    }
}

export default SearchBar;