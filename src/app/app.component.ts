import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Stores', url: '/home/Stores', icon: 'storefront' },
    { title: 'Notification', url: '/home/Notification', icon: 'notifications' },
    { title: 'Help', url: '/home/Help', icon: 'information-circle' },
    { title: 'Privacy Policy', url: '/home/PrivacyPolicy', icon: 'lock-open' },
    { title: 'Settings', url: '/home/Settings', icon: 'settings' },
    { title: 'Your Account', url: '/home/YourAccount', icon: 'person-circle' },
  ];
  constructor() {}
}
