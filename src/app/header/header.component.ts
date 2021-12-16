import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../model/Category';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: Category[] = [];
  categoriesSub: Subscription = new Subscription;

  constructor(
    private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesSub = this.categoriesService.categoriesSubject.subscribe(
      (data: Category[])=>{
        this.categories = data;
      }
    );
    this.categoriesService.emitCategories();
  }

}
