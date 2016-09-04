import express from 'express';
import routes from './routes';
const app = express();

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

app.use('/', routes);

app.listen(app.get('port'), function () {
  console.log(`Openservice starter kit running on port ${app.get('port')}`);
});

