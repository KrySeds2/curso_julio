import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { ParentAComponent } from './components/parent-a/parent-a.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ChildAComponent,
      ChildBComponent,
      ListCardsComponent,
      ParentAComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
