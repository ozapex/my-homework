import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slug',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slug.component.html',
  styleUrl: './slug.component.scss'
})
export class SlugComponent {
  slug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    })
  }
}
