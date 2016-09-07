import SocketClient from './Utils/Sockets';

export function request(event, params) {
  return dispatch => {
    SocketClient.emit('request', {event, params});
  };
}

export function ui(action, data = {}) {
  return (dispatch) => {
    dispatch({
      type: 'ui',
      action,
      data
    });
  }
}

