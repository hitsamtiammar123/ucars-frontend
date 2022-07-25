import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  readonly BASE_URL = 'http://127.0.0.1:8000'

  status_list: Array<Object> =  [
    {'label':'Select Status', 'val': null },
    {'label':'Active', 'val': true ,},
    {'label':'Inactive', 'val': false}
  ]

  subject = new Subject<any>();

  subject$ = this.subject.asObservable()

  nextObject(d: any){
    this.subject.next(d);
  }

  constructor() { }
}
