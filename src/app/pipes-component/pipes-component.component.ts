import { Component } from '@angular/core';
import { UppercasePipe } from '../uppercase.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes-component',
  standalone: true,
  imports: [UppercasePipe, CommonModule],
  templateUrl: './pipes-component.component.html',
  styleUrl: './pipes-component.component.scss'
})
export class PipesComponentComponent {
  amount: number = 1000;
  text: string = 'hello World!'
}
