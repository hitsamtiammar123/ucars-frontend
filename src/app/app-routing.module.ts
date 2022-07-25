import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPage, ModelPage, DetailPage, DetailModelPage } from './page';

const routes: Routes = [
  { path: 'brand', component: BrandPage },
  { path: '', redirectTo: '/brand', pathMatch: 'full' },
  { path: 'model', component: ModelPage },
  { path: 'brand/detail/:id', component: DetailPage },
  { path: 'model/detail/:id', component: DetailModelPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
