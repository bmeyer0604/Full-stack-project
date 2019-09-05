import React from 'react';
import FooterDropdown from './footer_dropdown';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hidden: true};
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    render() {
        return(
            <div className="Footer">
                <div className="footerLinks">
                    <p>Picagur</p>
                    <a href="#">About</a>
                    <a href="#">Press</a>
                    <a href="#">Blog</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Advertise</a>
                </div>
                <div className="footerButtons">
                    <span onClick={this.toggleDropdown}>
                        <img src="/images/app_dots.svg"/>
                        {!this.state.hidden && <FooterDropdown />}
                    </span>
                    <button>Get the App</button>
                </div>
            </div>
        )
    }
}

export default Footer;