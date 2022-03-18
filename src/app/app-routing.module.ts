import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalWithMicroComponent } from './internal-with-micro/internal-with-micro.component';
import { InternalComponent } from './internal/internal.component';

const routes: Routes = [{
  path: 'internal', component: InternalComponent,
}, {
  path: 'internal-with-micro', component: InternalWithMicroComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
