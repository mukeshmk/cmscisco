import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ord-data-row',
  templateUrl: 'ord-data-row.component.html',
  styleUrls: ['ord-data-row.component.css']
})
export class OrdDataRowComponent implements OnInit {

  @Input('data') data;
  constructor() { }

  ngOnInit() {
  }

}
