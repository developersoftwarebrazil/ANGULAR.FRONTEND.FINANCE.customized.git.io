import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/selectModel';
import { MenuService } from 'src/app/services/menu.service';
import { CategoryComponent } from '../category/category.component';


@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
  }

  expenseForm:FormGroup;

  ngOnInit(){
    this.menuService.menuSelected = 3;
    this.expenseForm = this.formBuilder.group(
      {
        name:['', [Validators.required]],
        value:['', [Validators.required]],
        date:['', [Validators.required]],
        categorySelect:['', [Validators.required]],
        expenseSystemSelect:['', [Validators.required]],
      })
  }

  expenseSystemsList = new Array<SelectModel>()
  expenseSystemsSelect = new SelectModel();

  categoryList = new Array<SelectModel>()
  categorySelect = new SelectModel();

  formDate(){
    return this.expenseForm.controls;
  }
  send(){
    debugger
    var data = this.formDate();
  }
}
