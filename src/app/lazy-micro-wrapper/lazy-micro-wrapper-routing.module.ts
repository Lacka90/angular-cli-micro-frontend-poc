import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyMicroWrapperComponent } from './lazy-micro-wrapper.component';

const routes: Routes = [{
  path: '', component: LazyMicroWrapperComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMicroWrapperRoutingModule { }
