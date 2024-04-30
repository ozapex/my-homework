import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-job.component.html',
  styleUrl: './first-job.component.scss'
})
export class FirstJobComponent implements OnInit{
  active: boolean = true;

  constructor() {}

  ngOnInit(): void {
    
  }
}
