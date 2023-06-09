import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  constructor(private http: HttpClient) {}

  getUtilisateurs(): Observable<any> {
    const url = environment.apiPrefix + 'users';
    return this.http.get<any>(url);
  }
}
