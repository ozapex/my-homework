import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  childSlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.childSlug = params['childSlug'];
    })
  }
}
