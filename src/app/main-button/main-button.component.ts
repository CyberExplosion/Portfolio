import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
  
export class MainButtonComponent {
  @Input() buttonText?: String;
  @Input() buttonLink?: String;
  
  @Input() smallButton: boolean = false;
  @Input() openNewTab: boolean = true;

  // Cannot do this 4ever, a better way is create a service that transform and store all the safeHTML and allow every component to use it
}
