import { Injectable } from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {IContact} from "./interfaces/IContact";
import {Subject} from "rxjs";

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
  $userList: Subject<IContact[]> = new Subject<IContact[]>();
  private user: string = "";
  private isLoggedIn: boolean = false;
  $isLoggedIn: Subject<boolean> = new Subject<boolean>();

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

  getUserListService(){
    return this.$userList;
  }
  getUserList(){
    return this.userList;
  }
  updateUserList(contactList:IContact[]){
    this.userList = contactList;
    this.$userList.next(this.userList);
  }

  getUsername(){
    return this.user;
  }
  setUsername(username:string){
    this.user = username;
  }

  getLoginStatus(){
    return this.$isLoggedIn;
  }
  setLoginStatus(bool:boolean){
    this.isLoggedIn = bool;
    this.$isLoggedIn.next(this.isLoggedIn);     // next notifies all things subscribed to the "this.$loggedIn" to update
  }
}
