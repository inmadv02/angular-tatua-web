import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { GetPublicacionDetailsDTO } from 'src/app/models/publicaciones/get_publicacion_details_dto';
import { GetPublicacionDTO } from 'src/app/models/publicaciones/get_publicacion_dto';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { DeletePublicacionDialogComponent } from '../delete-publicacion-dialog/delete-publicacion-dialog.component';
import { PublicacionItemDialogComponent } from '../publicacion-item-dialog/publicacion-item-dialog.component';

@Component({
  selector: 'app-publicacion-table',
  templateUrl: './publicacion-table.component.html',
  styleUrls: ['./publicacion-table.component.css']
})
export class PublicacionTableComponent implements OnInit {

  publicaciones: GetPublicacionDTO[] = [];
  displayedColumns: string[] = ['foto', 'likes', 'detalles', 'borrar', 'favorito'];
  dataSource = new MatTableDataSource(this.publicaciones);

  constructor(private service: PublicacionService, private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones(){
    this.service.getListPublicaciones().subscribe(result => {
      this.publicaciones = result.content;
      this.dataSource = new MatTableDataSource(this.publicaciones);
    })
  }

  openPublicacionDetailsDialog(publicacion: GetPublicacionDetailsDTO) {
    this.matDialog.open(PublicacionItemDialogComponent, {
      height: '400px',
      width: '300px',
      data: publicacion
    });
  }

  openDeleteDialog(){
    this.matDialog.open(DeletePublicacionDialogComponent, {
      height: '400px',
      width: '300px',
    })
  }


}
