import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WatchService } from 'src/app/services/watch.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent {
  @Input() selectedData: any;
  constructor(private watch : WatchService){

  }
  // emitData(){
  //   this.watch.setWatchValue(Math.random() *100);
  // }

}
