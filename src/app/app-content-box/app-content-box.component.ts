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
  myArray = [];
  time = new Date;
  logitem = this.myArray.length;
  style = false;


  constructor() {

  }

  ngOnInit() {
  }

  onStatus() {
    this.myArray.push(this.myArray.length + 1);
    this.Testat = !this.Testat;
    }


}

