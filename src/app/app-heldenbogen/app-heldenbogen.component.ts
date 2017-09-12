import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heldenbogen',
  templateUrl: './app-heldenbogen.component.html',
  styleUrls: ['./app-heldenbogen.component.css']
})
export class AppHeldenbogenComponent implements OnInit {
  name = 'Alrik vom Fettwasserbachlauf';
  MU = 8;
  KL = 9;
  IN = 10;
  CH = 11;
  FF = 12;
  GE = 13;
  KO = 14;
  KK = 15;
  edit_mode = false;
  edit_label = 'edit';
  Helden = [];



  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit_mode = !this.edit_mode;
    if (this.edit_mode) {
      this.edit_label = 'Fertig';
    } else {
      this.edit_label = 'Edit';
    }
  }

  onSubmit() {
    console.log('es klappt');
  }


}

