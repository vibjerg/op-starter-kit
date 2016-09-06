import SocketClient from './Utils/Sockets';

export default function request(event, params) {
  return dispatch => {
    SocketClient.emit('request', {event, params});
  };
}