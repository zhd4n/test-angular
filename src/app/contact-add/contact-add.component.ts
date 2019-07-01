import {Component, OnInit} from '@angular/core';
import {ContactItem} from '../contact-item';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private cs: ContactService) {
    this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      phone: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.cs.addContact(new ContactItem(this.contactForm.value.name, this.contactForm.value.phone));
      this.contactForm.reset();
    }
  }

  ngOnInit(): void {}

}
