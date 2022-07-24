import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.scss']
})
export class ListdataComponent implements OnInit {

  constructor() { }

  @Input()title: string = '';
  @Input()btnText: string = '';
  @Input()inputPlaceholder: string = '';

  ngOnInit(): void {
  }

}
