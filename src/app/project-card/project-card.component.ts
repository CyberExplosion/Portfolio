import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TechLogoPath } from '../my-projects';
import { INavAnchor } from '../nav-configs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [
    trigger('fadeInFromBottom', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(10rem)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', animate('500ms ease-in'))
    ])
  ]
})

export class ProjectCardComponent implements OnInit {
  techLogoPath = TechLogoPath;

  @Input() imgPath?: String;
  @Input() title?: String;
  @Input() techList?: String[];
  @Input() description?: String;

  @Input() mainBtnInfo?: INavAnchor;
  @Input() sideBtnInfo?: INavAnchor;

  @ViewChild('fadeInElement', { static: true })
  fadeInElement!: ElementRef;

  isInViewport = false;

  ngOnInit(): void {
      
  }
}
