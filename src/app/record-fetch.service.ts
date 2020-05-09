import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordFetchService {

  API_URL = 'https://api.punkapi.com/v2/beers';
  constructor(private httpClient: HttpClient) {}

  getProfileUserList(): Observable<any> {  
    return this.httpClient.get(this.API_URL );
  }

}
