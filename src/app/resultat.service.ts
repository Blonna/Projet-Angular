import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { characters } from './resultats/results';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  PublicK = 'e340e5651177db067c481ab70c7849b3';
  Hash = '96a2749f382dd15e319720bdfdc6140e';

  constructor(private http: HttpClient) { }
  getCaractere(): Observable<characters[]> {
    return this.http.get<characters[]>(
      `https://gateway.marvel.com:443/v1/public/characters?ts=furtif&apikey=${this.PublicK}&hash=${this.Hash}`
    );
  }
}
