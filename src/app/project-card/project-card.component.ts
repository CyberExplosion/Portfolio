import { Component, Input } from '@angular/core';
import { TechLogoPath } from '../tech-list';
import { INavAnchor } from '../nav-configs';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})

export class ProjectCardComponent {
  techLogoPath = TechLogoPath;
  isInViewport = false;
  alreadyViewed = false;
  lastScrollPosition = 0;

  @Input() imgPath?: String;
  @Input() title?: String;
  @Input() techList?: String[];
  @Input() description?: String;

  @Input() mainBtnInfo?: INavAnchor;
  @Input() sideBtnInfo?: INavAnchor;

}