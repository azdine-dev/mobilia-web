import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';

const routes: Routes = [
  {
    path: '',
    component: BusComponent,
    children: [
      {
        path: 'add',
        component: AddBusComponent,
      },
      {
        path: 'list',
        component: BusListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusRoutingModule {}
