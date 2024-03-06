import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoredataPage } from './storedata.page';

const routes: Routes = [
  {
    path: '',
    component: StoredataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoredataPageRoutingModule {}
