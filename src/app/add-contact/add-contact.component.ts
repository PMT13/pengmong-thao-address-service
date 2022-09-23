import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IContact } from '../interfaces/IContact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  addContact: boolean = false;
  name!: string;
  address!: string;
  phone!: string;
  email!: string;
  birthday!: Date;
  meetingDate!: Date;
  relation!: string;
  company!: string;
  notes!: string;

  @Output() onAdd = new EventEmitter<IContact>();
  constructor() { }

  ngOnInit(): void {
    this.name = "";
    this.address = "";
    this.email = "";
    this.relation = "";
    this.company = "";
    this.notes = "";
    this.phone = "";
  }

  displayAddContact(bool:boolean){
    this.addContact = !bool;
    this.name = "";
    this.address = "";
    this.email = "";
    this.relation = "";
    this.company = "";
    this.notes = "";
    this.phone = "";
  }

  addToList(){
    this.onAdd.emit(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email,
        birthday: this.birthday,
        meetingDate: this.meetingDate,
        relation: this.relation,
        company: this.company,
        notes: this.notes,
        id: new Date().getTime()
      }
    )
    this.name = "";
    this.address = "";
    this.email = "";
    this.relation = "";
    this.company = "";
    this.notes = "";
    this.phone = "";
  }
}
