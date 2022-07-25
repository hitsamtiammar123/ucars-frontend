import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BrandInput } from '../../types';
import { UtilService } from '../../service/util.service';
import { catchError, finalize, throwError } from 'rxjs';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss']
})
export class AddmodalComponent implements OnInit {

  @Input() name: string = '';
  brand: BrandInput = new BrandInput();
  loading: boolean = false;
  status_list: any = this.util.status_list;

  constructor(
    public activeModal: NgbActiveModal,
    private util: UtilService,
    private http: HttpClient,
    ) {}

  ngOnInit(): void {
  }

  handleError(err: HttpErrorResponse){
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  onCreateBrand(): void{
    this.loading = true;
    const url: string = `${this.util.BASE_URL}/brand`;
    this.http
      .post(url, this.brand)
      .pipe(
        catchError(this.handleError),
        finalize(() => setTimeout(() => this.loading = false, 700))
      ).subscribe((data) => {
        this.util.nextObject({ type:'ADD_BRAND_SUCCEED' })
        this.activeModal.close('Close click')
      });
  }

}
