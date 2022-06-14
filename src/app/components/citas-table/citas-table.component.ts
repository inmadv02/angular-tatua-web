import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { GetCitaDetailsDTO } from 'src/app/models/cita/get_cita_details_dto';
import { GetCitaDTO } from 'src/app/models/cita/get_cita_dto';
import { CitaService } from 'src/app/services/cita.service';
import { CitaItemDialogComponent } from '../cita-item-dialog/cita-item-dialog.component';
import { DeleteCitaDialogComponent } from '../delete-cita-dialog/delete-cita-dialog.component';

@Component({
  selector: 'app-citas-table',
  templateUrl: './citas-table.component.html',
  styleUrls: ['./citas-table.component.css']
})
export class CitasTableComponent implements OnInit {

  citas: GetCitaDTO[] = [];
  displayedColumns: string[] = ['foto', 'nombre', 'email', 'fecha', 'detalles'];
  dataSource = new MatTableDataSource(this.citas);

  constructor(private service: CitaService, private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.getCitas();
  }

  getCitas(){
    this.service.getCitas().subscribe(result => {
      this.citas = result.content;
      this.dataSource = new MatTableDataSource(this.citas);
    })
  }

  openCitaDetailsDialog(cita: GetCitaDetailsDTO) {
    this.matDialog.open(CitaItemDialogComponent, {
      height: '400px',
      width: '300px',
      data: cita
    });
  }

  openDeleteCitaDialog(){
    this.matDialog.open(DeleteCitaDialogComponent, {
      height: '400px',
      width: '300px',
    })
  }

}
