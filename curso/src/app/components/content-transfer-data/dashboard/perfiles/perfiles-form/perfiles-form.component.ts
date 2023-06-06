import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfiles-form',
  templateUrl: './perfiles-form.component.html',
  styleUrls: ['./perfiles-form.component.scss']
})
export class PerfilesFormComponent {
  // @Input() formData:FormGroup;
  value = '';
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,

    ) {
    this.form = this.fb.group({
      alias:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      contacto:['',[Validators.required]],
      // activo:['',],
    })
  }

  submit(){
    if(this.form.invalid){
      return;
    }
    console.log(this.form.controls);
    console.log(this.form.value);
    alert('Se guardo de manera exitosa')
  }

  valid(vari:string){
    let result= this.form.get(vari)?.invalid;
    return result;
  }


  }

