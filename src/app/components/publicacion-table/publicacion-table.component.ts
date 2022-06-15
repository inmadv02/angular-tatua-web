import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreateFavoritoDTO } from 'src/app/models/favorito/create_favorito_dto';
import { GetPublicacionDetailsDTO } from 'src/app/models/publicaciones/get_publicacion_details_dto';
import { GetPublicacionDTO } from 'src/app/models/publicaciones/get_publicacion_dto';
import { PublicacionResponse } from 'src/app/models/publicaciones/list_publicaciones';
import { FavoritoService } from 'src/app/services/favorito.service';
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
  dto= new CreateFavoritoDTO();
  displayedColumns: string[] = ['detalles', 'foto', 'likes',  'borrar', 'favorito'];
  dataSource = new MatTableDataSource(this.publicaciones);
  liked: boolean = false;

  constructor(private service: PublicacionService, private favService: FavoritoService, private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones(){
    this.service.getListPublicaciones().subscribe(result => {
      this.publicaciones = result;
      this.dataSource = new MatTableDataSource(this.publicaciones);
    })
  }

  openPublicacionDetailsDialog(id:string) {
    this.matDialog.open(PublicacionItemDialogComponent, {
      height: '500px',
      width: '500px',
      data: {publicacion_id : id}
    });
  }

  openDeleteDialog(id:string){
    this.matDialog.open(DeletePublicacionDialogComponent, {
      height: '250px',
      width: '300px',
      data: {publicacion_id : id}
    })
  }

  like(post : GetPublicacionDTO){  
    this.dto.id_publicacion = post.id;
    this.dto.id_usuario = localStorage.getItem('id_usuario')!;
    this.favService.addFavorito(this.dto).subscribe(result => {
      this.liked = true;
    });
    window.location.reload();
  }

  dislike(id:string){  
    this.favService.removeFavorito(id).subscribe(result => {
      this.liked = false;
    });
    window.location.reload();
  }


}
