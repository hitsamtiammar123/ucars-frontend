import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.scss']
})
export class BreadcumbComponent implements OnInit {

  @Input()status: boolean = true;

  isEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
