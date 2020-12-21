import { Component, Input, OnInit } from '@angular/core';
import { characters } from './results';

@Component({
  selector: 'pa-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
titre = 'Resultats';

@Input() contenu: characters;
  constructor() { }

  ngOnInit(): void {
  }

}
