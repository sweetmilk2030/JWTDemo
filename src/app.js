import express from 'express';
import bodyParser from 'body-parser'
//import Role from '../models/role'

const app = express();
app.use(bodyParser.json());
const connectionString = 'postgres://zkhlbumxguqarf:d13c60e957966a96de0a011d1122e4d5642c484699ad572a179e731f8ae801cc@ec2-174-129-238-192.compute-1.amazonaws.com:5432/df1k31nveubtst';

app.get('/', function (req, res, next) {
  pg.connect(connectionString,function(err,client,done) {
    if(err){
        console.log("not able to get connection "+ err);
        res.status(400).send(err);
    } 
    client.query('SELECT * FROM Roles where id = $1', [1],function(err,result) {
        done(); // closing the connection;
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
  });
});

export default app;