import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() actionEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
    
  @Input() isOk: boolean = true; 
  constructor() { }

  ngOnInit(): void {
  }

  action() {
    this.actionEvent.emit(this.isOk);
  }

}
