import { Component, OnInit } from '@angular/core';
import { IProjectInfo, ProjectInfos, TechLogoPath } from './my-projects';
import { EducationInfos, IEducationInfo } from './my-educations';
import * as Aos from 'aos';
import { ContactInfos, IContactInfo } from './my-contacts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';
  projectInfos?: IProjectInfo[];
  eduInfos?: IEducationInfo[];
  contactInfos?: IContactInfo[];
  techDict = TechLogoPath;

  ngOnInit(): void {
    Aos.init();
    this.projectInfos = ProjectInfos;
    this.eduInfos = EducationInfos;
    this.contactInfos = ContactInfos;
  }
}
