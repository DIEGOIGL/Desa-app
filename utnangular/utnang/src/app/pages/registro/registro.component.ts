import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup

  constructor(private fb:FormBuilder) {
      this.myForm=this.fb.group({
        nombre:["Nombre",[Validators.required]],
        email:["email@xxx.com",[Validators.required]],
        password:["password",[Validators.required,Validators.minLength(6)]],
        cpassword:["password",[Validators.required,Validators.minLength(6)]]
      })
   }
   registrarse(){
     console.log(this.myForm.value)
     console.log(this.myForm.get('password').value)
   }

  ngOnInit(): void {
  }

}
