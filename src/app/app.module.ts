import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavAnchorComponent } from './nav-anchor/nav-anchor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAnchorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
