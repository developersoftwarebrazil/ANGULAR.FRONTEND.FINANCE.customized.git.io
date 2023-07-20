import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/selectModel';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
  }

  categoryForm:FormGroup;

  ngOnInit(){
    this.menuService.menuSelected = 2;
    this.categoryForm = this.formBuilder.group(
      {
        name:['', [Validators.required]]
      })
  }

  systemsList = new Array<SelectModel>()
  systemsSelect = new SelectModel();

  formDate(){
    return this.categoryForm.controls;
  }
  send(){
    debugger
    var data = this.formDate();
  }
}
