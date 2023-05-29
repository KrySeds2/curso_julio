import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { BodyDirective } from '../body.directive';

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
}
