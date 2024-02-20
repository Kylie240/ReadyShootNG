import { Component, OnInit } from '@angular/core';
import { CAMERAS } from 'src/app/camera-data';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  cameras = CAMERAS;

  constructor() { }

  ngOnInit(): void {
  }

}
