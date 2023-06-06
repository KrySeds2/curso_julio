import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './view/usuarios.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'menu',
    pathMatch:'full'
   },{
    path:'',
    component:UsuariosComponent,
   },{
    path:'add',
    component:AddComponent,
   }
];

export const UsuariosRoutes = RouterModule.forChild(routes);
