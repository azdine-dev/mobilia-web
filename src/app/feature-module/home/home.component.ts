import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  carTypes,
  popularCars1,
  popularCars2,
  popularCars3,
  popularCars4,
  popularCars5,
  popularCars6,
  recommendedCar,
  testimonial,
} from 'src/app/shared/services/model/model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public routes = routes;
  public popularCars1: popularCars1[] = [];
  public popularCars2: popularCars2[] = [];
  public popularCars3: popularCars3[] = [];
  public popularCars4: popularCars4[] = [];
  public popularCars5: popularCars5[] = [];
  public popularCars6: popularCars6[] = [];
  public recommendedCar: recommendedCar[] = [];
  public testimonial: testimonial[] = [];
  public carTypes: carTypes[] = [];
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();


  constructor(private data: DataService, private datePipe: DatePipe) {
    this.popularCars1 = this.data.popularCars1;
    this.popularCars2 = this.data.popularCars2;
    this.popularCars3 = this.data.popularCars3;
    this.popularCars4 = this.data.popularCars4;
    this.popularCars5 = this.data.popularCars5;
    this.popularCars6 = this.data.popularCars6;
    this.recommendedCar = this.data.recommendedCar;
    this.testimonial = this.data.testimonial;
    this.carTypes = this.data.carTypes;
  }

  recommendedCarOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  testimonialOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  carTypesOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 5,
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
