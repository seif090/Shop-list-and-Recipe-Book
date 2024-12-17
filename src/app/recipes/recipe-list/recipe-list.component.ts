import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.modal";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A Test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')

  ];
  constructor(private recipeService:RecipeService ) {

  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
