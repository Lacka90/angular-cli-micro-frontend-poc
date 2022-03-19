import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MicroWrapperComponent } from './micro-wrapper/micro-wrapper.component';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MicroWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
