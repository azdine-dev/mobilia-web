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

@NgModule({
  declarations: [BusComponent, AddBusSidebarComponent, AddBusComponent],
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
  ],
})
export class BusModule {}
