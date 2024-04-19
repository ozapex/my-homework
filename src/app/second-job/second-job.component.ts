import { Component } from '@angular/core';

@Component({
  selector: 'app-second-job',
  standalone: true,
  imports: [],
  templateUrl: './second-job.component.html',
  styleUrl: './second-job.component.scss'
})
export class SecondJobComponent {
  letters: string[] = [ 'A', 'B', 'C'];
}
