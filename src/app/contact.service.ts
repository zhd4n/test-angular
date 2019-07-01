import { Injectable } from '@angular/core';
import {ContactItem} from './contact-item';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Array<ContactItem> = [];

  constructor() {
    this.contacts = this.getFromStorage();
  }

  addContact(contact: ContactItem) {
    this.contacts.push(contact);
    this.saveToStorage(this.contacts);
  }

  getContacts() {
    return of(this.contacts);
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
    this.saveToStorage(this.contacts);
  }

  getFromStorage() {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  }

  saveToStorage(contacts: Array<ContactItem>) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
