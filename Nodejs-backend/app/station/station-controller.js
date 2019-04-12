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
        });
    }
}
exports.StationController = StationController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlvbi1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdGlvbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxRUFBaUU7QUFHakUsTUFBYSxpQkFBaUI7SUFJMUI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFWSxxQkFBcUIsQ0FBQyxNQUFjOztZQUM3QyxJQUFHO2dCQUNDLElBQUksUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RSxPQUFPLFFBQVEsQ0FBQzthQUNuQjtZQUFBLE9BQU0sR0FBRyxFQUFDO2dCQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDeEI7UUFDTCxDQUFDO0tBQUE7SUFFWSxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsU0FBaUI7O1FBRWxFLENBQUM7S0FBQTtDQUVKO0FBckJELDhDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvbmRvblRyYW5zcG9ydEFQSSB9IGZyb20gJy4uL3NoYXJlZC9Mb25kb25UcmFuc3BvcnRBUEknXG5cblxuZXhwb3J0IGNsYXNzIFN0YXRpb25Db250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgbG9uZG9uVHJhbnNwb3J0QVBJOiBMb25kb25UcmFuc3BvcnRBUEk7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmxvbmRvblRyYW5zcG9ydEFQSSA9IG5ldyBMb25kb25UcmFuc3BvcnRBUEkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0QnVzTGluZVN0YXRpb25MaXN0KGxpbmVJRDogc3RyaW5nKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgbGV0IHN0YXRpb25zID0gYXdhaXQgdGhpcy5sb25kb25UcmFuc3BvcnRBUEkuZ2V0QnVzTGluZVN0YXRpb25zKGxpbmVJRCk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGlvbnM7XG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIGdldFN0YXRpb25UaW1lVGFibGUobGluZUlEOiBzdHJpbmcsIHN0YXRpb25JRDogc3RyaW5nKXtcblxuICAgIH1cblxufSJdfQ==