import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { SharedModule } from 'primeng/api';
import { ListItems2Module } from '../list-items2/list-items2.module';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    ListItems2Module,
    TableModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModules { }
