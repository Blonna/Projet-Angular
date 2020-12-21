import { Component, OnInit } from '@angular/core';
import { ResultatService } from '../../src/app/resultat.service';
import { characters } from './resultats/results';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = '';
caracteres: characters[];
constructor(private service: ResultatService) {}
// tslint:disable-next-line: typedef
ngOnInit() {
  return this.service.getCaractere().subscribe(
    resutats => { this.caracteres = resutats; }
  );
}
}
