import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NavRight from './nav_right';

const mapStateToProps = (state) => {
    return {
        currentUser: state.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavRight);
