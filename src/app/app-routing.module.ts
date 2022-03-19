import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroWrapperComponent } from './micro-wrapper/micro-wrapper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'micro', component: MicroWrapperComponent },
  { path: 'lazy-micro', loadChildren: () => import('./lazy-micro-wrapper/lazy-micro-wrapper.module').then(m => m.LazyMicroWrapperModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
