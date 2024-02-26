import { Component, OnInit } from '@angular/core';
import { CAMERAS } from 'src/app/camera-data';
import { Camera } from 'src/app/models/camera';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  header = "Our Products";
  cameras : Camera[] = CAMERAS;
  // products: Product[] = [];

  filters = [
    "All",
    "Canon",
    "Sony",
    "Panasonic",
    "Nikon",
    "DJI",
    "Blackmagic",
  ]

  constructor() {}
  
  ngOnInit() {

    // this.productService.getAllProducts().subscribe(
    //   (data : any) => {
    //   console.log('Received data:', data)
    //   this.cameras = data;
    // },
    // (error : any) => {
    //   console.error('Error', error)
    // }
    // );
  }

}
