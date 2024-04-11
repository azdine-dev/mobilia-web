import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { BusSelectionService } from 'src/app/feature-module/_services/bus/bus-selection.service';
import { Bus } from 'src/app/feature-module/_services/bus/bus.model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-bus-listing-details',
  templateUrl: './bus-listing-details.component.html',
  styleUrl: './bus-listing-details.component.css',
})
export class BusListingDetailsComponent {
  public routes = routes;
  // public listingDetails: listingDetails[] = [];
  // public thumbnails: thumbnails[] = [];
  // public interestedCars: interestedCars[] = [];
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
  selectedBus: Bus | null = null;

  constructor(private router: Router, private datePipe: DatePipe) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedBus = navigation?.extras.state?.['busData'];
  }

  public slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-thumbnails',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.detail-bigimg',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  interestedCarsOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: false,
    loop: true,
    rtl: false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }
}
