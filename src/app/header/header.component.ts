import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categories } from '../model/categories';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: Categories[] = [];
  categoriesSub: Subscription = new Subscription;

  constructor(
    private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesSub = this.categoriesService.categoriesSubject.subscribe(
      (data: Categories[])=>{
        this.categories = data;
      }
    );
    this.categoriesService.emitCategories();
  }

}
