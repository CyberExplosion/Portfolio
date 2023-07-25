import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProjectInfo, ProjectInfos } from './my-projects';
import { TechLogoPath } from './tech-list';
import { EducationInfos, IEducationInfo } from './my-educations';
import * as Aos from 'aos';
import { ContactInfos, IContactInfo } from './my-contacts';
import { CommonIcons, ICommonIcons } from './my-commonIcons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer){}

  title = 'personal-portfolio';
  projectInfos?: IProjectInfo[];
  eduInfos?: IEducationInfo[];
  contactInfos?: IContactInfo[];
  iconHtml?: ICommonIcons = CommonIcons;
  mouseCoordinate: { X: number, Y: number } = { X: 0, Y: 0 };
  
  techDict = TechLogoPath;
  safeSvgHtml?: { [key: string]: SafeHtml } = {};
  
  transform (svgHtml: string): SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml);
  }

  onMouseMove (event: MouseEvent) {
    this.mouseCoordinate = {
      X: event.clientX,
      Y: event.clientY
    }
    console.log("mouse position x ", this.mouseCoordinate.X);
  }

  ngOnInit(): void {
    Aos.init();
    this.projectInfos = ProjectInfos;
    this.eduInfos = EducationInfos;
    this.contactInfos = ContactInfos;
    
    for (const key in CommonIcons) {
      if (Object.prototype.hasOwnProperty.call(CommonIcons, key)) {
        const element = CommonIcons[key];
        this.safeSvgHtml![key] = this.transform(element);
      }
    }
  }
}
