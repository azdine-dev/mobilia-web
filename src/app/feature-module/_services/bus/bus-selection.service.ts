import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bus } from './bus.model';

@Injectable({
  providedIn: 'root',
})
export class BusSelectionService {
  private selectedBusSubject: BehaviorSubject<Bus | null> =
    new BehaviorSubject<Bus | null>(null);
  selectedBus$ = this.selectedBusSubject.asObservable();

  constructor() {}

  selectBus(bus: Bus): void {
    this.selectedBusSubject.next(bus);
  }

  clearSelectedBus(): void {
    this.selectedBusSubject.next(null);
  }
}
