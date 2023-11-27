import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrl: './user-add-edit.component.scss'
})
export class UserAddEditComponent implements OnInit {
  userForm: FormGroup;


  constructor(private _fb: FormBuilder,
     private _userService: UsersService,
     private _dialogRef : MatDialogRef<UserAddEditComponent> ,
     @Inject(MAT_DIALOG_DATA) public data: any,
     ){
    this.userForm = this._fb.group({
      usuario: '',
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      idDepartamento: '',
      idCargo: '',

    });
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }


    onFormSubmit(){

      if (this.userForm.valid){
        if(this.data){

          this._userService.updateUser(this.data.id, this.userForm.value).subscribe({
            next: (val: any) => {
              alert('Usuario actualizado exitosamente')
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            }
          });

        }else{
          this._userService.addUsers
          this._userService.addUsers(this.userForm.value).subscribe({
            next: (val: any) => {
              alert('Usuario agregado exitosamente')
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            }
          });
          console.log(this.userForm.value);
        }


      }
   }
  }



