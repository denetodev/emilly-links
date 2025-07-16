import { Routes } from '@angular/router';
import { LinksComponent } from './pages/links/links.component';

export const routes: Routes = [
  { path: '', component: LinksComponent },
  { path: '**', redirectTo: '' },
];
