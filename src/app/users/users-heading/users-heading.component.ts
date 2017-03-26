import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-users-heading',
  templateUrl: './users-heading.component.html',
  styleUrls: ['./users-heading.component.css']
})
export class UsersHeadingComponent implements OnInit {

  @Output('fieldSelected') selectedField = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  clickedField(field){
    this.selectedField.emit(field);
    console.log(field);
  }

}
