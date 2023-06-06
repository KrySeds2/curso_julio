import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { ParentAComponent } from './components/parent-a/parent-a.component';
import { Item2Component } from './components/content-transfer-data/item2/item2.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableModule } from 'primeng/table';
import { SharedModule } from './components/shared/shared.module';
import { NavComponent } from './components/shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ChildAComponent,
    ChildBComponent,
    ListCardsComponent,
    ParentAComponent,
    Item2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [
    NavComponent,
    ListCardsComponent,
    ParentAComponent,
    Item2Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
