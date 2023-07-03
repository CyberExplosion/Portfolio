import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-social-anchor',
  templateUrl: './side-social-anchor.component.html',
  styleUrls: ['./side-social-anchor.component.css']
})
export class SideSocialAnchorComponent {
  @Input() text?: String;
  @Input() logoPath?: String;
  @Input() link?: String;
}
