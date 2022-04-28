import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() value: EventEmitter<number> =
  new EventEmitter<number>();
 
  selectedChanged(event: any) {
    const id = Number(event.target.value);
    this.value.emit(id);

  }
}
