import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UsersService } from './services/users.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CargoService } from './services/cargo.service';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'admin-users';
  cargosControl = new FormControl<any | null>(null, Validators.required);
  departamentoControl = new FormControl<any | null>(null, Validators.required);

  displayedColumns: string[] = [

    'usuario',
    'primerNombre',
    'primerApellido',
    'segundoApellido',
    'acciones'
   ];
  dataSource!: MatTableDataSource<any>;
  cargos: any[] = [];
  departamentos: any[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog, private _userService: UsersService, private _cargoService: CargoService) {}

    ngOnInit(): void {
        this.getUserList();
        this.getCargoList();
    }


    addEditUserForm(){
     const dialogRef = this._dialog.open(UserAddEditComponent);
     dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getUserList();
        }

      },
     });
    }

    getUserList(){
      this._userService.getUsers().subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.dataSource.sort;
          this.dataSource.paginator = this.dataSource.paginator;
        },
        error: (err) => {
          console.log(err)
        }
      })
    }


    getCargoList(){
      this._cargoService.getCargo().subscribe({
        next: (res) => {
          this.cargos =res;


        },
        error: (err) => {
          console.log(err)
        }
      })
    }

    getDepartamentoList(){
      this._cargoService.getDepartamento().subscribe({
        next: (res) => {
          this.departamentos =res;
        },
        error: (err) => {
          console.log(err)
        }
      })
    }


    deleteUser(id:number){
      this._userService.deleteUser(id).subscribe({
        next: (res) => {
            alert('usuario eliminado');
            this.getUserList();
        },

        error: (err) => {

          console.log(err)
        }

      });
    }

    editUserForm(data: any){
      const dialogRef =  this._dialog.open(UserAddEditComponent,{
        data ,
      }
        );
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if(val){
              this.getUserList();
            }

          },
         });

     }
}


