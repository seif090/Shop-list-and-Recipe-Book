import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      )
  }

}
