import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BusComponent } from './bus.component';
import { BusRoutingModule } from './bus-routing.module';
import { AddBusSidebarComponent } from './add-bus-sidebar/add-bus-sidebar.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AddBusComponent } from './add-bus/add-bus.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { BusListComponent } from './bus-list/bus-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BusListingDetailsComponent } from './bus-listing-details/bus-listing-details.component';

@NgModule({
  declarations: [
    BusComponent,
    AddBusSidebarComponent,
    AddBusComponent,
    BusListComponent,
    BusListingDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BusRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgbCarousel,
    SlickCarouselModule,
  ],
})
export class BusModule {}
