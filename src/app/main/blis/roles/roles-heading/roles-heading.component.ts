import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-roles-heading',
  templateUrl: './roles-heading.component.html',
  styleUrls: ['./roles-heading.component.css']
})
export class RolesHeadingComponent implements OnInit {

  @Output('fieldSelected') selectedField = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  clickedField(field){
    this.selectedField.emit(field);
    console.log(field);
  }

}
