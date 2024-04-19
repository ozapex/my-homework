import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-job.component.html',
  styleUrl: './second-job.component.scss'
})
export class SecondJobComponent {
  letters: string[] = [ 'A', 'B', 'C'];
}
