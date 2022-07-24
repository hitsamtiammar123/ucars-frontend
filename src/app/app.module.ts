import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListdataComponent } from './layout/listdata/listdata.component';
import { BrandComponent } from './page/brand/brand.component';
import { ModelComponent } from './page/model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListdataComponent,
    BrandComponent,
    ModelComponent
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
