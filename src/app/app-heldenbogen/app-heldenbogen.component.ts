import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heldenbogen',
  templateUrl: './app-heldenbogen.component.html',
  styleUrls: ['./app-heldenbogen.component.css']
})
export class AppHeldenbogenComponent implements OnInit {
  name = 'Alrik vom Fettwasserbach';
  MU = 8;
  KL = 9;
  IN = 10;
  CH = 11;
  FF = 12;
  GE = 13;
  KO = 14;
  KK = 15;


  constructor() { }


  ngOnInit() {
  }


  onSubmit() {
    console.log('es klappt');
  }

}

