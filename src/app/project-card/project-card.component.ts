import { Component, Input } from '@angular/core';
import { IProjectInfo } from '../my-projects';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() imgPath?: String;
  @Input() title?: String;
  @Input() techList?: String[];
  @Input() description?: String;
}
