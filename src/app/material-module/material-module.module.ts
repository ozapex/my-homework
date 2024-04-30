import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MaterialComponentComponent } from './material-component/material-component.component';
import { NameDialogComponent } from './name-dialog/name-dialog.component';

@NgModule({
  declarations: [],
  imports: [
    MaterialComponentComponent,CommonModule, MatButtonModule, NameDialogComponent,
    MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule
  ]
})
export class MaterialModuleModule { }
