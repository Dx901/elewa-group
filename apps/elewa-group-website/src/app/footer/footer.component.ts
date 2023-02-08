import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear()
  companyName = 'Elewa Group';

  constructor() {}

  ngOnInit() {

  }
}
