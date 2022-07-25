import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, finalize } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Brand, ResponseBrandeDetail, BrandInput } from '../../types';
import { UtilService } from '../../service/util.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  isEdit: boolean = false;
  loading: boolean = false
  product: Brand | null = null;
  product_name: string = '';
  product_obj: BrandInput = new BrandInput();
  status_list: any = this.util.status_list;
  error_list: any = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private util:UtilService) { }

  handleError(err: HttpErrorResponse){
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  private saveChange() : void{
    const params: ParamMap = this.route.snapshot.paramMap;
    const url: string = `${this.util.BASE_URL}/brand/`+params.get('id')
    this.loading = true;
    this.http
      .put(url, this.product)
      .pipe(
        catchError(this.handleError),
        finalize(() => setTimeout(() => this.loading = false, 700))
      ).subscribe((data) => {
        this.router.navigate(['/brand']);
      });
  }


  ngOnInit(): void {
    const params: ParamMap = this.route.snapshot.paramMap;
    const url: string = `${this.util.BASE_URL}/brand/`+params.get('id')
    this.loading = true;
    this.http
      .get<ResponseBrandeDetail>(url)
      .pipe(
        catchError(this.handleError),
        finalize(() => setTimeout(() => this.loading = false, 700))
      ).subscribe((data: ResponseBrandeDetail) => {
        this.product = data.brand;
        this.product_name = this.product.name;
        this.product_obj.name = this.product.name;
        this.product_obj.description = this.product.description;
        this.product_obj.status = this.product.status;
      });
  }

  modelChange(key: string){
    const self = this;
    return function(event: any){
      delete self.error_list[key]
    }
  }

  private validateInput(){
    let counter: number = 0;
    if(!this.product?.name){
      this.error_list.name = 'Name cannot be empty';
      counter++;
    }
    if(!this.product?.description){
      this.error_list.description = 'Description cannot be empty';
      counter++;
    }
    if(this.product?.status === null){
      this.error_list.status = 'Please select your status';
      counter++;
    }
    if(!this.product?.image_url){
      this.error_list.image_url = 'Image url cannot be empty';
      counter++;
    }
    return counter;
  }

  onsaveChange(){
    if(this.validateInput() > 0){
      return;
    }
    this.saveChange();
  }

  onEditClicked(): void{
    this.isEdit = !this.isEdit
  }

}
