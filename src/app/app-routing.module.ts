import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontallComponent } from './Frontoffice/frontall/frontall.component';
import { BackallComponent } from './Backoffice/backall/backall.component';
import { CardComponent } from './Frontoffice/frontall/contentfront/card/card.component';
import { CardbComponent } from './Backoffice/backall/contentback/cardb/cardb.component';

const routes: Routes = [
  {path: "", component: FrontallComponent , children: [
    {path: 'card', component: CardComponent}
    ]},

    {path: "admin", component: BackallComponent , children: [
      {path: 'card1', component: CardbComponent}
      ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
