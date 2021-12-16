import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[] = [];
  categoriesSubject = new Subject<Category[]>();

  constructor(private http: HttpClient) {
    this.getCategoriesFromServer();
  }

  getCategoriesFromServer(): void{
    const url = `${environment.API + 'categories?' + environment.API_KEY}`;
    this.http.get<any>(url).subscribe(
      (response: any) => {
        if (response.status == 200) {
          //this.categories = response.result;
          this.emitCategories();
        } else {
          console.log(response.message);
        }
      }
    )
  }

  emitCategories(): void{
    this.categoriesSubject.next(this.categories);
  }
}
