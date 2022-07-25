import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddmodelmodalComponent } from '../../component/addmodelmodal/addmodelmodal.component';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor(private modalService: NgbModal) {
    this.addBrandClick = this.addBrandClick.bind(this);
  }
  detailLink():string{
    return '/model/detail'
  }

  ngOnInit(): void {
  }

  addBrandClick(): void{
    this.modalService.open(AddmodelmodalComponent, { backdrop: 'static'});
  }

}
