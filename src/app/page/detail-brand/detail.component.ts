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
  status_list: any = this.util.status_list

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

  onDataChange(e: KeyboardEvent, key: string): void{
    console.log({ e });
    this.saveChange();
    // if(this.product){
    //   this.product.name = e.target.value;
    // }
  }

  onsaveChange(){
    this.saveChange();
  }

  onEditClicked(): void{
    this.isEdit = !this.isEdit
  }

}
