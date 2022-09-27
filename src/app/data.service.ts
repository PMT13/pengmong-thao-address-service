import { Injectable } from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {IContact} from "./interfaces/IContact";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  private accountList: IAccount[] = [
    {username: "pengmong", password: "thao"},
    {username: "new", password: "guy"},
    {username: "username", password: "password"},
    {username: "123", password: "456"},
    {username: "hello", password: "world"}
  ];
  private contactList: IContact[] = [];
  private userList: IContact[] = [];
  private user: string = "";
  private isLoggedIn: boolean = false;

  getAccountList(){
    return this.accountList;
  }
  addAccount(account:IAccount){
    this.accountList.push(account);
  }

  getContactList(){
    return this.contactList;
  }
  updateContactList(contactList:IContact[]){
    this.contactList = contactList;
  }
  addContact(contact: IContact){
    this.contactList.push(contact);
    this.userList.push(contact);
  }

  getUserList(){
    return this.userList;
  }
  updateUserList(contactList:IContact[]){
    this.userList = contactList;
  }

  getUsername(){
    return this.user;
  }
  setUsername(username:string){
    this.user = username;
  }

  checkLoginStatus(){
    return this.isLoggedIn;
  }
  setLoginStatus(bool:boolean){
    this.isLoggedIn = bool;
  }
}
