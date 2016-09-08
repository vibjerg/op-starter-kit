import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './actions';

export default connect(
  // Map redux state to group prop
  (state, props) => {
    return Object.assign({}, state, props);
  },

  // Map group actions to actions props
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch),
    };
  }
);
