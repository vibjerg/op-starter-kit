import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const router = express.Router();
const basepath = path.join(__dirname, '../../../', 'static/');
router.use(bodyParser.urlencoded({extended: true}));

router.get(/^\/([a-zA-Z]+\.html)$/, (req, res) => {

  res.sendFile(basepath + req.params[0]);
});

router.get('*', (req, res) => {
  res.sendFile(basepath + 'index.html');
});


export default router;
