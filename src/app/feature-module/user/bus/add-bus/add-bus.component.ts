import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, map, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { UploaderComponent } from 'src/app/shared/uploader/uploader/uploader.component';
import { BusService } from 'src/app/feature-module/_services/bus/bus.service';
import { Bus } from 'src/app/feature-module/_services/bus/bus.model';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrl: './add-bus.component.css',
})
export class AddBusComponent {
  @ViewChild(UploaderComponent) uploader!: UploaderComponent;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  amenities: string[] = [];
  availableAmenities: string[] = [
    'Wifi',
    'TV',
    'AC',
    'Recliner Seats',
    'USB Charging Ports',
  ];
  filteredAmenities!: Observable<string[]>;
  amenitiesCtrl = new FormControl(); // Form control for amenities input

  busFormStep1: FormGroup;
  busFormStep2: FormGroup;
  busFormStep3: FormGroup;
  isLinear: boolean = true;
  // Loading status for form submission
  isSubmitting: boolean = false;
  submitMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private busService: BusService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.busFormStep1 = this.fb.group({
      name: [''],
      busNumber: ['', Validators.required],
      model: ['', Validators.required],
      latitude: [''],
      longitude: [''],
    });

    this.busFormStep2 = this.fb.group({
      amenities: [''],
      images: [''],
    });

    this.busFormStep3 = this.fb.group({
      capacity: ['', Validators.required],
      description: [''],
    });

    this.filteredAmenities = this.amenitiesCtrl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterAmenities(value))
    );
  }

  addAmenity(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (
      value &&
      this.availableAmenities.includes(value) &&
      !this.amenities.includes(value)
    ) {
      this.amenities.push(value);
    }

    // Clear the input value
    // event.chipInput!.clear();
  }
  addSelectedAmenity(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue.trim();

    if (value && !this.amenities.includes(value)) {
      this.amenities.push(value);
    }
    this.updateAmenitiesFormControl();
  }

  removeAmenity(amenity: string): void {
    const index = this.amenities.indexOf(amenity);

    if (index >= 0) {
      this.amenities.splice(index, 1);
    }
    this.updateAmenitiesFormControl();
  }

  private updateAmenitiesFormControl(): void {
    this.busFormStep2.get('amenities')?.setValue(this.amenities.join(','));
  }

  private _filterAmenities(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredAmenities = this.availableAmenities.filter((amenity) =>
      amenity.toLowerCase().includes(filterValue)
    );

    // Exclude already selected amenities
    return filteredAmenities.filter(
      (amenity) => !this.amenities.includes(amenity)
    );
  }

  async submit(): Promise<void> {
    if (
      this.busFormStep1.valid &&
      this.busFormStep2.valid &&
      this.busFormStep3.valid
    ) {
      this.isSubmitting = true;
      try {
        const uploadedUrls = await this.uploadFiles();
        console.log('Uploaded URLs:', uploadedUrls);
        const newBus: Bus = {
          name: this.busFormStep1.get('name')?.value,
          busNumber: this.busFormStep1.get('busNumber')?.value,
          model: this.busFormStep1.get('model')?.value,
          latitude: this.busFormStep1.get('latitude')?.value,
          longitude: this.busFormStep1.get('longitude')?.value,
          amenities: this.busFormStep2.get('amenities')?.value,
          imageUrls: uploadedUrls,
          capacity: this.busFormStep3.get('capacity')?.value,
          description: this.busFormStep3.get('description')?.value,
        };

        this.busService.createBus(newBus).subscribe({
          next: (res) => {
            this.isSubmitting = false;
            const submitMessage = 'Bus added successfully';
            // Reset the form after successful submission
            this.resetForm();

            // Show success message
            this.showSuccessMessage(submitMessage);
            this.router.navigate([routes.userBusList]);
          },
          error: (err) => {
            const submitMessage = err;

            this.showSuccessMessage(submitMessage);
            this.isSubmitting = false;
            this.submitMessage = err;
          },
        });

        // Now you can use the uploaded URLs in your backend call or any other action
        // For example, you can save them to the backend
        // Call your backend service with the uploadedUrls
      } catch (error) {
        console.error('Error submitting form:', error);
        this.isSubmitting = false;
        this.showSuccessMessage(error as string);
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.showSuccessMessage('Form is invalid');
      console.log('Form is invalid. Cannot submit.');
    }
  }
  showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'end', // Position the snackbar horizontally
      verticalPosition: 'top', // Position the snackbar vertically
    });
  }

  async uploadFiles(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      this.uploader.startUpload();

      this.uploader.urlsReady.subscribe(
        (urls: string[]) => {
          resolve(urls);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  resetForm(): void {
    this.busFormStep1.reset();
    this.busFormStep2.reset();
    this.busFormStep3.reset();
    this.amenities = [];
  }
}
