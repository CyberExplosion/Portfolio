import { Component } from '@angular/core';
import { SocialInfos, ISocial } from '../my-socials';

@Component({
  selector: 'app-social-sidebar',
  templateUrl: './social-sidebar.component.html',
  styleUrls: ['./social-sidebar.component.css']
})
export class SocialSidebarComponent {
  socialDict: ISocial[] = SocialInfos;
}
