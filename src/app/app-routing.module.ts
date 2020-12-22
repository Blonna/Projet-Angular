import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultatsComponent } from './resultats/resultats.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/resultats', pathMatch: 'full'
  },
  {
    path: 'resultats', component: ResultatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
