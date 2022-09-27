import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private data: DataService) { }
  list: IContact[] = this.getData().getUserList();
  ngOnInit(): void {
  }
  getData(){
    return this.data;
  }
}
