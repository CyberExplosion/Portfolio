import { Component, Input } from '@angular/core';
import { TechLogoPath } from '../my-projects';

@Component({
  selector: 'app-skill-logo',
  templateUrl: './skill-logo.component.html',
  styleUrls: ['./skill-logo.component.css']
})
export class SkillLogoComponent {
  techLogoPath = TechLogoPath;

  @Input() techName!: string;
}
