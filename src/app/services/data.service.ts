import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Definition from '../interfaces/definition-interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  currentDefinition: Definition[] = [];

  fetchData(word: string) {
    return this.http.get<Definition[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
  }
}
