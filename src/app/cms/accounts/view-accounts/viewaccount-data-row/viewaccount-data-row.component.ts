import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-viewaccount-data-row',
  templateUrl: './viewaccount-data-row.component.html',
  styleUrls: ['./viewaccount-data-row.component.css']
})
export class ViewaccountDataRowComponent implements OnInit {

  @Input('data') data;
  constructor() { }

  ngOnInit() {
  }

}
