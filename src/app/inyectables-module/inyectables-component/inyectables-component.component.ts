import { Component } from '@angular/core';
import { InyectablesServiceService } from '../inyectables-service.service';

@Component({
  selector: 'app-inyectables-component',
  standalone: true,
  imports: [],
  templateUrl: './inyectables-component.component.html',
  styleUrl: './inyectables-component.component.scss'
})
export class InyectablesComponentComponent {
  message: string;

  constructor(private customService: InyectablesServiceService){
    this.message = customService.getMessage();
  }
}
