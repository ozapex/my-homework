import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistentDataService {
  persistentData = "I'm a variable inside a singleton";
}
