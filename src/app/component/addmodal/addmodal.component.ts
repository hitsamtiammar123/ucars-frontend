import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
  error_list: any = {};

  constructor(
    public activeModal: NgbActiveModal,
    private util: UtilService,
    private http: HttpClient,
    ) {}

  ngOnInit(): void {
  }

  modelChange(key: string){
    const self = this;
    return function(event: any){
      delete self.error_list[key]
    }
  }

  private validateInput(){
    let counter: number = 0;
    if(!this.brand.name){
      this.error_list.name = 'Name must be filled'
      counter++;
    }
    if(this.brand.status === null){
      this.error_list.status = 'Please select appropiate status';
      counter++;
    }
    if(!this.brand.description){
      this.error_list.description = 'Description must be filled';
      counter++;
    }
    if(!this.brand.image_url){
      this.error_list.image_url = 'Image url must be filled';
      counter++;
    }
    return counter;
  }

  handleError(err: HttpErrorResponse){
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  onCreateBrand(): void{
    if(this.validateInput() > 0){
      return;
    }
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
