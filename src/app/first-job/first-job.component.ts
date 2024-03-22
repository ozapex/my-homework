import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-job',
  standalone: true,
  imports: [],
  templateUrl: './first-job.component.html',
  styleUrl: './first-job.component.sass'
})
export class FirstJobComponent implements OnInit{
  active: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }
}
