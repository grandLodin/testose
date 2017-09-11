import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { AppContentBoxComponent } from './app-content-box/app-content-box.component';
import { AppSideBarComponent } from './app-side-bar/app-side-bar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeldenbogenComponent } from './app-heldenbogen/app-heldenbogen.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    AppContentBoxComponent,
    AppSideBarComponent,
    AppFooterComponent,
    AppHeldenbogenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
