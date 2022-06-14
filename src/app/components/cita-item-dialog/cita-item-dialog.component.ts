import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetCitaDetailsDTO } from 'src/app/models/cita/get_cita_details_dto';
import { CitaService } from 'src/app/services/cita.service';

export interface DialogCitaDetailsData{
  cita_id: string;
}

@Component({
  selector: 'app-cita-item-dialog',
  templateUrl: './cita-item-dialog.component.html',
  styleUrls: ['./cita-item-dialog.component.css']
})
export class CitaItemDialogComponent implements OnInit {

  cita!: GetCitaDetailsDTO;

  constructor(private service: CitaService, @Inject(MAT_DIALOG_DATA) private data: DialogCitaDetailsData) { }

  ngOnInit(): void {
    this.service.getCitaById(this.data.cita_id).subscribe(result => {
      this.cita = result;
    });
  }

}
