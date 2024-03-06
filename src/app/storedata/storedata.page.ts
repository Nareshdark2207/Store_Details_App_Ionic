import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storedata',
  templateUrl: './storedata.page.html',
  styleUrls: ['./storedata.page.scss'],
})
export class StoredataPage implements OnInit {
  slides = [];
  information = [];
  constructor() { }

  ngOnInit() {
    this.slides = [
      {
        imageUrl: '../assets/img/img001.jpg'
      },
      {
        imageUrl: '../assets/img/img002.jpg'
      },
      {
        imageUrl: '../assets/img/img003.jpg'
      },
      {
        imageUrl: '../assets/img/img004.jpg'
      },
      {
        imageUrl: '../assets/img/img005.jpg'
      }
    ],
    this.information=[
      {
        title: 'Address',
        output: 'New No 215/A, Velachery Main Road, Opposite Yoganarsimhan Temple',
      },
      {
        title: 'Phone number',
        output: '+91 98765 43210',
      },
      {
        title: 'City',
        output: 'Velechery, Chennai',
      },
      {
        title: 'State',
        output: 'Tamilnadu',
      },
      {
        title: 'Zip code',
        output: '600042',
      },
      {
        title: 'Supervisor name',
        output: 'Ravishankar S',
      },
      {
        title: 'Supervisor Phone number',
        output: '+91 97520 86410',
      }
    ]
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 2000
    }
  };
}
