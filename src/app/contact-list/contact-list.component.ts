import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService} from "../data.service";
import {IContact} from "../interfaces/IContact";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  userList: IContact[] = this.data.getUserList();
  sub: Subscription;
   constructor(private data: DataService) {
     this.sub = this.data.getUserListService().subscribe((userList) => {
       this.userList = userList;
     });
  }
  ngOnInit(): void {}
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
