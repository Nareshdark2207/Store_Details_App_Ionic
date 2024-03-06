import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forgotmodal',
  templateUrl: './forgotmodal.page.html',
  styleUrls: ['./forgotmodal.page.scss'],
})
export class ForgotmodalPage  {
  constructor(private modalCtrl: ModalController) { }

  dismissModal(){
    this.modalCtrl.dismiss()
  }

}
