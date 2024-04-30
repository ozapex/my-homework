import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NameDialogComponent } from '../name-dialog/name-dialog.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-material-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './material-component.component.html',
  styleUrl: './material-component.component.scss'
})
export class MaterialComponentComponent {
  userName: string = '';

  constructor(private dialog: MatDialog) {}

  openDialog(){
    const dialogRef = this.dialog.open(NameDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.userName = result;
    })
  }
}
