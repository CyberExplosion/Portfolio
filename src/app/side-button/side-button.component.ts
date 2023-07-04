import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-button',
  templateUrl: './side-button.component.html',
  styleUrls: ['./side-button.component.css']
})
export class SideButtonComponent {
  @Input() buttonLogoPath?: String;
  @Input() buttonText?: String;
  @Input() buttonLink?: String;

  @Input() smallButton: boolean = false;
}
