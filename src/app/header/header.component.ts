import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarCollapsed = true;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthenticationComponent, {
      width: '90%',
      height: '90vh',
      data: { title: 'Modal Title', content: 'Modal Content' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
