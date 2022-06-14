import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetUsuarioDTO } from 'src/app/models/auth/get_usuario_dto';
import { GetUsuarioAdminDTO } from 'src/app/models/user/get_usuario_admin_dto';
import { UserService } from 'src/app/services/user.service';
import { UserItemDialogComponent } from '../user-item-dialog/user-item-dialog.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  users!: GetUsuarioAdminDTO[];
  displayedColumns: string[] = ['foto', 'nombre', 'email', 'detalles'];
  dataSource = new MatTableDataSource(this.users);
  paginator!: MatPaginator;

  constructor(private service: UserService, private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.service.getListUsuarios().subscribe(result => {
      this.users = result.content;
      this.dataSource = new MatTableDataSource(this.users);
      setTimeout(() => this.dataSource.paginator = this.paginator);
    });
  }

  openUserDetailsDialog(user: GetUsuarioAdminDTO) {
    this.matDialog.open(UserItemDialogComponent, {
      height: '400px',
      width: '300px',
      data: user
    });
  }

  

}
