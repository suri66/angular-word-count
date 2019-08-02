import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(private http: HttpClient) { }

  getAll(resource: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/' + resource);
  }

  post(resource: string, data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/' + resource, data);
  }
}
