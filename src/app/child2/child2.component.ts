import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Input()
  complexObject: any;

  @Output()
  bigButtonEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log('Button is clicked ' + this.complexObject.name);

    this.bigButtonEventEmitter.emit(this.complexObject);
  }
}
