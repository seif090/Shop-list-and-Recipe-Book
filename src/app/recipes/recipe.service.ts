import {Recipe} from "./recipe.modal";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Tasty Schmitzel', 'A super tasty Schmitzel', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',[
      new Ingredient('Meat', 1),
      new Ingredient('Flour', 2),
      new Ingredient('Eggs', 3)
    ]),
    new Recipe('Big Jumbo Burger', 'Eat it to be delicious', 'https://www.epicurious.com/recipes/food/views/insanity-burger-56389604',[
      new Ingredient('Buns', 1),
      new Ingredient('Meat', 2),
      new Ingredient('Lettuce', 1),
      new Ingredient('Tomatoes', 1),
      new Ingredient('Onions', 1),
      new Ingredient('Bacon', 1),
      new Ingredient('Cheese', 1)
    ])


  ];
  constructor(private slService: ShoppingListService) {
  }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredient(ingredients:Ingredient[]){
    this.slService.addIng(ingredients);
  }
}
