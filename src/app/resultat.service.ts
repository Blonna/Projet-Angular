import { Injectable } from '@angular/core';
// import { from } from 'rxjs';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { characters } from './resultats/results';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {

  // PublicK = 'e340e5651177db067c481ab70c7849b3';
  // Hash = 'D705BB267D2B9BBBBA7EAEA8E917F59D';

  constructor(private http: HttpClient) { }
  getCaractere(): Observable<any> {
    return this.http.get<any>(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e340e5651177db067c481ab70c7849b3&hash=d705bb267d2b9bbbba7eaea8e917f59d`
    )
    .pipe(map((data: any) => data.data.results));
  }
}
