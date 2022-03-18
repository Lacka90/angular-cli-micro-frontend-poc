import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NgMicroComponent } from './ng-micro-component/ng-micro.component';

@NgModule({
  declarations: [
    AppComponent,
    NgMicroComponent
  ],
  entryComponents: [NgMicroComponent],
  imports: [
    BrowserModule,
  ],
  bootstrap: environment.production ? [] : [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const element = createCustomElement(NgMicroComponent, {injector: injector});
    if (!customElements.get('ng-micro-component')) {
      customElements.define('ng-micro-component', element);
    }
  }

  ngDoBootstrap() {}
}
