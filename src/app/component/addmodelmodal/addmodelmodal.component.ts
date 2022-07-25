import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addmodelmodal',
  templateUrl: './addmodelmodal.component.html',
  styleUrls: ['./addmodelmodal.component.scss']
})
export class AddmodelmodalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
