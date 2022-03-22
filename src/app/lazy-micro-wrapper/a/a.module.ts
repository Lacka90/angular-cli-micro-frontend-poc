import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { AComponent } from './a.component';
import { LazyElementsModule } from '@angular-extensions/elements';


@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    CommonModule,
    ARoutingModule,
    LazyElementsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AModule { }
