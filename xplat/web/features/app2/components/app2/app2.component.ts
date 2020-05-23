import { Component } from '@angular/core';

import { BaseComponent } from '@workspace-affected-test/core';

@Component({
  selector: 'workspace-affected-test-app2',
  templateUrl: 'app2.component.html',
})
export class App2Component extends BaseComponent {
  constructor() {
    super();
  }
}
