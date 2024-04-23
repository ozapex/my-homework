import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeDirective } from '../capitalize.directive';

@Component({
  selector: 'app-third-job-component',
  standalone: true,
  imports: [CapitalizeDirective, CommonModule],
  templateUrl: './third-job-component.component.html',
  styleUrl: './third-job-component.component.scss'
})
export class ThirdJobComponentComponent {

}
