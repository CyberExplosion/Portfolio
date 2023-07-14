import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FooterInfo, IFooterInfo } from '../my-footer';
@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent {
  constructor(private sanitizer: DomSanitizer) { }
  
  sanitizeSVG (svgHtml: string): SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml);
  }
  footerInfos: IFooterInfo[] = FooterInfo;
}
