import express from 'express';
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());

app.post('/', function (req, res) {
  const {
    name
  } = req.body;
  console.log(name);
  res.send('Hello World');
})

export default app;