import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ForgotmodalPage } from '../forgotmodal/forgotmodal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ForgotmodalPage,
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 1,
      cssClass: 'modalComponent'
    });
    return await modal.present();
  }
}
