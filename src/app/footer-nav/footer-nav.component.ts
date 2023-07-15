import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FooterInfo, IFooterInfo } from '../my-footer';
@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})

export class FooterNavComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) { }
  safeSVGList: SafeHtml[] = []
  footerInfos: IFooterInfo[] = FooterInfo;

  transform (html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit (): void {
    this.footerInfos.forEach(element => {
      this.safeSVGList.push(this.transform(element.iconSVG));
    });
  }
}
