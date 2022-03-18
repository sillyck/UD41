import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) { }

  return() {
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8");
  }

  return_id(id: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
