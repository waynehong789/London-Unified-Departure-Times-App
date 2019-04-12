import request = require('request-promise');
import { Logger } from './logger';

export interface Station{
    id?: string;
    name?: string;
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
                console.log("Got response from London Transport API: " + result);
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
                    reject("Can not get bus line stations info from API");
                }

            }).catch(err => {
                Logger.log("London Transport API error: ", err);
                reject(err);
            })
        })
    }
}