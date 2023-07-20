import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-anchor',
  templateUrl: './nav-anchor.component.html',
  styleUrls: ['./nav-anchor.component.css']
})
export class NavAnchorComponent {
  @Input() iconText?: String;
  @Input() iconLink?: String;
}
