import { Component } from '@angular/core';
import { IAccount } from './interfaces/IAccount';
import { IContact } from './interfaces/IContact';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';
  isLoggedIn: boolean = false;
  username: string = "";
  accountList: IAccount[] = [];
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
      id: 0
    }
  ];
  userList: IContact[] = [];
  constructor(private accountData: DataService) { }
  ngOnInit(): void {
    this.accountList =  this.accountData.getAccountList();
  }

  login(info:IAccount){
    this.username = info.username;
    const foundAccount = this.accountList.find((account) => {
      return account.username === info.username &&
        account.password === info.password
    });
    if( foundAccount === undefined){
      alert("Invalid Login");
      return;
    }
    this.userList = this.contactList.filter(contact => contact.user === this.username);
    this.isLoggedIn = true;
  }
  register(info:IAccount){
    const accountExist = this.accountList.find((account) => {return account.username === info.username});
    if( accountExist !== undefined){
      alert("Username already exists.");
      return;
    }
    if(info.username === undefined || info.password === undefined){
      alert("Please fill in all input fields");
      return;
    }
    if(info.username.replace(/\s/g, '') === "" || info.password.replace(/\s/g, '') === ""){
        alert("Please fill in all input fields");
        return;
    }
    this.accountData.addAccount(info);
    this.accountList = this.accountData.getAccountList();
    this.isLoggedIn = true;
    this.username = info.username;
    console.log(this.accountList);
    console.log(this.accountData.getAccountList());
  }
  logout(){
    this.isLoggedIn = false;
    this.userList = [];
  }
  addContact(contact:IContact){
    this.contactList.push(contact);
    this.userList.push(contact);
  }
  delete(contactToDelete:IContact){
    this.contactList = this.contactList.filter(contact => contact.id !== contactToDelete.id);
    this.userList = this.userList.filter(contact => contact.id !== contactToDelete.id);
  }
  debug(){
    console.log(this.contactList);
    console.log(this.userList);
  }
  update(contactToUpdate:IContact){
    const contactIndex = this.contactList.findIndex(contact => contact.id === contactToUpdate.id);
    if (contactIndex > -1) {
      this.contactList[contactIndex] = contactToUpdate;
    }
    const contactIndexUser = this.userList.findIndex(contact => contact.id === contactToUpdate.id);
    if (contactIndexUser > -1) {
      this.userList[contactIndexUser] = contactToUpdate;
    }
  }
}
