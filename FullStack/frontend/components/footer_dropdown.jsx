import React from "react";

class FooterDropdown extends React.Component {
    render() {
        return(
            <ul className="footer-dropdown-list">
                <div className="footer-dropdown-triangle"></div>
                <ul>
                    <li>Ad Choices</li>
                    <li>Rules</li>
                    <li>Help</li>
                </ul>
                <ul>
                    <li>Careers</li>
                    <li>Store</li>
                    <li>API</li>
                </ul>
            </ul>
        )
    }
}

export default FooterDropdown;