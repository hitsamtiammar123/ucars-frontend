import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmodelmodalComponent } from './addmodelmodal.component';

describe('AddmodelmodalComponent', () => {
  let component: AddmodelmodalComponent;
  let fixture: ComponentFixture<AddmodelmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmodelmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmodelmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
