import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotmodalPageRoutingModule } from './forgotmodal-routing.module';

import { ForgotmodalPage } from './forgotmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotmodalPageRoutingModule
  ],
  declarations: [ForgotmodalPage]
})
export class ForgotmodalPageModule {}
