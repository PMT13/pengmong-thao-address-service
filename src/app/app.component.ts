import { Component } from '@angular/core';
import { IAccount } from './interfaces/IAccount';
import { IContact } from './interfaces/IContact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';
  isLoggedIn: boolean = true;
  accountList: IAccount[] = [{username: "pengmong", password: "thao"}];
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
      id: 0
    }
  ]
  login(info:IAccount){
    const foundAccount = this.accountList.find((account) => {
      return account.username === info.username &&
        account.password === info.password
    });
    if( foundAccount === undefined){
      alert("Invalid Login");
      return;
    }
    this.isLoggedIn = true;
  }
  register(info:IAccount){
    this.accountList.push(info);
    this.isLoggedIn = true;
    console.log(this.accountList);
  }
  logout(){
    this.isLoggedIn = false;
  }
  addContact(contact:IContact){
    this.contactList.push(contact);
  }
  delete(contactToDelete:IContact){
    this.contactList = this.contactList.filter(contact => contact.id !== contactToDelete.id);
  }
  debug(){
    console.log(this.contactList);
  }
  update(contactToUpdate:IContact){
    const contactIndex = this.contactList.findIndex(contact => contact.id === contactToUpdate.id);
    if (contactIndex > -1) {
      this.contactList[contactIndex] = contactToUpdate;
    }
  }
}
