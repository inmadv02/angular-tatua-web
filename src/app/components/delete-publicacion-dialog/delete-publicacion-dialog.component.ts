import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PublicacionService } from 'src/app/services/publicacion.service';

export interface DialogDeletePublicacionData{
  publicacion_id: string;
}

@Component({
  selector: 'app-delete-publicacion-dialog',
  templateUrl: './delete-publicacion-dialog.component.html',
  styleUrls: ['./delete-publicacion-dialog.component.css']
})
export class DeletePublicacionDialogComponent implements OnInit {

  constructor(private service: PublicacionService, 
              @Inject(MAT_DIALOG_DATA) private data: DialogDeletePublicacionData, 
              public dialogRef: MatDialogRef<DeletePublicacionDialogComponent>) { }

  ngOnInit(): void {
  }

  deletePublicacionById(){
    this.service.deletePublicacion(this.data.publicacion_id).subscribe(result => {
      console.log(result)
      this.onNoClick();
      window.location.reload();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
