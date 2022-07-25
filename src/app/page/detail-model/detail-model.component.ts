import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {DetailComponent as BaseComponent} from '../detail-brand/detail.component'

@Component({
  selector: 'app-detail-model',
  templateUrl: './detail-model.component.html',
  styleUrls: ['./detail-model.component.scss']
})
export class DetailModelComponent extends BaseComponent implements OnInit {


  override ngOnInit(): void {
  }

}
