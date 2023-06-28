import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavAnchorComponent } from './nav-anchor/nav-anchor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import MainButtonComponent from './main-button/main-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAnchorComponent,
    NavBarComponent,
    MainButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
