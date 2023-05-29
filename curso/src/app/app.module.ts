import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { ParentAComponent } from './components/parent-a/parent-a.component';
import { Item2Component } from './components/content-transfer-data/item2/item2.component';
import { ListItems2Component } from './components/content-transfer-data/list-items2/list-items2.component';
import { BodyDirective } from './components/directives/body.directive';
import { HeaderDirective } from './components/directives/header.directive';

import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ChildAComponent,
    ChildBComponent,
    ListCardsComponent,
    ParentAComponent,
    Item2Component,
    ListItems2Component,
    BodyDirective,
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
