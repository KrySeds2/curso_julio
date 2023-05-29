import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent {
  list=[
    {
      title:'',
      version:'',
      describe: '',
      id:';'
    }
  ]

  submit(id:string){
    console.log(id);
  }

}
