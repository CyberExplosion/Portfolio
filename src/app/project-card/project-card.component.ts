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
      state('out', style({
        opacity: 0,
        transform: 'translateY(10rem)'
      })),
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('out <=> in', animate('1s ease-in'))
    ])
  ]
})

export class ProjectCardComponent implements OnInit {
  techLogoPath = TechLogoPath;
  isInViewport = false;

  @Input() imgPath?: String;
  @Input() title?: String;
  @Input() techList?: String[];
  @Input() description?: String;

  @Input() mainBtnInfo?: INavAnchor;
  @Input() sideBtnInfo?: INavAnchor;

  // static true == only get reference once finished rendered
  @ViewChild('fadeInElement', { static: true })
  fadeInElement!: ElementRef;
  
  ngOnInit (): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(
          entry => {
            if (entry.isIntersecting) {
              console.log("This shit intersect");
              this.isInViewport = true;
            } else {
              console.log("Its not anymore");
              this.isInViewport = false;
            }
          }
        )
      },
      options
    );

    observer.observe(this.fadeInElement.nativeElement);
  }
}
