import { Component } from '@angular/core';
import { IContact } from './interfaces/IContact';
import { DataService } from './data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';
  isLoggedIn: boolean = false;
  username: string = "";
  contactList: IContact[] = [
    {
      name: "Chup",
      address: "Same as me",
      phone: "idk",
      email: "chupthao@gmail.com",
      birthday: new Date(),
      meetingDate: new Date(),
      relation: "brother",
      company: "UMN",
      notes: "Random notes go here",
      user:"pengmong",
      id: uuidv4()
    }
  ];
  userList: IContact[] = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.updateContactList(this.contactList);
  }

  getData(){
    return this.data;
  }
  debug(){
    console.log(this.contactList);
    console.log(this.userList);
  }
}
