import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContact } from '../interfaces/IContact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;
  @Output() onDelete = new EventEmitter<IContact>();
  @Output() onUpdate = new EventEmitter<IContact>();
  isUpdating: boolean = false;
  contactCopy!: IContact;

  constructor() { }

  ngOnInit(): void {
    this.contactCopy = {...this.contact};
  }

  delete(){
    this.onDelete.emit(this.contact);
  }
  update(){
    this.isUpdating = true;
  }
  save(){
    this.isUpdating = false;
    this.onUpdate.emit(this.contactCopy);
  }
  cancel(){
    this.isUpdating = false;
    this.contactCopy = {...this.contact};
  }
}
