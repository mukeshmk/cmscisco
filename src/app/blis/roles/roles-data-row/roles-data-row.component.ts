import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-roles-data-row',
  templateUrl: './roles-data-row.component.html',
  styleUrls: ['./roles-data-row.component.css']
})
export class RolesDataRowComponent implements OnInit {

  @Input('data') role;

  constructor() { }

  ngOnInit() {
  }

}
