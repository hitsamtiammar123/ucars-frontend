import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPage, ModelPage, DetailPage, DetailModelPage } from './page';

const routes: Routes = [
  { path: 'brand', component: BrandPage },
  { path: '', redirectTo: '/brand', pathMatch: 'full' },
  { path: 'model', component: ModelPage },
  { path: 'brand/detail', component: DetailPage },
  { path: 'model/detail', component: DetailModelPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
