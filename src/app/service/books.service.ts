import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/books');
  }

  detail(id: any): Observable<any> {
    return this.http.get<any>(API_URL + '/books/' + id);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(API_URL + '/books/' + id);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(API_URL + '/books/', data)
  }
  update(data: any, id: any): Observable<any> {
    return this.http.put<any>(API_URL + '/books/' + id + '/', data)
  }
}
