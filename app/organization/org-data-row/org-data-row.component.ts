import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-org-data-row',
  templateUrl: './org-data-row.component.html',
  styleUrls: ['./org-data-row.component.css']
})
export class OrgDataRowComponent implements OnInit {

  @Input('data') data;
  constructor() {
  }

  ngOnInit() {
  }

}
