import express from 'express';
import bodyParser from 'body-parser'
//import Role from '../models/role'

const app = express();
app.use(bodyParser.json());

app.post('/', function (req, res) {
  const { Pool } = require('pg');
  var config = {
      user: 'zkhlbumxguqarf', 
      database: 'df1k31nveubtst', 
      password: 'd13c60e957966a96de0a011d1122e4d5642c484699ad572a179e731f8ae801cc', 
      host: 'ec2-174-129-238-192.compute-1.amazonaws.com', 
      port: 5432, 
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 30000,
      dialect: 'postgres',
  };
  const pool = new Pool(config);
  pool.on('error', function (err, client) {
      console.error('idle client error', err.message, err.stack);
  });
  pool.query('SELECT * from "Roles" where id = ', ['1'], function(err, res) {
      if(err) {
          return console.error('error running query', err);
      }
      res.send(res.rows[0]);
  });
  res.send('Hello World');
})

export default app;