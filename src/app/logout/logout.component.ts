import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  logout(){
    this.data.setLoginStatus(false);
    this.data.updateUserList([]);
  }
}
