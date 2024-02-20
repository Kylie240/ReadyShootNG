import { Component, OnInit } from '@angular/core';
import { FAQS } from 'src/app/faq-data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  faqs = FAQS;

  constructor() { }

  ngOnInit(): void {
  }

}
