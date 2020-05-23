import { NgModule } from '@angular/core';
import { App1Module as SharedApp1Module } from '@workspace-affected-test/features';
import { UIModule } from '../ui/ui.module';
import { App1Component } from './components';

@NgModule({
  imports: [SharedApp1Module, UIModule],
  declarations: [App1Component],
  exports: [App1Component],
})
export class App1Module {}
