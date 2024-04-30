import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InyectablesServiceService {
 getMessage(): string {
  return 'Hello world from inyedctablesComponent!';
 }
  constructor() { }
}
