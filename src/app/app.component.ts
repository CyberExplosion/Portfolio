import { Component, OnInit } from '@angular/core';
import { IProjectInfo, ProjectInfos, TechLogoPath } from './my-projects';
import * as Aos from 'aos';
import { EducationInfos, IEducationInfo } from './my-educations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';
  projectInfos?: IProjectInfo[];
  eduInfos?: IEducationInfo[];
  techDict = TechLogoPath;

  ngOnInit(): void {
    Aos.init();
    this.projectInfos = ProjectInfos;
    this.eduInfos = EducationInfos;
  }
}
