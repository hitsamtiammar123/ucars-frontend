import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { catchError, throwError, finalize } from 'rxjs';
import { UtilService } from '../../service/util.service';
import { AddmodalComponent } from '../../component/addmodal/addmodal.component';
import { Brand, ResponseBrandIndex} from '../../types';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  loading: boolean = true;
  products: Brand[] = []
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 0;

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private util:UtilService
  ) {
    this.addBrandClick = this.addBrandClick.bind(this);
  }

  formatDate(date_str: string){
    return moment(date_str).format('DD/MM/YYYY')
  }

  handleError(error: HttpErrorResponse){
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getData(page: number = 1, search: string = ''){
    let url: string = `${this.util.BASE_URL}/brand?page=${page}`;
    if(search){
      url += `&search=${search}`;
    }
    this.loading = true;
    return this.http
      .get<ResponseBrandIndex>(url)
      .pipe(
        catchError(this.handleError),
        finalize(() => setTimeout(() => this.loading = false, 700))
      ).subscribe((data: ResponseBrandIndex) => {
        this.products = data.brands;
        this.collectionSize = data.count;
      });
  }

  detailLink(product:Brand):string{
    return '/brand/detail/' + product.id
  }

  paginationChange(page: number){
    this.getData(page);
  }


  ngOnInit(): void {
    const that = this;
    this.getData()
    this.util.subject$.subscribe(d => {
      if(d.type === 'ADD_BRAND_SUCCEED' || d.type === 'DELETE_BRAND_SUCCEED'){
        this.getData();
      }
    })
  }

  addBrandClick(): void{
    this.modalService.open(AddmodalComponent, { backdrop: 'static'});
  }

  onSearchKeyUp(event: any): void{
    const value = event.target.value;
    if(event.code === 'Enter'){
      this.getData(1, value);
    }
  }

  deleteProduct(product: Brand){
    const isConfirm = confirm('Are you sure want to delete this?');
    if(!isConfirm){
      return;
    }
    this.loading = true;
    const url: string = `${this.util.BASE_URL}/brand/${product.id}`
    this.http
      .delete<ResponseBrandIndex>(url)
      .pipe(
        catchError(this.handleError),
        finalize(() => setTimeout(() => this.loading = false, 700))
      ).subscribe(() => {
        this.util.nextObject({ type:'DELETE_BRAND_SUCCEED' })
      });
  }

}
