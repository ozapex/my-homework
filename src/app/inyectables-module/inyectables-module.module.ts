import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InyectablesComponentComponent } from './inyectables-component/inyectables-component.component';
import { InyectablesServiceService } from './inyectables-service.service';



@NgModule({
  declarations: [InyectablesComponentComponent],
  imports: [
    CommonModule
  ],
  providers:[InyectablesServiceService]
})
export class InyectablesModuleModule { }
