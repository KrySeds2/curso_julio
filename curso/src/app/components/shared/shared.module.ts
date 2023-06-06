import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { ListItems2Module } from './list-items2/list-items2.module';
import { TableModules } from './table-usuarios/table.module';
import { TableProfilesModule } from './table-profiles/table-profiles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirectivesModule,
    ListItems2Module,
    TableModules,
    TableProfilesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    DirectivesModule,
    ListItems2Module,
    TableProfilesModule,
    TableModules,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
