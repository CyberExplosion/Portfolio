import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent {
  @Input() buttonLogoPath?: String;
  @Input() buttonText?: String;
  @Input() buttonLink?: String;
  
  @Input() smallButton: boolean = false;
  @Input() openNewTab: boolean = true;
}
