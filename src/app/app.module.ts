import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListdataComponent } from './layout/listdata/listdata.component';
import { BrandComponent } from './page/brand/brand.component';
import { ModelComponent } from './page/model/model.component';
import { DetailComponent } from './page/detail-brand/detail.component';
import { BreadcumbComponent } from './component/breadcumb/breadcumb.component';
import { DetailModelComponent } from './page/detail-model/detail-model.component';
import { AddmodalComponent } from './component/addmodal/addmodal.component';
import { AddmodelmodalComponent } from './component/addmodelmodal/addmodelmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListdataComponent,
    BrandComponent,
    ModelComponent,
    DetailComponent,
    BreadcumbComponent,
    DetailModelComponent,
    AddmodalComponent,
    AddmodelmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
