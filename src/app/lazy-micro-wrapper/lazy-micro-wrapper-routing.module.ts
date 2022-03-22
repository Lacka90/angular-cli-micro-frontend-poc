import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyMicroWrapperComponent } from './lazy-micro-wrapper.component';

const routes: Routes = [{
  path: '', component: LazyMicroWrapperComponent, children: [
 {
  path: 'a', loadChildren: () => import('./a/a.module').then(m => m.AModule),
}, {
  path: 'b',  loadChildren: () => import('./b/b.module').then(m => m.BModule),
}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMicroWrapperRoutingModule { }
