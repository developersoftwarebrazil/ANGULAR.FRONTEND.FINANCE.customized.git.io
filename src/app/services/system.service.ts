import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment";
import { SystemExpense } from "../models/systemExpense";

@Injectable({
  providedIn: 'root'
})

export class SystemService {
  constructor(private httpClient: HttpClient) {


  }
  private readonly baseURL = environment['endPoint'];

  AddSystemExpense(systemExpense: SystemExpense) {
    return this.httpClient.post<SystemExpense>(`${this.baseURL}/AddSystemExpense`, systemExpense);
  }
  SystemUserList(userEmail: string) {
    return this.httpClient.get(`${this.baseURL}/SystemUserList?userEmail=${userEmail}`);
  }

  // método que ficará no usuário do sistema
  RegisterUserSystem(systemId: number, userEmail: string) {
    return this.httpClient.post<SystemExpense>(`${this.baseURL}/RegisterUserSystem?systemId=${systemId}&userEmail=${userEmail}`, null);
  }
}
