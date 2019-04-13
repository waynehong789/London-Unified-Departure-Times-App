import { Component, OnInit, Injector } from '@angular/core';
import { StationService } from './service/station.service';
import { BusLine, Station } from '../shared/dataModels';
import { StationSuper } from './station.super';
import { Router } from '@angular/router';

const BusLines: Array<BusLine> = [
  {id: "101", name:"No.101 Bus"},
  {id: "210", name:"No.210 Bus"},
  {id: "469", name:"No.469 Bus"}
]

@Component({
  selector: 'app-station',
  templateUrl: './view/station.component.html',
  styleUrls: ['./css/station.component.css']
})

export class StationComponent extends StationSuper implements OnInit {

  public selectedBusLineID: string = "";
  public busLines: Array<BusLine> = [];
  title = 'London Unified Departure Times APP';


  constructor(stationService: StationService, injector: Injector) { 
    super(stationService, injector)
  }

  ngOnInit() {
    this.busLines = BusLines;
  }

  async getBusLineStations(){
    if(this.selectedBusLineID){
      try{
        this.busLine = BusLines.find(busLine => busLine.id === this.selectedBusLineID);
        this.loading = true;
        let stations: Array<Station> = await this.stationService.getBusLineStations(this.selectedBusLineID);
        //console.log("Got bus line stations: " + stations);
        if(stations && stations.length > 0){
          this.loading = false;
          this.stations = stations;
          this.navigateList();
        }
      }catch(err){
        console.log(err);
      }
    }
  }

}
