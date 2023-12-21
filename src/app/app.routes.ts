import { Routes } from '@angular/router';
import { CompetitionsComponent } from "./Modules/competitions/competitions.component";

export const routes: Routes = [
  {
    path: '', component: CompetitionsComponent
  },
  {
    path: 'competitions', component: CompetitionsComponent
  }
];
