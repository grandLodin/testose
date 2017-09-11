import { Component, OnInit } from '@angular/core';
// import { AppContentBoxComponent } from '../app-content-box/app-content-box.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['./app-side-bar.component.css']
})
export class AppSideBarComponent implements OnInit {
  edit_label = 'Bearbeiten';
  edit_mode = false;


  constructor() {
    }

  ngOnInit() {

  }
  onEdit(event) {
      this.edit_mode = !this.edit_mode;
      if (this.edit_mode) {
      this.edit_label = 'Fertig';
    } else {
      this.edit_label = 'Bearbeiten';
    }
  }

}
