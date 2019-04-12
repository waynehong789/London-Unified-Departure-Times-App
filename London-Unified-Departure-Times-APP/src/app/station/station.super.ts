import { Component, OnInit, Injector } from '@angular/core';
import { StationService } from './service/station.service';
import { Station } from '../shared/dataModels';
import { Router, ActivatedRoute } from '@angular/router';

export class StationSuper {

    get stations(): Array<Station> {
        return this.stationService.stations;
    }

    set stations(value: Array<Station>) {
        this.stationService.stations = value;
    }

    public router: Router 
    protected route: ActivatedRoute

    constructor( public stationService: StationService, protected injector: Injector) {
        this.route = injector.get(ActivatedRoute);
        this.router = injector.get(Router);
     }

    navigateList() {
        this.router.navigateByUrl("/stations");
    }

    navigateBusLine() {
        this.router.navigateByUrl("");
    }
}