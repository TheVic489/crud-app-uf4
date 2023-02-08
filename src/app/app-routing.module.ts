import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EsdevenimentsComponent } from './esdeveniments/esdeveniments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Compo2Component
  },

  {
    path: 'register',
    component: Compo1Component
  },

  {
    path: 'esdeveniments',
    component: EsdevenimentsComponent
  },

  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
