import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      username:[],
      password:[]
    })
   }

   login(){
         this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
           const user= res.find((a:any) => {
             return a.name === this.loginform.value.username &&  a.password === this.loginform.value.password
           })
          if(user)
          {
            alert("Login Successfully");
            this.loginform.reset();
            this.route.navigate(['root-nav']);
          }
          else{
            alert("user not Found");
          }

         })
   }
       

}
