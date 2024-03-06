import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorelistPageRoutingModule } from './storelist-routing.module';

import { StorelistPage } from './storelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorelistPageRoutingModule
  ],
  declarations: [StorelistPage]
})
export class StorelistPageModule {}
