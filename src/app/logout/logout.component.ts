import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  @Output() onLogout = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    this.onLogout.emit();
  }
}
