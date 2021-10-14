import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

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
