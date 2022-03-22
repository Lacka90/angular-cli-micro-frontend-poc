import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from './b.component';
import { LazyElementsModule } from '@angular-extensions/elements';


@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule,
    BRoutingModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BModule { }
