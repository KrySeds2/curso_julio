import { Routes, RouterModule } from '@angular/router';
import { PerfilesComponent } from './view/perfiles.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'menu',
    pathMatch:'full'
   },{
    path:'',
    component:PerfilesComponent,
   },{
    path:'add',
    component:AddComponent,
   }
];

export const PerfilesRoutes = RouterModule.forChild(routes);
