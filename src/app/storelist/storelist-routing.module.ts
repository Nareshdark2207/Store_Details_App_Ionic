import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorelistPage } from './storelist.page';

const routes: Routes = [
  {
    path: '',
    component: StorelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorelistPageRoutingModule {}
