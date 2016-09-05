import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.get(/^\/([a-zA-Z]+\.html)$/, (req, res) => {
  const filepath = path.join(__dirname, '../../../', 'static/');
  res.sendFile(filepath + req.params[0]);
});

export default router;
