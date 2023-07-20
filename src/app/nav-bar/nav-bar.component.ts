import { Component, OnInit } from '@angular/core';
import { INavAnchor, NAVANCHORS } from '../nav-configs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonIcons } from '../my-commonIcons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) { }

  navAnchors?: INavAnchor[] = NAVANCHORS;
  safeHtmlIcons?: { [key: string]: SafeHtml } = {};

  transform (svgHtml: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml);
  }

  ngOnInit (): void {
    for (const key in CommonIcons) {
      if (Object.prototype.hasOwnProperty.call(CommonIcons, key)) {
        const element = CommonIcons[key];
        this.safeHtmlIcons![key] = this.transform(element);
      }
    }
  }
}