import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ValidateRepPassDirective } from './directives/validate-rep-pass.directive';
import { CookieService } from 'ngx-cookie-service';
import { EsdevenimentsComponent } from './esdeveniments/esdeveniments.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { CompoTableComponent } from './components/compo-table/compo-table.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { InsertComponent } from './components/insert/insert.component';
import { InsufficientPermissionsComponent } from './components/insufficient-permissions/insufficient-permissions.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    PageNotFoundComponent,
    ValidateRepPassDirective,
    EsdevenimentsComponent,
    CompoTableComponent,
    HomeComponent,
    UpdateComponent,
    InsertComponent,
    InsufficientPermissionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
