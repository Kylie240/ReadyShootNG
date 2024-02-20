import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/app/camera';
import { CAMERAS } from 'src/app/camera-data';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  cameras: Camera[] = CAMERAS;
  selectedCamera: Camera = this.cameras[0];

  constructor() { }

  ngOnInit(): void {
  }

}
