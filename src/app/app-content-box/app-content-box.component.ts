import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content-box',
  templateUrl: './app-content-box.component.html',
  styleUrls: ['./app-content-box.component.css']
})
export class AppContentBoxComponent implements OnInit {
  name = 'Alrik';
  MU  = 12;
  Testat = false;
  Status = 'Bin sehr müde';


  constructor() {

  }

  ngOnInit() {
  }

  onStatus() {
    this.Status = 'Mein Name ist ' + this.name;
    this.Testat = true;
  }

  detColor() {
    if (!this.Testat) {
      return 'red';
    } else {
      return 'green';
    }
  }
}

