import { Component,OnInit } from '@angular/core';
import { DataService} from "../data.service";
import { v4 as uuidv4 } from 'uuid';

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

  constructor(private data: DataService) { }

  ngOnInit(): void {
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
    const newContact =
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
        user: this.data.getUsername(),
        id: uuidv4()
      }
    this.data.addContact(newContact);
    this.name = "";
    this.address = "";
    this.email = "";
    this.relation = "";
    this.company = "";
    this.notes = "";
    this.phone = "";
    console.log(this.data.getContactList());
    console.log(this.data.getUserList());
  }
}
