import { Injectable, Injector } from '@angular/core';
import { Http } from "@angular/http";
import { Station } from 'src/app/shared/dataModels';


@Injectable({
    providedIn: 'root',
  })

export class StationService {

    apiUrl = '/api/';

    stations: Array<Station> = [];

    constructor(private http: Http) { 

    }

    public getBusLineStations(lineID: string): Promise<any>{
        return new Promise((resolve, reject)=>{
            this.http.get(this.apiUrl + "lines/" + lineID + "/stations").subscribe((resp) => {
                //console.log(resp);
                if(resp['_body'] ){
                    let result = JSON.parse(resp['_body']);
                    if(result.status === "success"){
                        resolve(result.data);
                    }
                }
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }

}