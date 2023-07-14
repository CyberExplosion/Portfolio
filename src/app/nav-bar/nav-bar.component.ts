import { Component } from '@angular/core';
import { INavAnchor, NAVANCHORS } from '../nav-configs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  navAnchors?: INavAnchor[] = NAVANCHORS;
}