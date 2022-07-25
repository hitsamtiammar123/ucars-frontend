import { Component, OnInit, Input } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.scss']
})
export class ListdataComponent implements OnInit {

  constructor() {}

  @Input()title: string = '';
  @Input()btnText: string = '';
  @Input()inputPlaceholder: string = '';
  @Input()viewDetailLink: () => string = () => '';
  @Input()onAddBrandClicked:() => void = () => {};

  ngOnInit(): void {
  }

  addBrandClicked(): void{
    this.onAddBrandClicked();
  }

}
