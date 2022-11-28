import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { Nav2Component } from './Component/nav2/nav2.component';
import { ProfilComponent } from './Component/profil/profil.component';
import { FooterComponent } from './Component/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { RepoComponent } from './Component/repo/repo.component';
import { GraphComponent } from './Component/graph/graph.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Nav2Component,
    ProfilComponent,
    FooterComponent,
    RepoComponent,
    GraphComponent,
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
