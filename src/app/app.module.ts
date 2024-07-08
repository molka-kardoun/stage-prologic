import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontallComponent } from './Frontoffice/frontall/frontall.component';
import { HeaderfrontComponent } from './Frontoffice/frontall/headerfront/headerfront.component';
import { ContentfrontComponent } from './Frontoffice/frontall/contentfront/contentfront.component';
import { FooterfrontComponent } from './Frontoffice/frontall/footerfront/footerfront.component';
import { BackallComponent } from './Backoffice/backall/backall.component';
import { NavbackComponent } from './Backoffice/backall/navback/navback.component';
import { ContentbackComponent } from './Backoffice/backall/contentback/contentback.component';
import { FooterbackComponent } from './Backoffice/backall/footerback/footerback.component';
import { SidebarbackComponent } from './Backoffice/backall/sidebarback/sidebarback.component';
import { CardComponent } from './Frontoffice/frontall/contentfront/card/card.component';
import { CardbComponent } from './Backoffice/backall/contentback/cardb/cardb.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontallComponent,
    HeaderfrontComponent,
    ContentfrontComponent,
    FooterfrontComponent,
    BackallComponent,
    NavbackComponent,
    ContentbackComponent,
    FooterbackComponent,
    SidebarbackComponent,
    CardComponent,
    CardbComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
