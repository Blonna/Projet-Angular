import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 titre = 'Footer';
  constructor() { }

  ngOnInit(): void {
  }

  montitre(): string{
    return this.titre;
  }

}
