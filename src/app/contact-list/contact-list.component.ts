import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private data: DataService) { }
  ngOnInit(): void {
  }
  getData(){
    return this.data;
  }
}
