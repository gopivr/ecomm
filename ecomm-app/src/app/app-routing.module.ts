import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommhomeComponent } from './ecommhome/ecommhome.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductDetailsComponent }  from './product-details/product-details.component';
import { CatogoryComponent } from './catogory/catogory.component';


const routes : Routes  = 
[
    { path : '', redirectTo: '/home', pathMatch: 'full'},
    { path : 'home', component: EcommhomeComponent}, 
    { path : 'dashboard', component: DashboardComponent},
    { path : 'catogory', component: CatogoryComponent},
    { path: 'detail/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
