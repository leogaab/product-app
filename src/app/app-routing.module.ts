import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from './components/product-list/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/product-list', pathMatch: 'full'},
  { path: 'product-list', component: ProductListComponent },
  { path: 'edit/:id', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
