import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ModalComponent } from './common/modal/modal.component';


@NgModule({
  declarations: [
    FeatureModuleComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule
  ]
})
export class FeatureModuleModule { }
