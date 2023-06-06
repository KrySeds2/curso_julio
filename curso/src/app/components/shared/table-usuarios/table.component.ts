import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  list=[
    {
      id:'1',
      nombre:'Admin',
      correo: 'Admin@gmail.com',
      ciudad:'Tampico',
      telefono:'8333950233',
      status:true,
    },
    {
      id:'2',
      nombre:'User',
      correo: 'User@gmail.com',
      ciudad:'Madero',
      telefono:'8333920243',
      status:false,
    },
    {
      id:'3',
      nombre:'User1',
      correo: 'User1@gmail.com',
      ciudad:'Altamira',
      telefono:'8333750733',
      status:true,
    },
    {
      id:'4',
      nombre:'Admin1234',
      correo: 'Admin1234@gmail.com',
      ciudad:'Altamira',
      telefono:'8333851283',
      status:true,
    },
    {
      id:'5',
      nombre:'Technician',
      correo: 'Technician@gmail.com',
      ciudad:'Madero',
      telefono:'8333450434',
      status:false,
    },
    {
      id:'6',
      nombre:'Controller',
      correo: 'Controller@gmail.com',
      ciudad:'Madero',
      telefono:'8331956273',
      status:true,
    }
  ]
}
