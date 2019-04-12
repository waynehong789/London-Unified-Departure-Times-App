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
app.get('/api/stations/timeTable', function (req, res) {
    console.log(req);
    //let stationID = 
    res.send('Getting station time' + +'table from Station Time Table Service APIs.');
});
app.get('/api/stations', function (req, res) {
    res.send('Getting stations' + +'list from Station Time Table Service APIs.');
});
app.get('/api/test', function (req, res) {
    res.send('Welcome to Station Time Table Service APIs.');
});
app.listen(3000, function () {
    console.log('Station Time Table Service Web app service listening on port 3000!');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFxQztBQUNyQyx5RUFBbUU7QUFDbkUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsQ0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFDLEVBQUU7SUFDdEQsbUJBQW1CO0lBQ25CLElBQUc7UUFDRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxzQ0FBaUIsRUFBRSxDQUFBO1FBQy9DLElBQUksUUFBUSxHQUFHLE1BQU0saUJBQWlCLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsTUFBTSxFQUFFLFNBQVM7WUFDakIsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDLENBQUE7S0FDSDtJQUFBLE9BQU0sR0FBRyxFQUFDO1FBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsTUFBTSxFQUFFLE9BQU87WUFDZixLQUFLLEVBQUUsR0FBRztTQUNYLENBQUMsQ0FBQTtLQUNIO0FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLGtCQUFrQjtJQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFJLENBQUUsNkNBQTZDLENBQUMsQ0FBQTtBQUNyRixDQUFDLENBQUMsQ0FBQTtBQUVKLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7SUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBSSxDQUFFLDRDQUE0QyxDQUFDLENBQUE7QUFDaEYsQ0FBQyxDQUFDLENBQUE7QUFFSixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHO0lBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFBO0FBQ25GLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtTdGF0aW9uQ29udHJvbGxlcn0gZnJvbSAnLi9hcHAvc3RhdGlvbi9zdGF0aW9uLWNvbnRyb2xsZXInO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLmdldCgnL2FwaS9saW5lcy86bGluZUlEL3N0YXRpb25zJywgYXN5bmMocmVxLCByZXMpPT4ge1xuICAvL2NvbnNvbGUubG9nKHJlcSk7XG4gIHRyeXtcbiAgICBsZXQgbGluZUlEID0gcmVxLnBhcmFtc1snbGluZUlEJ107XG4gICAgbGV0IHN0YXRpb25Db250cm9sbGVyID0gbmV3IFN0YXRpb25Db250cm9sbGVyKClcbiAgICBsZXQgc3RhdGlvbnMgPSBhd2FpdCBzdGF0aW9uQ29udHJvbGxlci5nZXRCdXNMaW5lU3RhdGlvbkxpc3QobGluZUlEKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgZGF0YTogc3RhdGlvbnNcbiAgICB9KVxuICB9Y2F0Y2goZXJyKXtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBlcnJvcjogZXJyXG4gICAgfSlcbiAgfVxufSlcblxuYXBwLmdldCgnL2FwaS9zdGF0aW9ucy90aW1lVGFibGUnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICBjb25zb2xlLmxvZyhyZXEpO1xuICAgIC8vbGV0IHN0YXRpb25JRCA9IFxuICAgIHJlcy5zZW5kKCdHZXR0aW5nIHN0YXRpb24gdGltZScgKyAgKyAndGFibGUgZnJvbSBTdGF0aW9uIFRpbWUgVGFibGUgU2VydmljZSBBUElzLicpXG4gIH0pXG5cbmFwcC5nZXQoJy9hcGkvc3RhdGlvbnMnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICByZXMuc2VuZCgnR2V0dGluZyBzdGF0aW9ucycgKyAgKyAnbGlzdCBmcm9tIFN0YXRpb24gVGltZSBUYWJsZSBTZXJ2aWNlIEFQSXMuJylcbiAgfSlcblxuYXBwLmdldCgnL2FwaS90ZXN0JywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIHJlcy5zZW5kKCdXZWxjb21lIHRvIFN0YXRpb24gVGltZSBUYWJsZSBTZXJ2aWNlIEFQSXMuJylcbn0pXG5cbmFwcC5saXN0ZW4oMzAwMCwgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnU3RhdGlvbiBUaW1lIFRhYmxlIFNlcnZpY2UgV2ViIGFwcCBzZXJ2aWNlIGxpc3RlbmluZyBvbiBwb3J0IDMwMDAhJylcbn0pIl19