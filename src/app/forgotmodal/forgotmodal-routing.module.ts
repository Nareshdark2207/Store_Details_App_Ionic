import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotmodalPage } from './forgotmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotmodalPageRoutingModule {}
