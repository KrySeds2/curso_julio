import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso';

  list=[
    {
      title:'CV',
      version:'0.1',
      describe: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      id:'id1',
      custom:true
    },
    {
      title:'TAS360 AIFA',
      version:'0.1',
      describe: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      id:'id2',
      custom:true
    },
    {
      title:'TAS360 PEMEX',
      version:'0.2',
      describe: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      id:'id3',
      custom:true
    },
    {
      title:'TAS360 v1',
      version:'0.1',
      describe: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      id:'id4',
      custom:true
    },
    {
      title:'TAS360 v2',
      version:'0.3',
      describe: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      id:'id5',
      custom:true
    },
    {
      title:'Polytest',
      version:'0.2',
      describe: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      id:'id6',
      custom:true
    }
  ]
}
