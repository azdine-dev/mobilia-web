import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-add-bus-sidebar',
  templateUrl: './add-bus-sidebar.component.html',
  styleUrl: './add-bus-sidebar.component.css',
})
export class AddBusSidebarComponent {
  public routes = routes;

  title = 'Add Bus';

  step = 1;

  yearlyToggle = false;

  multiStep = new FormGroup({
    user: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+@\S+\.\S+$/),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[1]{1} [0-9]{3} [0-9]{3} [0-9]{3}'),
      ]),
    }),
    plans: new FormGroup({
      plan: new FormControl('', Validators.required),
    }),
    addons: new FormGroup({
      online: new FormControl(false),
      storage: new FormControl(false),
      profile: new FormControl(false),
    }),
  });

  costMap = {
    arcade: 9,
    advanced: 12,
    pro: 15,
    online: 1,
    storage: 2,
    profile: 2,
  };

  increaseStep() {
    this.step += 1;
  }

  decreaseStep() {
    this.step -= 1;
  }

  term() {
    this.yearlyToggle = !this.yearlyToggle;
  }

  change() {
    this.step = 2;
  }

  submit() {
    if (this.step == 1 && this.multiStep.controls.user.invalid) {
      return;
    }
    if (this.step == 2 && this.multiStep.controls.plans.invalid) {
      return;
    }
    this.increaseStep();
  }
}
