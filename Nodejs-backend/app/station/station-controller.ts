import { LondonTransportAPI } from '../shared/LondonTransportAPI'


export class StationController {

    private londonTransportAPI: LondonTransportAPI;

    constructor(){
        this.londonTransportAPI = new LondonTransportAPI();
    }

    public async getBusLineStationList(lineID: string){
        try{
            let stations = await this.londonTransportAPI.getBusLineStations(lineID);
            return stations;
        }catch(err){
            throw new Error(err);
        }
    }
    
    public async getStationTimeTable(lineID: string, stationID: string){
        try{
            let timeTable = await this.londonTransportAPI.getStationTimeTable(lineID,stationID);
            return timeTable;
        }catch(err){
            throw new Error(err);
        }
    }

}