import { Component, OnInit } from '@angular/core';
import { CAMERAS } from 'src/app/camera-data';
import { Product } from 'src/app/models/product';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  header = "Our Products";
  cameras = CAMERAS;
  products: Product[] = [];

  filters = [
    "All",
    "Canon",
    "Sony",
    "Panasonic",
    "Nikon",
    "DJI",
    "Blackmagic",
  ]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllCameras();
    console.log(this.products);
  }


}
