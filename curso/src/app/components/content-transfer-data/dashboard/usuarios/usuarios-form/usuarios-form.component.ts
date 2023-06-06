import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent {
 // @Input() formData:FormGroup;
 value = '';
 form!: FormGroup;
 constructor(
   private fb: FormBuilder,

   ) {
   this.form = this.fb.group({
     name:['',[Validators.required]],
     correo:['',[Validators.required]],
     ciudad:['',[Validators.required]],
     telefono:['',[Validators.required]],
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
