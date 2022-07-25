import { Component, OnInit } from '@angular/core';
import {DetailComponent as BaseComponent} from '../detail-brand/detail.component'

@Component({
  selector: 'app-detail-model',
  templateUrl: './detail-model.component.html',
  styleUrls: ['./detail-model.component.scss']
})
export class DetailModelComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}
