import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  products: Product[] = [];
  prodSubscription: Subscription = new Subscription;
  urlImgRoot: string = "";

  constructor(private prodService: ProductsService) { 
      this.urlImgRoot = prodService.urlImgRoot;
  }

  ngOnInit(): void {
    this.prodSubscription = this.prodService.prodSubject.subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );
    this.prodService.emitProducts();
  }

  ngOnDestroy() {
    this.prodSubscription.unsubscribe();
  }

}
