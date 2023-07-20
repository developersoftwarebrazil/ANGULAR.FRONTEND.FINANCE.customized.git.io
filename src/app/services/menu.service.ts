import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuService
{
  constructor(){}

  private readonly baseUrl = environment["endPoint"];

  menuSelected:number;
}
