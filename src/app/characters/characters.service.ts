import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {
  }

  getCharacters(num: number): Observable<any> {
    return this.http.get('https://swapi.dev/api/people/' + num);
  }
}
