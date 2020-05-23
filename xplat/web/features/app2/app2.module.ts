import { NgModule } from '@angular/core';
import { App2Module as SharedApp2Module } from '@workspace-affected-test/features';
import { UIModule } from '../ui/ui.module';
import { App2Component } from './components';

@NgModule({
  imports: [SharedApp2Module, UIModule],
  declarations: [App2Component],
  exports: [App2Component],
})
export class App2Module {}
