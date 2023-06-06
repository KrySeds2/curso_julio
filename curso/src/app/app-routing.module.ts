import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/shared/nav/nav.component';
import { UsuariosModule } from './components/content-transfer-data/dashboard/usuarios/usuarios.module';
import { PerfilesModule } from './components/content-transfer-data/dashboard/perfiles/perfiles.module';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'panel',
  },

  {
    path: 'panel',
    component: NavComponent,
    children: [
      {
        path: 'users',
        loadChildren:()=>import('./components/content-transfer-data/dashboard/usuarios/usuarios.module').then(mod => mod.UsuariosModule)
      },
      {
        path: 'profile',
        loadChildren:()=>import('./components/content-transfer-data/dashboard/perfiles/perfiles.module').then(mod=> mod.PerfilesModule)
      },
      {
        path:'**',
        redirectTo: 'panel'
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
