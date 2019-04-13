//import * as express from 'express';
import { StationController } from './app/station/station-controller';
const express = require('express');
const app = express();

app.get('/api/lines/:lineID/stations/:stationID/timeTable', async (req, res) => {
  //console.log(req);
  try {
    let lineID = req.params['lineID'];
    let stationID = req.params['stationID'];
    let stationController = new StationController()
    let timeTable = await stationController.getStationTimeTable(lineID, stationID)
    res.status(200).json({
      status: 'success',
      data: timeTable
    })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      error: err
    })
  }
})

app.get('/api/lines/:lineID/stations', async (req, res) => {
  //console.log(req);
  try {
    let lineID = req.params['lineID'];
    let stationController = new StationController()
    let stations = await stationController.getBusLineStationList(lineID)
    res.status(200).json({
      status: 'success',
      data: stations
    })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      error: err
    })
  }
})

app.listen(3000, function () {
  console.log('Station Time Table Service Web app service listening on port 3000!')
})