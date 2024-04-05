import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserBookingCancelledComponent } from './user-booking-cancelled/user-booking-cancelled.component';
import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';

import { UserNotificationComponent } from './settings/user-notification/user-notification.component';
import { UserPreferencesComponent } from './settings/user-preferences/user-preferences.component';
import { UserBookingCompleteComponent } from './user-booking-complete/user-booking-complete.component';
import { UserBookingInprogressComponent } from './user-booking-inprogress/user-booking-inprogress.component';
import { UserBookingUpcomingComponent } from './user-booking-upcoming/user-booking-upcoming.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserIntegrationComponent } from './settings/user-integration/user-integration.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserSecurityComponent } from './settings/user-security/user-security.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'user-booking-cancelled',
        component: UserBookingCancelledComponent,
      },

      {
        path: 'user-wallet',
        component: UserWalletComponent,
      },
      {
        path: 'user-wishlist',
        component: UserWishlistComponent,
      },
      {
        path: 'user-payment',
        component: UserPaymentComponent,
      },
      {
        path: 'user-review',
        component: UserReviewsComponent,
      },

      {
        path: 'user-booking-complete',
        component: UserBookingCompleteComponent,
      },
      {
        path: 'user-booking-inprogress',
        component: UserBookingInprogressComponent,
      },
      {
        path: 'user-booking-upcoming',
        component: UserBookingUpcomingComponent,
      },
      {
        path: 'user-bookings',
        component: UserBookingsComponent,
      },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent,
      },

      {
        path: 'user-messages',
        component: UserMessagesComponent,
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'bus',
        loadChildren: () => import('./bus/bus.module').then((m) => m.BusModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
