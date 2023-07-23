import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavAnchorComponent } from './nav-bar/nav-anchor/nav-anchor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { SideButtonComponent } from './side-button/side-button.component';
import { SideSocialAnchorComponent } from './social-sidebar/side-social-anchor/side-social-anchor.component';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SkillLogoComponent } from './skill-logo/skill-logo.component';
import { EducationCardComponent } from './education-card/education-card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { ScrollTopBtnComponent } from './scroll-top-btn/scroll-top-btn.component';
import { ProceduralBgComponent } from './procedural-bg/procedural-bg.component';


@NgModule({
  declarations: [
    AppComponent,
    NavAnchorComponent,
    NavBarComponent,
    MainButtonComponent,
    SideButtonComponent,
    SideSocialAnchorComponent,
    SocialSidebarComponent,
    ProjectCardComponent,
    SkillLogoComponent,
    EducationCardComponent,
    ContactCardComponent,
    FooterNavComponent,
    ScrollTopBtnComponent,
    ProceduralBgComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
