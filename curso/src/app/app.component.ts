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
      title:'Fiji',
      version:'0.1',
      describe: 'lorem',
      id:'id1',
      custom:true
    },
    {
      title:'Nicaragua',
      version:'0.1',
      describe: 'lorem',
      id:'id1',
      custom:false
    }
  ]
}
