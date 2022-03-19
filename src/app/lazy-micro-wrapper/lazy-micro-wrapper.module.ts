import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMicroWrapperRoutingModule } from './lazy-micro-wrapper-routing.module';
import { LazyMicroWrapperComponent } from './lazy-micro-wrapper.component';
import { LazyElementsModule } from '@angular-extensions/elements';


@NgModule({
  declarations: [
    LazyMicroWrapperComponent
  ],
  imports: [
    CommonModule,
    LazyElementsModule,
    LazyMicroWrapperRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LazyMicroWrapperModule { }
