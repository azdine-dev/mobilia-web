import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusListingDetailsComponent } from './bus-listing-details.component';

describe('BusListingDetailsComponent', () => {
  let component: BusListingDetailsComponent;
  let fixture: ComponentFixture<BusListingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusListingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusListingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
