import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(`${this.baseUrl}api/Employees`)
  }
}
