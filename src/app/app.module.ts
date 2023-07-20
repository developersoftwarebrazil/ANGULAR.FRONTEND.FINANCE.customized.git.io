import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";

import{AuthGuard} from "./pages/guards/auth-guard"
import { HttpStatus, LoaderInterceptor } from "./interceptors/loader.interceptor";

const RxJS = [LoaderInterceptor, HttpStatus];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
   
    NgxSpinnerModule
  ],
  providers: [
    AuthGuard,
    RxJS,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  exports:
  [
    CommonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
