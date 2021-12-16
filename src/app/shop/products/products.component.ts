import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  products = [];
  prodSubscription: Subscription = new Subscription;

  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
    this.prodSubscription = this.prodService.prodSubject.subscribe(
      (data: any) => {
        this.products = data;
      }
    );
    this.prodService.emitProducts();
  }

  ngOnDestroy() {
    this.prodSubscription.unsubscribe();
  }

}
