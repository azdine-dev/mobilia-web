export class routes {
  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get home(): string {
    return this.baseUrl + '/home';
  }
  public static get listingList(): string {
    return this.baseUrl + '/listings/listing-list';
  }
  public static get listingDetails(): string {
    return this.baseUrl + '/listings/listing-details';
  }
  public static get listingGrid(): string {
    return this.baseUrl + '/listings/listing-grid';
  }
  public static get aboutUs(): string {
    return this.baseUrl + '/pages/about-us';
  }
  public static get register(): string {
    return this.baseUrl + '/authentication/register';
  }
  public static get login(): string {
    return this.baseUrl + '/authentication/login';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/authentication/forgot-password';
  }
  public static get resetPassword(): string {
    return this.baseUrl + '/authentication/reset-password';
  }
  public static get bookingPayment(): string {
    return this.baseUrl + '/booking/booking-payment';
  }
  public static get bookingList(): string {
    return this.baseUrl + '/booking/booking-list';
  }
  public static get invoiceDetails(): string {
    return this.baseUrl + '/booking/invoice-details';
  }
  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error/error500';
  }
  public static get pricing(): string {
    return this.baseUrl + '/pages/pricing';
  }
  public static get faq(): string {
    return this.baseUrl + '/pages/faq';
  }
  public static get gallery(): string {
    return this.baseUrl + '/pages/gallery';
  }
  public static get ourTeam(): string {
    return this.baseUrl + '/pages/our-team';
  }
  public static get testimonial(): string {
    return this.baseUrl + '/pages/testimonial';
  }
  public static get termsCondition(): string {
    return this.baseUrl + '/pages/terms-condition';
  }
  public static get privacyPolicy(): string {
    return this.baseUrl + '/pages/privacy-policy';
  }
  public static get maintenance(): string {
    return this.baseUrl + '/pages/maintenance';
  }
  public static get blogList(): string {
    return this.baseUrl + '/blog/blog-list';
  }
  public static get blogGrid(): string {
    return this.baseUrl + '/blog/blog-grid';
  }
  public static get blogDetails(): string {
    return this.baseUrl + '/blog/blog-details';
  }
  public static get contactUs(): string {
    return this.baseUrl + '/pages/contact-us';
  }
  public static get comingSoon(): string {
    return this.baseUrl + '/pages/coming-soon';
  }
  public static get user(): string {
    return this.baseUrl + '/user';
  }
  public static get userPayment(): string {
    return this.user + '/user-payment';
  }
  public static get userWallet(): string {
    return this.user + '/user-wallet';
  }
  public static get userReview(): string {
    return this.user + '/user-review';
  }
  public static get userWishlist(): string {
    return this.user + '/user-wishlist';
  }
  public static get userSettings(): string {
    return this.user + '/settings/user-settings';
  }
  public static get userPreference(): string {
    return this.user + '/user-preferences';
  }

  public static get userBookingCancelled(): string {
    return this.user + '/user-booking-cancelled';
  }
  public static get userBookingComplete(): string {
    return this.user + '/user-booking-complete';
  }
  public static get userBookingInprogress(): string {
    return this.user + '/user-booking-inprogress';
  }
  public static get userBookingUpcoming(): string {
    return this.user + '/user-booking-upcoming';
  }
  public static get userBookings(): string {
    return this.user + '/user-bookings';
  }
  public static get userDashboard(): string {
    return this.user + '/user-dashboard';
  }
  public static get userIntegration(): string {
    return this.user + '/settings/user-integration';
  }
  public static get userMessages(): string {
    return this.user + '/user-messages';
  }
  public static get userReviews(): string {
    return this.user + '/user-reviews';
  }
  public static get userNotification(): string {
    return this.user + '/settings/user-notification';
  }
  public static get userPreferences(): string {
    return this.user + '/settings/user-preferences';
  }
  public static get userSecurity(): string {
    return this.user + '/settings/user-security';
  }
}
