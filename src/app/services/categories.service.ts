import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/Category';
import { Result } from '../model/Result';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[] = [];
  catSubject = new Subject<Category[]>();

  constructor(private http: HttpClient) {
    this.getCategoriesFromServer();
  }

  emitCategories() {
    this.catSubject.next(this.categories);
  }

  getCategoriesFromServer() {
    const url = `${environment.API+'categories?'+environment.API_KEY}`;
    this.http.get<any>(url).subscribe(
      (responseCategories: Result) => {
        if (responseCategories.status == 200) {
          this.categories = responseCategories.result;
          this.emitCategories();
        } else {
          console.log(responseCategories.message);
        }
      }
    )
  }
}
