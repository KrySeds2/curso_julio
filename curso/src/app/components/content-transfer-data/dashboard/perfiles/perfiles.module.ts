import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilesComponent } from './view/perfiles.component';
import { PerfilesRoutes } from './perfiles.routing';
import { PerfilesFormComponent } from './perfiles-form/perfiles-form.component';
import { AppModule } from 'src/app/app.module';

import { ButtonModule } from 'primeng/button';
import { AddComponent } from './add/add.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    PerfilesComponent,
    PerfilesFormComponent,
    AddComponent,

  ],
  imports: [
    CommonModule,
    PerfilesRoutes,
    SharedModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[
    PerfilesComponent
  ]
})
export class PerfilesModule { }
