import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee, TipoTrabajador } from '../../interfaces/employee.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['dni', 'tipoTrabajador', 'sueldo'];
  dataSource = new MatTableDataSource<Employee>([]);
  tipo: { [key: number]: any } = TipoTrabajador();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (resp) => {
        this.dataSource.data = resp;
      },
      error: (err) => console.log(err),
    });
  }

  GetTipo(codigo: number) {
    return this.tipo[codigo] ? this.tipo[codigo] : '';
  }

  GetColor(valor: Employee) {
    switch (valor.tipoTrabajador) {
      case 0:
        return '#6FE592';
      case 1:
        return '#AD7AE8';
      case 2:
        return '#D1DC87';
      default:
        return 'white';
    }
  }
}
