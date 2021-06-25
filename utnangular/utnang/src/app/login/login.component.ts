import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup

  constructor(private fb:FormBuilder) {
      this.myForm=this.fb.group({
        email:["email@xxx.com",[Validators.required]],
        password:["password",[Validators.required,Validators.minLength(6)]]
      })
   }
   registrarse(){
     console.log(this.myForm.value)
   }

  ngOnInit(): void {
  }
}
