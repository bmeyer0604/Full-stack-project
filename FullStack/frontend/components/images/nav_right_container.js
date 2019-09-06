import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import ImageNavRight from './nav_right';

const mapStateToProps = (state) => {
    return {
        currentUser: state.users[state.session.id]
    };
};

export default connect(mapStateToProps)(ImageNavRight);