import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPage, ModelPage } from './page';

const routes: Routes = [
  { path: 'brand', component: BrandPage },
  { path: 'model', component: ModelPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
