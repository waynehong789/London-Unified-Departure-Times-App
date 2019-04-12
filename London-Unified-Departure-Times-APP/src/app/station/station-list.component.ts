import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { StationService } from './service/station.service';
import { StationSuper } from './station.super';
import { Station } from '../shared/dataModels';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-station-list',
    templateUrl: './view/station-list.component.html',
    styleUrls: ['./css/station-list.component.css']
})

export class StationListComponent extends StationSuper implements OnInit {

    displayedColumns: string[] = ['Bus Station Name', 'Bus Station ID', 'OpenTimeTable'];

    public dataSource = new MatTableDataSource<Station>(this.stations);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(stationService: StationService, injector: Injector) {
        super(stationService, injector)
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }

    openStationTimeTable(){

    }

    selectAnotherBusLine(){
        this.navigateBusLine();
    }


}
