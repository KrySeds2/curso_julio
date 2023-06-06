import { Component } from '@angular/core';

@Component({
  selector: 'app-table-profiles',
  templateUrl: './table-profiles.component.html',
  styleUrls: ['./table-profiles.component.scss']
})
export class TableProfilesComponent {
  list=[
    {
      id:'1',
      alias:'Edgar',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum urna ligula, sit amet ornare augue sodales sed.',
      contacto:'8332670233',
      activo:true
    },
    {
      id:'2',
      alias:'Sara',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum urna ligula, sit amet ornare augue sodales sed.',
      contacto:'8333940533',
      activo:true
    },
    {
      id:'3',
      alias:'Gerardo',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum urna ligula, sit amet ornare augue sodales sed.',
      contacto:'8332456293',
      activo:false
    },
    {
      id:'4',
      alias:'Edson',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum urna ligula, sit amet ornare augue sodales sed.',
      contacto:'8332420133',
      activo:true
    },
    {
      id:'5',
      alias:'Elian',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum urna ligula, sit amet ornare augue sodales sed.',
      contacto:'8338760533',
      activo:false
    },
    {
      id:'6',
      alias:'Jenny',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum urna ligula, sit amet ornare augue sodales sed.',
      contacto:'8332234268',
      activo:true
    }
  ]

  custom(){
    // console.log('El valor de custom esta en false');
    return{
      'font-weight':'bold',
      'font-size':'1rem',
      'color':'blue',
      'text-align':'center',
      'width':'100%',


    };
  }
}
