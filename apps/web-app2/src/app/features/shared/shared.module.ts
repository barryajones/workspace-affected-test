import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@workspace-affected-test/web';

@NgModule({
  imports: [UIModule],
  exports: [UIModule],
})
export class SharedModule {}
