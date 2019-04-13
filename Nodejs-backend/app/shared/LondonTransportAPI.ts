import request = require('request-promise');
import { Logger } from './logger';

export interface Station{
    id?: string;
    name?: string;
  }
export interface Schedule{
    date?: string;
    first?: string;
    last?: string;
  }

export class LondonTransportAPI {

    defaultURL: string = "https://api.tfl.gov.uk/";

    appID: string = "64cafb9b";
    key: string = "1824212fb2a19279eb460255ba35966c";

    public getBusLineStations(lineID: string): Promise<any> {

        return new Promise((resolve, reject) => {

            let url = this.defaultURL + "line/" + lineID + "/StopPoints/";

            let opts: request.Options = {
                uri: url,
                method: 'GET',
                qs: {
                    app_id: this.appID,
                    app_key: this.key
                }
            }

            request(opts).then((result) => {
                //console.log("Got response from London Transport API: " + result);
                if (result) {
                    let data = JSON.parse(result);
                    if(data.length > 0){
                        let stationsData : Array<Station> = [];
                        for(let station of data){
                            stationsData.push({
                                id: station.id,
                                name: station.commonName
                            })
                        }
                        resolve(stationsData);
                    }
                }else{
                    Logger.log("Can not get bus line stations info from API");
                    reject("Can not get bus line stations info from API");
                }

            }).catch(err => {
                Logger.log("London Transport API error: ", err);
                reject(err);
            })
        })
    }

    public getStationTimeTable(lineID: string, stationID: string): Promise<any> {

        return new Promise((resolve, reject) => {

            let url = this.defaultURL + "line/" + lineID + "/Timetable/" + stationID;

            let opts: request.Options = {
                uri: url,
                method: 'GET',
                qs: {
                    app_id: this.appID,
                    app_key: this.key
                }
            }

            request(opts).then((result) => {
                //console.log("Got time table response from London Transport API: " + result);
                if (result) {
                    let data = JSON.parse(result);
                    //console.log("Got time table response from London Transport API: ", data);
                    if(data.timetable && data.timetable.routes && data.timetable.routes.length === 1){
                        if(data.timetable.routes[0].schedules && data.timetable.routes[0].schedules.length > 0){
                            let timeTableData : Array<Schedule> = [];
                            for(let schedule of data.timetable.routes[0].schedules){
                                let lastHour = (Number(schedule.lastJourney.hour) % 24) + "";
                                let busSchedule: Schedule = {
                                    date: schedule.name,
                                    first:schedule.firstJourney.hour + ":" + schedule.firstJourney.minute,
                                    last: lastHour + ":" + schedule.lastJourney.minute
                                }
                                timeTableData.push(busSchedule);
                            }//for
                            resolve(timeTableData);
                        }else{
                            Logger.log("Bus line stations time table data error");
                            reject("Bus line stations time table data error");
                        }
                    }else{
                        Logger.log("Bus line stations time table data error");
                        reject("Bus line stations time table data error");
                    }
                }else{
                    Logger.log("Can not get bus line stations time table info from API");
                    reject("Can not get bus line stations time table info from API");
                }
            }).catch(err => {
                Logger.log("London Transport API error: ", err);
                reject(err);
            })
        })
    }
}