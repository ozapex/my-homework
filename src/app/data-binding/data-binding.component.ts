import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  onClick() {
    alert('I was triggered by an event')
  }
  hiWorld = 'Hello World';
  onInputChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.hiWorld = target.value;
  }
}
