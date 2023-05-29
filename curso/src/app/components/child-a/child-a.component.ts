import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent {
  // @Input('setItem') item:any;
  // @Output() change: EventEmitter<string> = new EventEmitter();
  _item = '';
  selected = false;
  _itemEmit = new EventEmitter();
  @Output() itemChange = new EventEmitter<number>();
  @Output() emitData = new EventEmitter<any>();

  @Input() data: any;

  // onChange(){
  //   this.change.emit(this.item.id);
  // }
  @Input()
  get item() {
    return this._item
  }
  set item(value: any) {
    this._item = value;
    // this._itemEmit.emit();
  }
  onChange() {
    this.clearSelection();
    if (this.selected) {
      this.selected = false; // Desmarca el elemento si ya está seleccionado
    } else {
      this.selected = true; // Marca el elemento si no está seleccionado
    }
    this.itemChange.emit(this.data);

  }
  receiveData(data: any) {
    this.emitData.emit(data)
  }

  clearSelection() {
    const elements = document.querySelectorAll('.container');
    elements.forEach((element) => {
      element.classList.remove('selected');
    });
  }

}
