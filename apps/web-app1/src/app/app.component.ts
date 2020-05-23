import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@workspace-affected-test/web';

@Component({
  selector: 'workspace-affected-test-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
