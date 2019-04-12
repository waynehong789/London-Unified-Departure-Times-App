import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationComponent } from './station.component';
import { StationListComponent } from './station-list.component';
 
const stationRoutes: Routes = [
    { path: '', component: StationComponent },
    { path: 'stations', component: StationListComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(stationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StationRoutingModule { }