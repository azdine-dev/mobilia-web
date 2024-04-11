import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { routes } from 'src/app/shared/routes/routes';
import { BusSelectionService } from '../../_services/bus/bus-selection.service';
import { Bus } from '../../_services/bus/bus.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  public routes = routes;
  private busSelectionSubscription: Subscription;
  selectedBus: Bus | null = null;

  constructor(private busSelectionService: BusSelectionService) {
    this.busSelectionSubscription =
      this.busSelectionService.selectedBus$.subscribe((bus) => {
        this.selectedBus = bus;
        // Logic to handle the selected bus
      });
  }

  onBusDetailsClose() {
    this.selectedBus = null;
    this.busSelectionService.clearSelectedBus();
  }
}
