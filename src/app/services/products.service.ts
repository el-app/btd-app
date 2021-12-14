import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [];
  prodSubject = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.getProductsFromServer();
  }

  emitProducts() {
    this.prodSubject.next(this.products);
  }

  getProductsFromServer() {
    const url = `${environment.API+'products?'+environment.API_KEY}`;

    this.http.get<any>(url).subscribe(
      (dataProducts) => {
        if (dataProducts.status == 200) {
          this.products = dataProducts.result;
          this.emitProducts();
        } else {
          console.log("Erreur : "+dataProducts.message);
        }
      }
    )
      
  }
}
