//import * as express from 'express';
import {StationTimeTable} from './app/station/station-time-table';
const express = require('express');
const app = express();

app.get('/api/stations/timeTable', function (req, res) {
    console.log(req);
    //let stationID = 
    res.send('Getting station time' +  + 'table from Station Time Table Service APIs.')
  })

app.get('/api/stations', function (req, res) {
    res.send('Getting stations' +  + 'list from Station Time Table Service APIs.')
  })

app.get('/api/test', function (req, res) {
  res.send('Welcome to Station Time Table Service APIs.')
})

app.listen(3000, function () {
  console.log('Station Time Table Service Web app service listening on port 3000!')
})