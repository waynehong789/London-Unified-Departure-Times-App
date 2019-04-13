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
const LondonTransportAPI_1 = require("../shared/LondonTransportAPI");
class StationController {
    constructor() {
        this.londonTransportAPI = new LondonTransportAPI_1.LondonTransportAPI();
    }
    getBusLineStationList(lineID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let stations = yield this.londonTransportAPI.getBusLineStations(lineID);
                return stations;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    getStationTimeTable(lineID, stationID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let timeTable = yield this.londonTransportAPI.getStationTimeTable(lineID, stationID);
                return timeTable;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.StationController = StationController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlvbi1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdGlvbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBaUU7QUFHakUsTUFBYSxpQkFBaUI7SUFJMUI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFWSxxQkFBcUIsQ0FBQyxNQUFjOztZQUM3QyxJQUFHO2dCQUNDLElBQUksUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RSxPQUFPLFFBQVEsQ0FBQzthQUNuQjtZQUFBLE9BQU0sR0FBRyxFQUFDO2dCQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDeEI7UUFDTCxDQUFDO0tBQUE7SUFFWSxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsU0FBaUI7O1lBQzlELElBQUc7Z0JBQ0MsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRixPQUFPLFNBQVMsQ0FBQzthQUNwQjtZQUFBLE9BQU0sR0FBRyxFQUFDO2dCQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDeEI7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQTFCRCw4Q0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb25kb25UcmFuc3BvcnRBUEkgfSBmcm9tICcuLi9zaGFyZWQvTG9uZG9uVHJhbnNwb3J0QVBJJ1xuXG5cbmV4cG9ydCBjbGFzcyBTdGF0aW9uQ29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIGxvbmRvblRyYW5zcG9ydEFQSTogTG9uZG9uVHJhbnNwb3J0QVBJO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sb25kb25UcmFuc3BvcnRBUEkgPSBuZXcgTG9uZG9uVHJhbnNwb3J0QVBJKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldEJ1c0xpbmVTdGF0aW9uTGlzdChsaW5lSUQ6IHN0cmluZyl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCBzdGF0aW9ucyA9IGF3YWl0IHRoaXMubG9uZG9uVHJhbnNwb3J0QVBJLmdldEJ1c0xpbmVTdGF0aW9ucyhsaW5lSUQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRpb25zO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBhc3luYyBnZXRTdGF0aW9uVGltZVRhYmxlKGxpbmVJRDogc3RyaW5nLCBzdGF0aW9uSUQ6IHN0cmluZyl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCB0aW1lVGFibGUgPSBhd2FpdCB0aGlzLmxvbmRvblRyYW5zcG9ydEFQSS5nZXRTdGF0aW9uVGltZVRhYmxlKGxpbmVJRCxzdGF0aW9uSUQpO1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVUYWJsZTtcbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==