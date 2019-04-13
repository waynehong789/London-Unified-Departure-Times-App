"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as express from 'express';
const station_controller_1 = require("./app/station/station-controller");
const express = require('express');
const app = express();
app.get('/api/lines/:lineID/stations/:stationID/timeTable', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log(req);
    try {
        let lineID = req.params['lineID'];
        let stationID = req.params['stationID'];
        let stationController = new station_controller_1.StationController();
        let timeTable = yield stationController.getStationTimeTable(lineID, stationID);
        res.status(200).json({
            status: 'success',
            data: timeTable
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            error: err
        });
    }
}));
app.get('/api/lines/:lineID/stations', (req, res) => __awaiter(this, void 0, void 0, function* () {
    //console.log(req);
    try {
        let lineID = req.params['lineID'];
        let stationController = new station_controller_1.StationController();
        let stations = yield stationController.getBusLineStationList(lineID);
        res.status(200).json({
            status: 'success',
            data: stations
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            error: err
        });
    }
}));
app.get('/api/stations', function (req, res) {
    res.send('Getting stations' + +'list from Station Time Table Service APIs.');
});
app.get('/api/test', function (req, res) {
    res.send('Welcome to Station Time Table Service APIs.');
});
app.listen(3000, function () {
    console.log('Station Time Table Service Web app service listening on port 3000!');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFxQztBQUNyQyx5RUFBbUU7QUFDbkUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0RBQWtELEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFDLEVBQUU7SUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFHO1FBQ0QsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxzQ0FBaUIsRUFBRSxDQUFBO1FBQy9DLElBQUksU0FBUyxHQUFHLE1BQU0saUJBQWlCLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzdFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQTtLQUNIO0lBQUEsT0FBTSxHQUFHLEVBQUM7UUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixNQUFNLEVBQUUsT0FBTztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFBO0tBQ0g7QUFDRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUosR0FBRyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxDQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUMsRUFBRTtJQUN0RCxtQkFBbUI7SUFDbkIsSUFBRztRQUNELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHNDQUFpQixFQUFFLENBQUE7UUFDL0MsSUFBSSxRQUFRLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixNQUFNLEVBQUUsU0FBUztZQUNqQixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUMsQ0FBQTtLQUNIO0lBQUEsT0FBTSxHQUFHLEVBQUM7UUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixNQUFNLEVBQUUsT0FBTztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFBO0tBQ0g7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRztJQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFJLENBQUUsNENBQTRDLENBQUMsQ0FBQTtBQUNoRixDQUFDLENBQUMsQ0FBQTtBQUVKLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7SUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ3pELENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxDQUFDLENBQUE7QUFDbkYsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1N0YXRpb25Db250cm9sbGVyfSBmcm9tICcuL2FwcC9zdGF0aW9uL3N0YXRpb24tY29udHJvbGxlcic7XG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAuZ2V0KCcvYXBpL2xpbmVzLzpsaW5lSUQvc3RhdGlvbnMvOnN0YXRpb25JRC90aW1lVGFibGUnLCBhc3luYyAocmVxLCByZXMpPT4ge1xuICBjb25zb2xlLmxvZyhyZXEpO1xuICB0cnl7XG4gICAgbGV0IGxpbmVJRCA9IHJlcS5wYXJhbXNbJ2xpbmVJRCddO1xuICAgIGxldCBzdGF0aW9uSUQgPSByZXEucGFyYW1zWydzdGF0aW9uSUQnXTtcbiAgICBsZXQgc3RhdGlvbkNvbnRyb2xsZXIgPSBuZXcgU3RhdGlvbkNvbnRyb2xsZXIoKVxuICAgIGxldCB0aW1lVGFibGUgPSBhd2FpdCBzdGF0aW9uQ29udHJvbGxlci5nZXRTdGF0aW9uVGltZVRhYmxlKGxpbmVJRCxzdGF0aW9uSUQpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBkYXRhOiB0aW1lVGFibGVcbiAgICB9KVxuICB9Y2F0Y2goZXJyKXtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBlcnJvcjogZXJyXG4gICAgfSlcbiAgfVxuICB9KVxuXG5hcHAuZ2V0KCcvYXBpL2xpbmVzLzpsaW5lSUQvc3RhdGlvbnMnLCBhc3luYyhyZXEsIHJlcyk9PiB7XG4gIC8vY29uc29sZS5sb2cocmVxKTtcbiAgdHJ5e1xuICAgIGxldCBsaW5lSUQgPSByZXEucGFyYW1zWydsaW5lSUQnXTtcbiAgICBsZXQgc3RhdGlvbkNvbnRyb2xsZXIgPSBuZXcgU3RhdGlvbkNvbnRyb2xsZXIoKVxuICAgIGxldCBzdGF0aW9ucyA9IGF3YWl0IHN0YXRpb25Db250cm9sbGVyLmdldEJ1c0xpbmVTdGF0aW9uTGlzdChsaW5lSUQpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBkYXRhOiBzdGF0aW9uc1xuICAgIH0pXG4gIH1jYXRjaChlcnIpe1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGVycm9yOiBlcnJcbiAgICB9KVxuICB9XG59KVxuXG5hcHAuZ2V0KCcvYXBpL3N0YXRpb25zJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgcmVzLnNlbmQoJ0dldHRpbmcgc3RhdGlvbnMnICsgICsgJ2xpc3QgZnJvbSBTdGF0aW9uIFRpbWUgVGFibGUgU2VydmljZSBBUElzLicpXG4gIH0pXG5cbmFwcC5nZXQoJy9hcGkvdGVzdCcsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICByZXMuc2VuZCgnV2VsY29tZSB0byBTdGF0aW9uIFRpbWUgVGFibGUgU2VydmljZSBBUElzLicpXG59KVxuXG5hcHAubGlzdGVuKDMwMDAsIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ1N0YXRpb24gVGltZSBUYWJsZSBTZXJ2aWNlIFdlYiBhcHAgc2VydmljZSBsaXN0ZW5pbmcgb24gcG9ydCAzMDAwIScpXG59KSJdfQ==