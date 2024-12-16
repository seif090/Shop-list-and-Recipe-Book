import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 @Output() IngredientAdded = new EventEmitter<Ingredient>();
onAddItem(){
  const IngAmount = this.amountInputRef.nativeElement.value;
  const IngName: string = this.nameInputRef.nativeElement.value;
  const newIngredient = new Ingredient(IngName, IngAmount);
  this.IngredientAdded.emit(newIngredient);


}
}
