import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../model/Category';
import { Product } from '../model/Product';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: Category[] = [];
  categoriesSub: Subscription = new Subscription;
  products: Product[] = [];
  prodSub: Subscription = new Subscription;
  isOpen: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.categoriesSub = this.categoriesService.catSubject.subscribe(
      (data: Category[]) => {
        this.categories = data;
      }
    );
    this.categoriesService.emitCategories();

    this.prodSub = this.productsService.prodSubject.subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );
    this.productsService.emitProducts();
  }

  openCloseNav() {
    this.isOpen = this.isOpen ? false : true;
  }

}
