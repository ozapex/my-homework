import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormField],
  templateUrl: './name-dialog.component.html',
  styleUrl: './name-dialog.component.scss'
})
export class NameDialogComponent {
  userName: string = '';

  constructor(public dialogRef: MatDialogRef<NameDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close(this.userName);
  }
}
