import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './common/header/header.component';
import { UserBookingCancelledComponent } from './user-booking-cancelled/user-booking-cancelled.component';
import { UserNotificationComponent } from './settings/user-notification/user-notification.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserPreferencesComponent } from './settings/user-preferences/user-preferences.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { UserSecurityComponent } from './settings/user-security/user-security.component';
import { UserIntegrationComponent } from './settings/user-integration/user-integration.component';
import { UserBookingCompleteComponent } from './user-booking-complete/user-booking-complete.component';
import { UserBookingInprogressComponent } from './user-booking-inprogress/user-booking-inprogress.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserBookingUpcomingComponent } from './user-booking-upcoming/user-booking-upcoming.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { UserMessagesComponent } from './user-messages/user-messages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule } from 'primeng/dialog';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    UserBookingCancelledComponent,
    UserPaymentComponent,
    UserReviewsComponent,
    UserWalletComponent,
    UserWishlistComponent,
    UserBookingCompleteComponent,
    UserBookingInprogressComponent,
    UserBookingsComponent,
    UserBookingUpcomingComponent,
    UserDashboardComponent,
    UserMessagesComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ListboxModule,
    ReactiveFormsModule,
    DialogModule,
    NgbCarousel,
  ],
})
export class UserModule {}
