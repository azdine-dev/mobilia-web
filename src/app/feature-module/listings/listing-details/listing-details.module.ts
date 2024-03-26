import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingDetailsRoutingModule } from './listing-details-routing.module';
import { ListingDetailsComponent } from './listing-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListingDetailsComponent
  ],
  imports: [
    CommonModule,
    ListingDetailsRoutingModule,
    SharedModule
  ]
})
export class ListingDetailsModule { }
