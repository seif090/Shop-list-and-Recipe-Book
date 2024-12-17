import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService ) {
  }
onAddItem(){
  const IngAmount = this.amountInputRef.nativeElement.value;
  const IngName: string = this.nameInputRef.nativeElement.value;
  const newIngredient = new Ingredient(IngName, IngAmount);
  this.slService.addIngredients(newIngredient);


}
}
