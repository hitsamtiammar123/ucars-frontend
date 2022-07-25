import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  // readonly BASE_URL = BASE_URL;
  readonly BASE_URL = environment.baseUrl

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
