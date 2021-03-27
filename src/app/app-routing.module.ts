import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlternativeComponent } from './views/alternative/alternative.component';

import { HomeComponent } from './views/home/home.component'

const routes: Routes = [

  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent },
  {path:'alternative', component: AlternativeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
