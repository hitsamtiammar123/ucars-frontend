import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddmodalComponent } from '../../component/addmodal/addmodal.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor(private modalService: NgbModal) {
    this.addBrandClick = this.addBrandClick.bind(this);
  }

  detailLink():string{
    return '/brand/detail'
  }

  ngOnInit(): void {
  }

  addBrandClick(): void{
    this.modalService.open(AddmodalComponent, { backdrop: 'static'});
  }

}
