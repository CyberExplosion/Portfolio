import { Component } from '@angular/core';
import { ContactInfos, IContactInfo } from '../my-contacts';

@Component({
  selector: 'app-social-sidebar',
  templateUrl: './social-sidebar.component.html',
  styleUrls: ['./social-sidebar.component.css']
})
export class SocialSidebarComponent {
  socialDict: IContactInfo[] = ContactInfos
}
