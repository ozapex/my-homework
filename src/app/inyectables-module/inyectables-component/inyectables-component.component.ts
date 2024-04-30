import { Component } from '@angular/core';
import { InyectablesServiceService } from '../inyectables-service.service';
import { PersistentDataService } from '../../shared/persistent-data.service';

@Component({
  selector: 'app-inyectables-component',
  standalone: true,
  imports: [],
  templateUrl: './inyectables-component.component.html',
  styleUrl: './inyectables-component.component.scss'
})
export class InyectablesComponentComponent {
  message: string;
  persistentData: string;

  constructor(private customService: InyectablesServiceService, 
    private persistentDataService: PersistentDataService){
    this.message = customService.getMessage();
    this.persistentData = persistentDataService.persistentData
  }
}
