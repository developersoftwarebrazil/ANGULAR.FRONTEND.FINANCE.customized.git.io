import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment";
import { Expense } from "../models/expense";

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  constructor(private httpClient: HttpClient) {


  }
  private readonly baseURL = environment['endPoint'];

  AddExpense(expense: Expense) {
    return this.httpClient.post<Expense>(`${this.baseURL}/AddExpense`, expense);
  }

}
