import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NoPagesLandComponent } from './no-pages-land/no-pages-land.component';
import { CartComponent } from './shop/cart/cart.component';
import { CategoriesComponent } from './shop/categories/categories.component';
import { ProductComponent } from './shop/product/product.component';
import { ProductsComponent } from './shop/products/products.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'shop', component: ShopComponent},
  {path:'products', component: ProductsComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'cart', component: CartComponent},
  {path:'product/:id', component: ProductComponent},
  {path:'contact', component: ContactComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'noPagesLand', component: NoPagesLandComponent},
  {path:'**', redirectTo: 'noPagesLand', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
