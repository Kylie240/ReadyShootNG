import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "Product";
  constructor() { }

  public getAllCameras() : Product[] {
    const products : Product []= [{
      id: 1,
      name: 'A7II',
      brand: "Sony",
      files: "6720 x 4480, JPEG/Raw (CR2)",
      weight: 2.3,
      features: ["WiFi/Bluetooth","Built-In GPS","Image Stabilization","4.2x Optical Zoom/4x Digital Zoom"],
      price: 32,
      image: "LG3b758489-a1d9-4196-a161-b7dc026be0ff.jpg"
    },
    {
      id: 1,
      name: 'A7II',
      brand: "Sony",
      files: "6720 x 4480, JPEG/Raw (CR2)",
      weight: 2.3,
      features: ["WiFi/Bluetooth"],
      price: 32,
      image: "LGfc72c1c8-1693-4831-94c5-592355721c75.jpg"
    },{
      id: 1,
      name: 'A7II',
      brand: "Sony",
      files: "6720 x 4480, JPEG/Raw (CR2)",
      weight: 2.3,
      features: ["WiFi/Bluetooth","4.2x Optical Zoom/4x Digital Zoom"],
      price: 32,
      image: "LGb9fab6f6-c015-494f-a4ad-1ac71fe9ac97.jpg"
    },{
      id: 1,
      name: 'A7II',
      brand: "Sony",
      files: "6720 x 4480, JPEG/Raw (CR2)",
      weight: 2.3,
      features: [],
      price: 32,
      image: "LG0a5d6022-224a-4196-967d-f8cf3603230b.jpg"
    }]
      return products;
  }
}
