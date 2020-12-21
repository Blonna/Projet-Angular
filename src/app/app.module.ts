import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultatService } from './resultat.service';
import { RechercheComponent } from './recherche/recherche.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultatsComponent,
    RechercheComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResultatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
