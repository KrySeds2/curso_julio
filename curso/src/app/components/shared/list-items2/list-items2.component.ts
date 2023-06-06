import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { BodyDirective } from '../directives/body.directive';
import { HeaderDirective } from '../directives/header.directive';

@Component({
  selector: 'app-list-items2',
  templateUrl: './list-items2.component.html',
  styleUrls: ['./list-items2.component.scss']
})
export class ListItems2Component {
  // widthExp='2rem';
  // list =[{
  //   status: true
  // },{
  //   status: false
  // }];
  @Input() values:any
  @ContentChild(BodyDirective,{read:TemplateRef})bodyTemplate:any;
  @ContentChild(HeaderDirective,{read:TemplateRef})headerTemplate:any;

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
    custom1(){
      // console.log('El valor de custom esta en false');
      return{
        // 'font-weight':'bold',
        'font-size':'1rem',
        'color':'green',
        'text-align':'left',
        'width':'100%',

      };
    }


}
