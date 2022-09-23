import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContact } from '../interfaces/IContact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() list!: IContact[];
  @Output() onDelete = new EventEmitter<IContact>();
  @Output() onUpdate = new EventEmitter<IContact>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(contact:IContact){
    this.onDelete.emit(contact);
  }

  update(contact:IContact){
    this.onUpdate.emit(contact);
  }
}
