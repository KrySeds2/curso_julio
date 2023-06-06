import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './view/usuarios.component';
import { UsuariosRoutes } from './usuarios.routing';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { AddComponent } from './add/add.component';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosFormComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutes,
    SharedModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[
    UsuariosComponent
  ]
})
export class UsuariosModule { }
