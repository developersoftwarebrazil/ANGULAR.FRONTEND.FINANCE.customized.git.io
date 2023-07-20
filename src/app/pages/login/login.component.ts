import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    public formBuilder: FormBuilder, 
    private router: Router, private LoginService:LoginService,
    public authService: AuthService
    ){}
  loginForm: FormGroup;

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }
  get formData(){
    return this, this.loginForm.controls;
  }
  loginUser(){
    this.LoginService.login(this.formData["email"].value, this.formData["password"].value).subscribe(
      token => {
        this.authService.setToken(token);
        this.authService.authenticatedUser(true);
        this.router.navigate(['/home'])
      },
      error =>{
        alert("Ocorreu um erro ao tentar egerar o token!");
      }
    )
  }
}
