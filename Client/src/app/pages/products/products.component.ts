import { Component, OnInit } from '@angular/core';
import { CAMERAS } from 'src/app/camera-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  header: string = "Our Cameras";

  cameras = CAMERAS;

  filters = [
    "All",
    "Canon",
    "Sony",
    "Panasonic",
    "Nikon",
    "DJI",
    "Blackmagic",
  ]

}
