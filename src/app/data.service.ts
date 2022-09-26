import { Injectable } from '@angular/core';
import {IAccount} from "./interfaces/IAccount";

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
  getAccountList(){
    return this.accountList;
  }
  addAccount(account:IAccount){
    this.accountList.push(account);
  }
}
