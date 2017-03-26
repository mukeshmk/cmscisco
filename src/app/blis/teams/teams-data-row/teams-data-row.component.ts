import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-teams-data-row',
  templateUrl: './teams-data-row.component.html',
  styleUrls: ['./teams-data-row.component.css']
})
export class TeamsDataRowComponent implements OnInit {

  @Input('data') team;

  constructor() { }

  ngOnInit() {
  }

}
