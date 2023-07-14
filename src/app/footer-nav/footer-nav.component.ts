import { Component } from '@angular/core';
import { ContactInfos, IContactInfo } from '../my-contacts';
@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent {
  contactList: IContactInfo[] = ContactInfos;
}
