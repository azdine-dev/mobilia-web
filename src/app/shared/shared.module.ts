import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { materialModule } from './material.module';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightboxModule } from 'ngx-lightbox';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import {
  BsDatepickerModule,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { CustomPaginationModule } from './custom-pagination/custom-pagination.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UploaderComponent } from './uploader/uploader/uploader.component';
import { DropzoneDirective } from './dropzone/dropzone.directive';
import { UploadTaskComponent } from './uploader/upload-task/upload-task.component';
@NgModule({
  declarations: [UploaderComponent, UploadTaskComponent],
  imports: [
    CommonModule,
    materialModule,
    CountUpModule,
    CarouselModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    LightboxModule,
    TimepickerModule,
    MatSliderModule,
    HttpClientModule,
    MatSortModule,
    BsDatepickerModule.forRoot(),
    CustomPaginationModule,
    MatTooltipModule,
    DropzoneDirective,
  ],
  exports: [
    CommonModule,
    materialModule,
    CountUpModule,
    CarouselModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    SlickCarouselModule,
    LightboxModule,
    TimepickerModule,
    MatSliderModule,
    HttpClientModule,
    MatSortModule,
    CustomPaginationModule,
    MatTooltipModule,
    DropzoneDirective,
    UploadTaskComponent,
    UploaderComponent,
  ],
  providers: [DatePipe, BsDatepickerConfig],
})
export class SharedModule {}
