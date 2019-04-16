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
    //console.log(req);
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
app.listen(3000, function () {
    console.log('Station Time Table Service Web app service listening on port 3000!');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFxQztBQUNyQyx5RUFBcUU7QUFDckUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0RBQWtELEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0UsbUJBQW1CO0lBQ25CLElBQUk7UUFDRixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHNDQUFpQixFQUFFLENBQUE7UUFDL0MsSUFBSSxTQUFTLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDOUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsTUFBTSxFQUFFLFNBQVM7WUFDakIsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQyxDQUFBO0tBQ0g7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUE7S0FDSDtBQUNILENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hELG1CQUFtQjtJQUNuQixJQUFJO1FBQ0YsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLGlCQUFpQixHQUFHLElBQUksc0NBQWlCLEVBQUUsQ0FBQTtRQUMvQyxJQUFJLFFBQVEsR0FBRyxNQUFNLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQyxDQUFBO0tBQ0g7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUE7S0FDSDtBQUNILENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQTtBQUNuRixDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFN0YXRpb25Db250cm9sbGVyIH0gZnJvbSAnLi9hcHAvc3RhdGlvbi9zdGF0aW9uLWNvbnRyb2xsZXInO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLmdldCgnL2FwaS9saW5lcy86bGluZUlEL3N0YXRpb25zLzpzdGF0aW9uSUQvdGltZVRhYmxlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vY29uc29sZS5sb2cocmVxKTtcbiAgdHJ5IHtcbiAgICBsZXQgbGluZUlEID0gcmVxLnBhcmFtc1snbGluZUlEJ107XG4gICAgbGV0IHN0YXRpb25JRCA9IHJlcS5wYXJhbXNbJ3N0YXRpb25JRCddO1xuICAgIGxldCBzdGF0aW9uQ29udHJvbGxlciA9IG5ldyBTdGF0aW9uQ29udHJvbGxlcigpXG4gICAgbGV0IHRpbWVUYWJsZSA9IGF3YWl0IHN0YXRpb25Db250cm9sbGVyLmdldFN0YXRpb25UaW1lVGFibGUobGluZUlELCBzdGF0aW9uSUQpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBkYXRhOiB0aW1lVGFibGVcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBlcnJvcjogZXJyXG4gICAgfSlcbiAgfVxufSlcblxuYXBwLmdldCgnL2FwaS9saW5lcy86bGluZUlEL3N0YXRpb25zJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vY29uc29sZS5sb2cocmVxKTtcbiAgdHJ5IHtcbiAgICBsZXQgbGluZUlEID0gcmVxLnBhcmFtc1snbGluZUlEJ107XG4gICAgbGV0IHN0YXRpb25Db250cm9sbGVyID0gbmV3IFN0YXRpb25Db250cm9sbGVyKClcbiAgICBsZXQgc3RhdGlvbnMgPSBhd2FpdCBzdGF0aW9uQ29udHJvbGxlci5nZXRCdXNMaW5lU3RhdGlvbkxpc3QobGluZUlEKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgZGF0YTogc3RhdGlvbnNcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBlcnJvcjogZXJyXG4gICAgfSlcbiAgfVxufSlcblxuYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdTdGF0aW9uIFRpbWUgVGFibGUgU2VydmljZSBXZWIgYXBwIHNlcnZpY2UgbGlzdGVuaW5nIG9uIHBvcnQgMzAwMCEnKVxufSkiXX0=