import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [],
  template:'<h1>Hello World!</h1>',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {

}
