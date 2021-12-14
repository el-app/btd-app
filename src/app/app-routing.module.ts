import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NoPagesLandComponent } from './no-pages-land/no-pages-land.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductComponent } from './shop/product/product.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'shop', component: ShopComponent},
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
