import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-data-row',
  templateUrl: './users-data-row.component.html',
  styleUrls: ['./users-data-row.component.css']
})
export class UsersDataRowComponent implements OnInit {

  @Input('data') user;

  constructor() { }

  ngOnInit() {
  }

}
