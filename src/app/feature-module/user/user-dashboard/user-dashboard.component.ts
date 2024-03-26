import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    { value: 'Last 30 Days' },
    { value: 'Last 7 Days' },
  ];
  selectedList2: data[] = [
    { value: 'Last 30 Days' },
    { value: 'Last 7 Days' },
  ];

}
