import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

    watchValue = new Subject<number>();
    constructor() { }

    getWatchValue() {
      return this.watchValue;
    }
    setWatchValue(value: number) {
      return this.watchValue.next(value);
    }

}
