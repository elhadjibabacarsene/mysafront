import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'administrateurs', {responseType: 'text'});
  }

  getFormateurBoard(): Observable<any> {
    return this.http.get(API_URL + 'formateurs', {responseType: 'text'});
  }

  getApprenantBoard(): Observable<any> {
    return this.http.get(API_URL + 'apprenants', {responseType: 'text'});
  }

  getCmBoard(): Observable<any> {
    return this.http.get(API_URL + 'community_managers', {responseType: 'text'});
  }
}
