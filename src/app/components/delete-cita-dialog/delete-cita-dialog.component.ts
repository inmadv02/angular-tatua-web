import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitaService } from 'src/app/services/cita.service';

export interface DialogDeleteCitaData{
  cita_id: string;
}

@Component({
  selector: 'app-delete-cita-dialog',
  templateUrl: './delete-cita-dialog.component.html',
  styleUrls: ['./delete-cita-dialog.component.css']
})
export class DeleteCitaDialogComponent implements OnInit {

  constructor(private service: CitaService, @Inject(MAT_DIALOG_DATA) private data: DialogDeleteCitaData, 
  public dialogRef: MatDialogRef<DialogDeleteCitaData>) { }

  ngOnInit(): void {
    
  }

  deleteCita(){
    this.service.deleteCita(this.data.cita_id).subscribe(result => {
      this.onNoClick();
      window.location.reload();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
