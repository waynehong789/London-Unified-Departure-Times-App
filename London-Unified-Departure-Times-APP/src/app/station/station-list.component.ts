import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { StationService } from './service/station.service';
import { StationSuper } from './station.super';
import { Station } from '../shared/dataModels';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { StationTimeTableComponent } from './station-time-table.component';

@Component({
    selector: 'app-station-list',
    templateUrl: './view/station-list.component.html',
    styleUrls: ['./css/station-list.component.css']
})

export class StationListComponent extends StationSuper implements OnInit {

    displayedColumns: string[] = ['Bus Station Name', 'Bus Station ID', 'OpenTimeTable'];

    public dataSource = new MatTableDataSource<Station>(this.stations);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(stationService: StationService, injector: Injector, public dialog: MatDialog) {
        super(stationService, injector)
    }

    ngOnInit() {
        //this.dataSource.paginator = this.paginator;
        setTimeout(() => this.dataSource.paginator = this.paginator);
    }

    async openStationTimeTable(selectedStation: any) {
        try {
            if (selectedStation) {
                this.loading = true;
                let timeTable = await this.stationService.getStationTimeTable(this.busLine.id, selectedStation.id);
                if (timeTable) {
                    this.loading = false;
                    const dialogRef = this.dialog.open(
                        StationTimeTableComponent,
                        {
                            data: {
                                timeTable: timeTable
                            },
                            width: '50%',
                            height: '50%'
                        }
                    );

                    dialogRef.afterClosed().subscribe(result => {
                        console.log(`Dialog closed`);
                    });
                }
            }
        } catch (err) {
            console.log(err);
        }

    }

    selectAnotherBusLine() {
        this.navigateBusLine();
    }


}
