import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetUsuarioDTO } from 'src/app/models/auth/get_usuario_dto';
import { UserItemDialogComponent } from '../user-item-dialog/user-item-dialog.component';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() userInput!: GetUsuarioDTO

  constructor(private matDialog : MatDialog) { }

  ngOnInit(): void {
  }

  openUserDetailDialog() {
    this.matDialog.open(UserItemDialogComponent, {
      height: '400px',
      width: '300px',
      data: { user_id: this.userInput?.id }
    });
  }


}
