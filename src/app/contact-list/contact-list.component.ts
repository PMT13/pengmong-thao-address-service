import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  userList: IContact[] = this.data.getUserList();
   constructor(private data: DataService) {
     this.data.getUserListService().subscribe((userList) => {
       this.userList = userList;
     });
  }
  ngOnInit(): void {}
}
