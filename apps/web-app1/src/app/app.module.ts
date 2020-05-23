import { NgModule } from '@angular/core';

// libs
import { environment } from '@workspace-affected-test/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';

import { AppComponent } from './app.component';
import { App1Module } from '@workspace-affected-test/web';

@NgModule({
  imports: [CoreModule, SharedModule, App1Module],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
