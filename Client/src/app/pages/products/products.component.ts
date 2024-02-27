import { Component, OnInit } from '@angular/core';
import { CAMERAS } from 'src/app/camera-data';
import { Camera } from 'src/app/models/camera';
import { Product } from 'src/app/models/product';
import { Product2 } from 'src/app/models/product2';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  header = "Our Products";
  cameras : Camera[] = CAMERAS;
  products: Product2[] = [];

  filters = [
    "All",
    "Canon",
    "Sony",
    "Panasonic",
    "Nikon",
    "DJI",
    "Blackmagic"
  ];

  constructor(private apiService: ApiService) {}
  
  ngOnInit() {

    this.apiService.getAllProducts().subscribe(
      (data : Product2[]) => {
      console.log('Received data:', data)
      this.products = data;
    },
    (error) => {
      console.error('Error', error)
    }
    );

  }

}
