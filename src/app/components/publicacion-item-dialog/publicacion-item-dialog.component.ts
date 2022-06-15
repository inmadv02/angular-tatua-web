import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetPublicacionDetailsDTO } from 'src/app/models/publicaciones/get_publicacion_details_dto';
import { GetPublicacionDTO } from 'src/app/models/publicaciones/get_publicacion_dto';
import { PublicacionService } from 'src/app/services/publicacion.service';

export interface DialogPublicacionDetailsData{
  publicacion_id: string;
}

@Component({
  selector: 'app-publicacion-item-dialog',
  templateUrl: './publicacion-item-dialog.component.html',
  styleUrls: ['./publicacion-item-dialog.component.css']
})
export class PublicacionItemDialogComponent implements OnInit {

  publicacion!: GetPublicacionDetailsDTO;

  constructor(private service: PublicacionService, @Inject(MAT_DIALOG_DATA) private data: DialogPublicacionDetailsData) { }

  ngOnInit(): void {
    this.service.getPublicacionById(this.data.publicacion_id).subscribe(result => {
      this.publicacion = result;
      console.log(this.publicacion)
    });
  }

}
