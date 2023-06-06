import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableProfilesComponent } from './table-profiles.component';
import { ListItems2Module } from '../list-items2/list-items2.module';
import { TableModule } from 'primeng/table';




@NgModule({
  declarations: [
    TableProfilesComponent
  ],
  imports: [
    CommonModule,
    ListItems2Module,
    TableModule
  ],
  exports:[
    TableProfilesComponent
  ]
})
export class TableProfilesModule { }
