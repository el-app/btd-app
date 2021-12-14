import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../model/categories';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Categories[] = [];
  categoriesSubject = new Subject<Categories[]>();

  constructor(private http: HttpClient) {
    this.getCategoriesFromServer();
  }

  getCategoriesFromServer(): void{
    const url = `${environment.API + 'categories?' + environment.API_KEY}`;
    this.http.get<any>(url).subscribe(
      (response: Result) => {
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
