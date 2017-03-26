import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-teams-heading',
  templateUrl: './teams-heading.component.html',
  styleUrls: ['./teams-heading.component.css']
})
export class TeamsHeadingComponent implements OnInit {

  @Output('fieldSelected') selectedField = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  clickedField(field){
    this.selectedField.emit(field);
    console.log(field);
  }

}
