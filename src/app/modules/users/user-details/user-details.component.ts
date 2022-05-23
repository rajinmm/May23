import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import {  ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
     id: string='';
    
    isAddMode: boolean | undefined;
    addUser= new FormGroup({
     id:  new FormControl(''),
     name: new FormControl(''),
     email: new FormControl(''),
     active: new FormControl(''),
     password: new FormControl('')
     
   });
  
  constructor(private user: UsersService,
    private router: ActivatedRoute, private route: Router) {
          this.id='';
          // this.addUser= new FormGroup({
          //   id: new FormControl(''),
          //   name: new FormControl(''),
          //   email: new FormControl(''),
          //   active: new FormControl(''),
          //   password: new FormControl('')
            
          // })
          
         }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
  this.isAddMode = !this.id;

  //   if (!this.isAddMode) {
  //     this.user.getSingleUsers(this.id) .pipe(first())
  //     .subscribe(x => this.addUser.patchValue(x));
  //  console.log(this.id);
  console.warn(this.router.snapshot.params['id'])
  this.user.getSingleUsers(this.router.snapshot.params['id']).
  subscribe((result:any) =>{
    this.addUser= new FormGroup({
      id: new FormControl(result['id']),
      name: new FormControl(result['name']),
         email: new FormControl(result['email']),
        active: new FormControl(result['active']),
         password: new FormControl(result['password'])
        
    })

    
  }
  
  )

}
  
onSubmit() {
 
  if (this.isAddMode) {
      this.userData();
  } else {
      this.updateData();
  }
}

  userData(){
  this.user.saveUser(this.addUser.value).subscribe((result) =>{
      console.warn("result here",result)
      alert("saved Successfully");
      this.addUser.reset();
      this.route.navigate(['root-nav']);
      
    }); 
    // console.log(this.addUser.value)
  }

  updateData(){

    console.warn(this.addUser.value);
    this.user.updateUser(this.router.snapshot.params['id'],this.addUser.value).subscribe((result) =>{
        console.warn("result here",result)
        alert("updated Successfully");
        this.addUser.reset();
        this.route.navigate(['root-nav']);
      }); 
      // console.log(this.addUser.value)
    }
  

}
