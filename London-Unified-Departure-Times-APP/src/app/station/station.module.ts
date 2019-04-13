import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StationComponent } from './station.component';
import { StationListComponent } from './station-list.component';
import { StationRoutingModule } from './station-routing.modile';
import { MatToolbarModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule, MatTableModule, MatIconModule, MatPaginatorModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatGridListModule, MatListModule, MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTabsModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StationTimeTableComponent } from './station-time-table.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        MatFormFieldModule,
        StationRoutingModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
    ],
    declarations: [
        StationListComponent,
        StationComponent,
        StationTimeTableComponent
    ],
    exports: [

    ],
    entryComponents: [
        StationTimeTableComponent
    ]

})

export class StationModule { }