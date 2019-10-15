import express from 'express';
import bodyParser from 'body-parser'
//import Role from '../models/role'

const app = express();
app.use(bodyParser.json());

app.post('/', function (req, res) {
  const { Pool, Client } = require('pg');
  const connectionString = 'postgres://zkhlbumxguqarf:d13c60e957966a96de0a011d1122e4d5642c484699ad572a179e731f8ae801cc@ec2-174-129-238-192.compute-1.amazonaws.com:5432/df1k31nveubtst';
  var config = {
      username: 'zkhlbumxguqarf', 
      database: 'df1k31nveubtst', 
      password: 'd13c60e957966a96de0a011d1122e4d5642c484699ad572a179e731f8ae801cc', 
      host: 'ec2-174-129-238-192.compute-1.amazonaws.com',
      dialect: 'postgres',
  };
  const pool = new Pool({
    connectionString: connectionString,
  });
  pool.query('SELECT NOW()', (err, res) => {
    res.send(res);
    pool.end();
  })
  const client = new Client({
    connectionString: connectionString,
  })
  client.connect();

  client.query('SELECT NOW()', (err, res) => {
    res.send(res);
    client.end();
  })  
  
})

export default app;