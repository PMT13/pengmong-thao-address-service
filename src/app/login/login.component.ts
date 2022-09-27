import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  login(){
    this.data.setUsername(this.username);
    const foundAccount = this.data.getAccountList().find((account) => {
      return account.username === this.username &&
        account.password === this.password
    });
    if( foundAccount === undefined){
      alert("Invalid Login");
      return;
    }
    this.data.updateUserList(this.data.getContactList().filter(contact => contact.user === this.username));
    this.data.setLoginStatus(true);
  }
  register(){
    const accountExist = this.data.getAccountList().find((account) => {return account.username === this.username});
    if( accountExist !== undefined){
      alert("Username already exists.");
      return;
    }
    if(this.username === undefined || this.password === undefined){
      alert("Please fill in all input fields");
      return;
    }
    if(this.username.replace(/\s/g, '') === "" || this.password.replace(/\s/g, '') === ""){
      alert("Please fill in all input fields");
      return;
    }
    this.data.addAccount({username:this.username,password:this.password});
    this.data.setLoginStatus(true);
    this.data.setUsername(this.username);
  }
}
