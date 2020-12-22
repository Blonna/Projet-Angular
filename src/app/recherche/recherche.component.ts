import { Component, OnInit } from '@angular/core';
import { ResultatService } from '../resultat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pa-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
titre = 'Recherche';

constructor(private service: ResultatService) { }
personnages: Observable<any>;
 ngOnInit(): void {
   this.getPersonnages();
 }
 getPersonnages(): any {
   this.personnages = this.service.getCaractere();
 }
}
