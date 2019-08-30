import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth/signup', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'map', component: MapComponent },
  { path: 'todo', loadChildren: './todo/todo.module#TodoModule' },
  { path: 'card', loadChildren: './card/card.module#CardModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
