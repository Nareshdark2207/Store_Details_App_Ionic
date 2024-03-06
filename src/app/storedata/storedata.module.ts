import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoredataPageRoutingModule } from './storedata-routing.module';

import { StoredataPage } from './storedata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoredataPageRoutingModule
  ],
  declarations: [StoredataPage]
})
export class StoredataPageModule {}
