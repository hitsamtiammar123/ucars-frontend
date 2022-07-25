import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input()loading: boolean = false;
  @Output()onSearchKeyUp = new EventEmitter<any>();

  ngOnInit(): void {
  }

  addBrandClicked(): void{
    this.onAddBrandClicked();
  }

  onKeyUp(e: any):void{
    this.onSearchKeyUp.emit(e);
  }

}
