import { Component, OnInit } from '@angular/core';
import { IProjectInfo, ProjectInfos } from './my-projects';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';
  projectInfos?: IProjectInfo[];

  ngOnInit(): void {
    this.projectInfos = ProjectInfos;
    Aos.init();
  }
}
