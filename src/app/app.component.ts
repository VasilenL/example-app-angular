import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-app';

  complexObjectParameters: {name: string, amount: number}[] = [
    {name: 'vasilen', amount: 34},
    {name: 'vasilen1', amount: 54},
    {name: 'vasilen2', amount: 64},
    {name: 'vasilen3', amount: 24},
  ];

  array = [1, 2, 3, 4];

  printButtonName($event: any) {
    console.log($event);

    alert($event.name);
  }
}
