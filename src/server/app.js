import express from 'express';
import routes from './routes/main.routes';
import {config} from '@dbcdk/biblo-config';

const app = express();
const server = require('http').Server(app);
const socket = require('socket.io').listen(server);

import SetupServiceProvider from './serviceProvider/serviceprovider.lib';

SetupServiceProvider(config, socket);

app.use('/public', express.static('public'));

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

app.use('/', routes);

server.listen(app.get('port'), function () {
  console.log(`Openservice starter kit running on port ${app.get('port')}`);
});

