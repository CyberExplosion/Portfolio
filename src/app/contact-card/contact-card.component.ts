import { Component, Input } from '@angular/core';
import { IContactInfo } from '../my-contacts';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
  @Input() contactInfo?: IContactInfo;
}
