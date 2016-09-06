import {AutoRequire} from 'dbc-node-serviceprovider';
import path from 'path';
import OpenPlatformClient from './clients/openplatform.client.js';


const transforms = new Map();
const clients = new Map();

function registerTransforms () {
  AutoRequire(path.join(__dirname, 'transformers'), 'transform.js')
    .map((transformObject) => transforms.set(transformObject.default.event(), wrapClientsOnTransform(transformObject.default)));
}

function wrapClientsOnTransform(transform) {
  transform.callServiceClient = (client, method, params) => {
    return clients.get(client)[method](params);
  };
  return transform;
}

function registerClients(config) {
  const clientConfig = config.get(`ServiceProvider.openplatform`);
  clients.set('openplatform', OpenPlatformClient(clientConfig));
}


export default function serviceprovider(config, io) {
  registerClients(config);
  registerTransforms();

  io.on('connection', socket => {
    socket.on('request', ({event, params}) => {
      console.log(event, params);
      const transform = transforms.get(event);
      transform.requestTransform(event, params).then(response => transform.responseTransform(response, params)).then((response) => {
        console.log(response);
        socket.emit('response', {event, params, response});
      }).catch(e => console.log(e));
    });
  });
}