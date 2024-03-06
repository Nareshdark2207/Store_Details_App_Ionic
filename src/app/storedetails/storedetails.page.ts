import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storedetails',
  templateUrl: './storedetails.page.html',
  styleUrls: ['./storedetails.page.scss'],
})
export class StoredetailsPage implements OnInit {
  datas=[
    {
      imageUrl: '../assets/img/img001.jpg',
      storename: 'Nilgiris',
      storecategory:'Departmental Store'
    },
    {
      imageUrl: '../assets/img/img02.jpg',
      storename: 'Bata Showroom',
      storecategory:'Shoes store ',
    },
    // {
    //   imageUrl: '../assets/img/img03.jpg',
    //   storename: 'Coffee House',
    //   storecategory:'Cafe'
    // },
    {
      imageUrl: '../assets/img/img04.jpg',
      storename: 'Medplus',
      storecategory:'Pharmacy'
    },
    {
      imageUrl: '../assets/img/img05.jpg',
      storename: 'Jewellery stores',
      storecategory:'jewelers'
    },
    {
      imageUrl: '../assets/img/img06.jpg',
      storename: 'Furniture stores',
      storecategory:'Home Furniture'
    },
    {
      imageUrl: '../assets/img/img07.jpg',
      storename: 'The Raymonds',
      storecategory:'Garment retailers'
    },
    {
      imageUrl: '../assets/img/img08.jpg',
      storename: 'Yamaha',
      storecategory:'Motorcycle'
    },
  {
      imageUrl: '../assets/img/img05.jpg',
      storename: 'Jewellery stores',
      storecategory:'jewelers'
    },
    {
      imageUrl: '../assets/img/img06.jpg',
      storename: 'Furniture stores',
      storecategory:'Home Furniture'
    },
    {
      imageUrl: '../assets/img/img07.jpg',
      storename: 'The Raymonds',
      storecategory:'Garment retailers'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
