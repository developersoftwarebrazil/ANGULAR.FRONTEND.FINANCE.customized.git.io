import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
  }

  systemForm:FormGroup;

  ngOnInit(){
    this.menuService.menuSelected = 4;
    this.systemForm = this.formBuilder.group(
      {
        name:['', [Validators.required]]
      })
  }
  formDate(){
    return this.systemForm.controls;
  }
  send(){
    debugger
    var data = this.formDate();
  }
}
