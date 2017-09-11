import { Component, OnInit } from '@angular/core';
import { AppContentBoxComponent } from '../app-content-box/app-content-box.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['./app-side-bar.component.css']
})
export class AppSideBarComponent implements OnInit {
  Tot = false;
  edit_label = 'Bearbeiten';
  edit = false;

  constructor() {
    setTimeout(() => {
      this.Tot = true;
      }, 2000);
    }

  ngOnInit() {

  }
  onEdit(event) {
      this.edit = !this.edit;
      if (this.edit) {
      this.edit_label = 'Fertig';
      console.log(event);
    } else {
      this.edit_label = 'Bearbeiten';
    }
  }

}
