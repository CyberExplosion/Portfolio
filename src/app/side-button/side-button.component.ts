import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-side-button',
  templateUrl: './side-button.component.html',
  styleUrls: ['./side-button.component.css']
})
export class SideButtonComponent {
  constructor(private sanitizer: DomSanitizer) { }
  safeSvgHTML?: SafeHtml;

  @Input() buttonText?: String;
  @Input() buttonLink?: String;

  @Input() smallButton: boolean = false;

  transform (svgHtml: string): SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml);
  }
}
