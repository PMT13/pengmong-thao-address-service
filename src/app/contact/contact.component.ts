import { Component, Input, OnInit } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { DataService} from "../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;
  isUpdating: boolean = false;
  contactCopy!: IContact;
  userList: IContact[] = this.data.getUserList();

  constructor(private data: DataService) {
    this.data.getUserListService().subscribe((userList) => {
      this.userList = userList;
    });
  }

  ngOnInit(): void {
    this.contactCopy = {...this.contact};
  }

  delete(){
    this.data.updateContactList(this.data.getContactList().filter(contact => contact.id !== this.contact.id));
    this.data.updateUserList(this.userList.filter(contact => contact.id !== this.contact.id));
  }
  update(){
    this.isUpdating = true;
  }
  save(){
    this.isUpdating = false;
    const contactIndex = this.data.getContactList().findIndex(contact => contact.id === this.contact.id);
    if (contactIndex > -1) {
      this.data.getContactList()[contactIndex] = this.contactCopy;
    }
    const contactIndexUser = this.userList.findIndex(contact => contact.id === this.contact.id);
    if (contactIndexUser > -1) {
      this.userList[contactIndexUser] = this.contactCopy;
      this.data.updateUserList(this.userList);
    }
  }
  cancel(){
    this.isUpdating = false;
    this.contactCopy = {...this.contact};
  }
}
