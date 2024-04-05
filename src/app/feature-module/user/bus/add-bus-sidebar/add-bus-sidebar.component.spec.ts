import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusSidebarComponent } from './add-bus-sidebar.component';

describe('AddBusSidebarComponent', () => {
  let component: AddBusSidebarComponent;
  let fixture: ComponentFixture<AddBusSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBusSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBusSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
