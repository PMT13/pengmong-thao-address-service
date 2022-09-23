import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IAccount} from "../interfaces/IAccount";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  @Output() onLogin = new EventEmitter<IAccount>();
  @Output() onRegister = new EventEmitter<IAccount>();

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.onLogin.emit({username:this.username,password:this.password});
  }
  register(){
    this.onRegister.emit({username:this.username,password:this.password});
  }
}
