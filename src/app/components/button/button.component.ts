import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() actionEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() text: string = '';

  @Input() btnColors: string = 'btn-primary';
  constructor() {}

  ngOnInit(): void {}
}
