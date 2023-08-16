import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment";
import { Category } from "../models/cateory";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private httpClient: HttpClient) {


  }
  private readonly baseURL = environment['endPoint'];

  AddCategory(category: Category) {
    return this.httpClient.post<Category>(`${this.baseURL}/AddCategory`, category);
  }
  CategoryUserList(userEmail: string) {
    return this.httpClient.get(`${this.baseURL}/CategoryUserList?userEmail=${userEmail}`);
  }

}
