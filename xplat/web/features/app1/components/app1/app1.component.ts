import { Component } from '@angular/core';

import { BaseComponent } from '@workspace-affected-test/core';

@Component({
  selector: 'workspace-affected-test-app1',
  templateUrl: 'app1.component.html',
})
export class App1Component extends BaseComponent {
  constructor() {
    super();
  }
}
