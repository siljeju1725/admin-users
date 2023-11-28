import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargoService } from '../services/cargo.service';


@Component({
  selector: 'app-car-add-edit',
  templateUrl: './car-add-edit.component.html',
  styleUrl: './car-add-edit.component.scss'
})
export class CarAddEditComponent implements OnInit {
    carForm: FormGroup;


    constructor(private _fb: FormBuilder,
      private _cargoService: CargoService,
      private _dialogRef : MatDialogRef<CarAddEditComponent> ,
      @Inject(MAT_DIALOG_DATA) public data: any,
      ){
     this.carForm = this._fb.group({
       codigo: '',
       nombre: '',

     });
   }

    ngOnInit(): void {
      this.carForm.patchValue(this.data);
    }

}
