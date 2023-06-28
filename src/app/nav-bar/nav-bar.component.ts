import { Component, OnInit } from '@angular/core';
import { NavAnchorComponent } from '../nav-anchor/nav-anchor.component';
import { INavAnchor, NAVANCHORS } from '../nav-configs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  navAnchors?: INavAnchor[];

  ngOnInit (): void {
    this.navAnchors = NAVANCHORS;
  }
}