import { Component, OnInit } from '@angular/core';
import {ContactItem} from '../contact-item';
import {ContactService} from '../contact.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Observable<ContactItem[]>;


  constructor(private cs: ContactService) {
    this.contacts = this.cs.getContacts();
  }

  onDelete(index: number) {
    this.cs.deleteContact(index);
  }

  ngOnInit() {

  }

}
