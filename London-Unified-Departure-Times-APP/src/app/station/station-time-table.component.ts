import { StationSuper } from './station.super';
import { OnInit, Component, Injector, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { StationService } from './service/station.service';
import { Schedule } from '../shared/dataModels';

@Component({
    selector: 'app-station-time-table',
    templateUrl: './view/station-time-table.component.html',
    styleUrls: ['./css/station-time-table.component.css']
})

export class StationTimeTableComponent extends StationSuper implements OnInit{

    @Input() timeTable: Array<Schedule>;

    displayedColumns: Array<string> = ["Date", "First Journey", "Last Journey"];
    
    public dataSource = new MatTableDataSource<Schedule>();
    
    constructor(private dialogRef: MatDialogRef<StationTimeTableComponent>, stationService: StationService, injector: Injector, @Inject(MAT_DIALOG_DATA) data: any) {
        super(stationService, injector)
        if (data && typeof data === "object") {
            this.timeTable = data.timeTable
            this.dataSource = new MatTableDataSource<Schedule>(this.timeTable);
        }
    }

    ngOnInit() {
        
    }
    
}