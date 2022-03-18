import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOtherMicroComponent } from './ng-other-micro/ng-other-micro.component';

@NgModule({
  declarations: [
    AppComponent,
    NgOtherMicroComponent,
  ],
  entryComponents: [NgOtherMicroComponent],
  imports: [
    BrowserModule,
  ],
  bootstrap: environment.production ? [] : [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const element = createCustomElement(NgOtherMicroComponent, {injector: injector});
    if (!customElements.get('ng-other-micro-component')) {
      customElements.define('ng-other-micro-component', element);
    }
  }

  ngDoBootstrap() {}
}
