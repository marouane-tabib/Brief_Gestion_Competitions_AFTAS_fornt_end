import { Routes } from '@angular/router';
import { CompetitionsComponent } from "./Modules/competitions/competitions.component";

export const routes: Routes = [
  {
    path: 'competitions', component: CompetitionsComponent
  },
  {
    path: 'competitions/create', component: CompetitionsComponent
  }
];
