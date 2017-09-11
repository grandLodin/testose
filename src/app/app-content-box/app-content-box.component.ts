import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content-box',
  templateUrl: './app-content-box.component.html',
  styleUrls: ['./app-content-box.component.css']
})
export class AppContentBoxComponent implements OnInit {
  name = 'Alrik';
  MU  = 12;
  Testat = {};
  Status = 'Bin sehr müde';


  constructor() {    setTimeout(() => {
    this.Testat = true;
    }, 2000);


  }

  ngOnInit() {
  }

  onStatus() {
    this.Status = 'Mein Name ist ' + this.name;
  }
  onUpdate(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

}

