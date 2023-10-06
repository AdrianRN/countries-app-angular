import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styles: [
  ]
})
export class SearchInputComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string):void {
    this.onValue.emit(value);
  }


}
