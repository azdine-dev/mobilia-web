import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent {
  public routes = routes;
  isClassAdded: boolean[] = [true, true, false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
