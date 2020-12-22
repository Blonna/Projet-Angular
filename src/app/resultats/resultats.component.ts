import { Component, Input, OnInit } from '@angular/core';
import { ResultatService } from '../resultat.service';
import { Observable } from 'rxjs';
// import { characters } from './results';

@Component({
  selector: 'pa-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
titre = 'Resultats';

 @Input() contenu: any;
  constructor(private service: ResultatService) { }
 personnages: Observable<any>;
  ngOnInit(): void {
    this.getPersonnages();
  }
  getPersonnages(): any {
    this.personnages = this.service.getCaractere();
  }

}
