import { NgModule } from '@angular/core';
import { UiElementsComponent } from './ui-elements.component';
import { TaxButtonComponent } from './tax-button/tax-button.component';



@NgModule({
  declarations: [
    UiElementsComponent,
    TaxButtonComponent
  ],
  imports: [
  ],
  exports: [
    UiElementsComponent
  ]
})
export class UiElementsModule { }
