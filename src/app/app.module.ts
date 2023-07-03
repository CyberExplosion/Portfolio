import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavAnchorComponent } from './nav-bar/nav-anchor/nav-anchor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { SideButtonComponent } from './side-button/side-button.component';
import { SideSocialAnchorComponent } from './social-sidebar/side-social-anchor/side-social-anchor.component';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAnchorComponent,
    NavBarComponent,
    MainButtonComponent,
    SideButtonComponent,
    SideSocialAnchorComponent,
    SocialSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
