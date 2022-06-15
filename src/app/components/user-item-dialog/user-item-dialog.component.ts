import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetUsuarioDTO } from 'src/app/models/auth/get_usuario_dto';
import { UserService } from 'src/app/services/user.service';

export interface DialogUserDetailData{
  user_id: string;
}

@Component({
  selector: 'app-user-item-dialog',
  templateUrl: './user-item-dialog.component.html',
  styleUrls: ['./user-item-dialog.component.css']
})
export class UserItemDialogComponent implements OnInit {

  user!: GetUsuarioDTO;

  constructor(private service: UserService, @Inject(MAT_DIALOG_DATA) private data: DialogUserDetailData) { }

  ngOnInit(): void {
    this.service.getUsuarioById(this.data.user_id).subscribe(result => {
      this.user = result;
  
    });
  }


}
